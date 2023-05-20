---
layout: section
---

# GitHubでSlidev資産を管理する

---

# やりたい事

* SlidevはMarkdown(テキスト)ベースなので、GitHubで管理したい
  * 資料作成ごとにリポジトリ作るのは面倒なので、1リポジトリで管理したい
* GitHub Actions使ってビルドできるようにしたい

---
layout: two-cols
---

# リポジトリ構成

* スライド資料ごとにフォルダ分け
  * <span class="text-orange-500">pages/</span>: 分割したスライドページ
  * <span class="text-orange-500">public/</span>: 画像などのアセットファイル
  * <span class="text-orange-500">slides.md</span>: メインのスライド (※ファイル名固定)
* ビルドコマンド (GitHub Actions用)
  * `npm run build --slide=20230601_slidev`
    * <span class="text-blue-300">docs/</span>にSPAビルド
    * GitHub Pagesで公開するための`gh-pages`　ブランチへのサブモジュール
  * `npm run export --slide=20230601_slidev`
    * <span class="text-blue-300">dist/</span>にPDFビルド
    * GitHub Releaseとして公開

::right::

<pre><code>
.
├── 20230202_supply-chain/
├── 20230406_sidejob/
├── 20230601_slidev/
│   ├── <span class="text-orange-500">pages/</span>
│   │   ├── slidev-github.md
│   │   ├── slidev-rabbit.md
│   │   └── slidev.md
│   ├── <span class="text-orange-500">public/</span>
│   └── <span class="text-orange-500">slides.md</span>
├── <span class="text-blue-300">(docs/)</span>
├── <span class="text-blue-300">(dist/)</span>
├── README.md
├── package-lock.json
└── package.json
</code></pre>

---
layout: two-cols
---

# 成果物管理

* ディレクトリ名でタグを打つ
  * 例: `20230601_slidev`
* GitHub ReleaseにPDFファイルがリリースされる
* GitHub PagesにSPAがリリースされる

::right::

---
layout: two-cols
---

# GitHub Actions

* 日本語フォントのインストール (豆腐 "□" 回避)
* Git Submodule (gh-pagesブランチ)含めてcheckout
* npm環境セットアップ
* PDFエクスポート & Release作成
  * `${GITHUB_REF##*/}` = tag名


::right::

```yaml {all|8-9|10-12|14-18|19-23}
...
jobs:
  release:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    steps:
      - name: Install Japanese font
        run: sudo apt install -y fonts-noto
      - uses: actions/checkout@v3
        with:
          submodules: true
      - run: git submodule status --recursive
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: "npm"
      - run: npm install
      - run: npm run export --slide=${GITHUB_REF##*/}
      - uses: softprops/action-gh-release@v1
        with:
          files: |
            dist/*.pdf
...(続く)...
```

---
layout: two-cols
---

<div class="color-coolgray-600">
<ul>
  <li>日本語フォントのインストール (豆腐 "□" 回避)</li>
  <li>Git Submodule (gh-pagesブランチ)含めてcheckout</li>
  <li>npm環境セットアップ</li>
  <li>PDFエクスポート & Release作成</li>
  <li style="list-style-type:none;">
    <ul><li>* `${GITHUB_REF##*/}` = tag名</li></ul>
  </li>
</ul>
</div>

* SPAビルド
* `gh-pages`ブランチ更新
* `main`ブランチのSubmodule(`gh-pages`)を更新

::right::

```yaml {2|3-6|7-11}
...(続き)...
      - run: npm run build --slide=${GITHUB_REF##*/}
      - uses: EndBug/add-and-commit@v9
        with:
          cwd: './docs'
          new_branch: 'gh-pages'
      - uses: EndBug/add-and-commit@v9
        with:
          cwd: '.'
          new_branch: 'main'
          message: 'update submodule'
          
```
