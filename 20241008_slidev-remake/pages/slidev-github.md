---
layout: section
---

# <logos-slidev/> & <logos-github-octocat class="animate-pulse"/>

---

# やりたい事

* Slidevの原稿はMarkdown(テキスト)ベースなので、GitHubで管理したい
  * 資料ごとにリポジトリ作るのは面倒なので、1リポジトリで管理したい
* GitHub Actions使ってビルドできるようにしたい

---
layout: two-cols
---

# 現在のリポジトリ構成

## Directory Structure
* <span class="text-orange-500">pages/</span>: 分割したスライドページ
* <span class="text-orange-500">public/</span>: 画像などのアセットファイル
* <span class="text-orange-500">slides.md</span>: メインのスライド (※ファイル名固定)

## npmコマンド

```bash
# devコマンドははエントリとなるMarkdownファイルを指定
$ npm run dev 20230601_slidev/slides.md

# ビルド処理はディレクトリ名を指定して実行 (`slides.md`を探す)
$ npm run build --slide=20230601_slidev
$ npm run export --slide=20230601_slidev
```
<span class="text-sm c-gray">各スクリプトで辻褄あわせてゴリゴリやってるだけ...</span>

::right::

<div class="c-gray">
<pre><code>
.
├── 20230202_supply-chain/
├── 20230406_sidejob/
<span class="c-white">├── <span class="text-orange-500">20230601_slidev/</span>
│   ├── <span class="text-orange-500">pages/</span>
│   │   ├── slidev-github.md
│   │   ├── slidev-rabbit.md
│   │   └── slidev.md
│   ├── <span class="text-orange-500">public/</span>
│   │   ├── sample-image.png
│   │   └── logo.png
│   └── <span class="text-orange-500">slides.md</span>
</span>├── README.md
├── package-lock.json
└── package.json
</code></pre>
</div>

---

# <logos-github-octocat/> GitHub Actions
Build & Deploy

Tagを打つことでTagと同名のディレクトリ内のSlidev資料をビルドしGitHub Pages / Releasesにデプロイする

![](https://github.com/kaakaa/slidev-resources-template/blob/091bcadf8e4351772a66493a69012882212068ad/assets/structure.png?raw=true)

[Slides Index](https://kaakaa.github.io/slidev-resources/) | [Releases · kaakaa/slidev\-resources](https://github.com/kaakaa/slidev-resources/releases)

---
layout: two-cols
---

# OGP対応

<div class="mr-5">
<Tweet id="1662822438600871936" />
</div>

::right::

<div class="mt-15"/>

#### GitHub Action内で以下の2ファイルを生成

<mdi-file-document-edit-outline/> `index.html`  

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

<mdi-file-document-edit-outline/> `preview.png`

OGPのプレビュー画像は、生成されたPDFファイルの先頭ページをPNG形式で切り取り  
