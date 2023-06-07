---
layout: section
---

# GitHubでSlidev資産を管理する

---

# やりたい事

* Slidevの原稿はMarkdown(テキスト)ベースなので、GitHubで管理したい
  * 資料作成ごとにリポジトリ作るのは面倒なので、1リポジトリで管理したい
* GitHub Actions使ってビルドできるようにしたい

---
layout: two-cols
---

# 現在のリポジトリ構成

* スライド資料ごとにフォルダ分け
  * <span class="text-orange-500">pages/</span>: 分割したスライドページ
  * <span class="text-orange-500">public/</span>: 画像などのアセットファイル
  * <span class="text-orange-500">slides.md</span>: メインのスライド (※ファイル名固定)
* ビルドコマンド
  * `npm run dev 20230601_slidev/slides.md`
    * エントリとなるMarkdownファイルを指定
  * `npm run build --slide=20230601_slidev`
  * `npm run export --slide=20230601_slidev`
    * ディレクトリ名を指定して実行

::right::

<pre><code>
.
├── 20230202_supply-chain/
├── 20230406_sidejob/
├── <span class="text-orange-500">20230601_slidev/</span>
│   ├── <span class="text-orange-500">pages/</span>
│   │   ├── slidev-github.md
│   │   ├── slidev-rabbit.md
│   │   └── slidev.md
│   ├── <span class="text-orange-500">public/</span>
│   └── <span class="text-orange-500">slides.md</span>
├── README.md
├── package-lock.json
└── package.json
</code></pre>

---

# GitHub Actionsでのビルド・デプロイ

1. ディレクトリ名でタグを打つ
   * 例: `20230601_slidev`
2. GitHub PagesにSPAがリリースされる
3. GitHub ReleaseにPDFファイルがリリースされる

![](/20230601_slidev/structure.png)

---
layout: two-cols
---

# GitHub Actions

* 日本語フォントのインストール (豆腐 "□" 回避)
* リポジトリのcheckout
* npm環境セットアップ
* PDFエクスポート & Release作成
  * `${GITHUB_REF##*/}` = tag名

::right::

```yaml {all|8-9|10-12|13-17|18-25}
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
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: "npm"
      - run: npm ci
      - name: Export slidev as PDF
        run: |
          npm run export --slide=${GITHUB_REF##*/}
          npm run export:dark --slide=${GITHUB_REF##*/}
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
  <li>リポジトリcheckout</li>
  <li>npm環境セットアップ</li>
  <li>PDFエクスポート & Release作成</li>
  <li style="list-style-type:none;">
    <ul><li>* `${GITHUB_REF##*/}` = tag名</li></ul>
  </li>
</ul>
</div>

* SPAビルド
* GitHub Pagesへデプロイ
  * (GitHub Pagesのトップページにリンクを追加)

::right::

```yaml {2-3|4-11|12-17}
...(続き)...
      - name: Build slidev as SPA
        run: npm run build --slide=${GITHUB_REF##*/}
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          keep_history: true
          build_dir: docs
          verbose: true
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  update:
    needs: release
    permissions:
      contents: write
    uses: ./.github/workflows/update-index-page.yaml
    secrets: inherit
```

---
layout: two-cols
---

# その後、OGP対応もした

<div class="mr-5">
<Tweet id="1662822438600871936" />
</div>

::right::

<div class="mt-15"/>

#### GitHub Action内で以下の2ファイルを生成

`index.html`  

```html
<head>
  <!-- Slidev原稿のfront matterの情報を利用 (title, info) -->
  <meta property="og:title" content="${title}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:image" content="${imageUrl}"/>
  <meta property="og:description" content="${info}"/>
</head>
```

`preview.png`

OGPとして表示される画像は生成したPDFの先頭ページをPNG形式で切り取り  
<span class="c-gray text-xs">実装をCopilot Chatくんと頑張りましたが上手くいかなかったので、自力で探したライブラリを使って実装😢</span>

---

# というGitHub Template Repositoryを作成

https://github.com/kaakaa/slidev-resources-template  
-> https://github.com/kaakaa/slidev-resources

<img src="/20230601_slidev/slidev-resources-template.png" style="height:400px;"/>