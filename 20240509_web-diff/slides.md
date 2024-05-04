---
theme: seriph
highlighter: shiki
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
info: |
  ## 2024mmdd_web-diff
  Presentation slides for 2024mmdd_web-diff.
transition: slide-left
title: 2024mmdd_web-diff
mdc: true
githubPages:
  ogp: true
---

# Web Page Diff

Webページの変更箇所を知りたい...

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# <mdi-meditation /> Motivation


### <mdi-bomb class="text-2xl text-red-400" /> 課題
* SaaSサービスは日々更新されており、それに合わせて<span class="underline decoration-pink-500">ドキュメントも改版されている</span>
* (ドキュメント関連のソースが変更履歴とともに公開されたりしていない限り)<br><span class="underline decoration-pink-500">どこが変更されているのかを正確に把握することは困難</span>

### <mdi-bullseye-arrow class="text-2xl text-green-400" /> やりたい事
* Webドキュメントの<span class="underline decoration-sky-500">変更有無を検知したい</span>
* Webドキュメントの<span class="underline decoration-sky-500">変更点を把握したい</span>

<style>
h3 {
  --uno: bg-slate-800 rounded shadow mb-1 py-1;
}
ul {
  --uno: mb-5;
}
</style>

---
src: ./pages/diff.md
---

---
src: ./pages/web2pdf.md
---

---
layout: section
---

# 最終イメージ

Concept

---
layout: two-cols
---

# 最終イメージ
Concept

<ol>
  <li><code>config.yml</code>に取得対象のページ情報を記述</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">WebページをPDF形式で取得</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>pdf-visual-diff</code>でsnapshot(.png)と比較</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">snapshotとのdiffの確認</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">snapshotの更新</li>
</ol>

::right::

<div class="mt-10"/>

```shell {4}
.
├── pdf/
├── __snapshot__/
├── config.yml
├── diff.ts
├── fetch.ts
├── package-lock.json
└── package.json
```

<div class="mt-10"/>

```yaml
targets:
  - url: https://....
    title: "portal-page1"
  - url: https://....
    locator: "#zDocsContent"
    title: "portal-page2" # 出力ファイル名
  - url: https://....
    masks:
      - "ul.sitemap"   # マスク指定　(後述)
  ...
```


---
layout: two-cols
---

# 最終イメージ
Concept

<ol>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>config.yml</code>に取得対象のページ情報を記述</li>
  <li>WebページをPDF形式で取得</li>
  <li style="list-style:none"><ul><li>e.g.:<code>npm run fetch</code></li></ul></li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>pdf-visual-diff</code>でsnapshot(.png)と比較</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">snapshotとのdiffの確認</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>pdf-visual-diff</code>コマンドでsnapshotの更新</li>
</ol>

::right::

<div class="mt-10"/>

```shell {2-5,9,11}
.
├── pdf/
│   ├── portal-page1.pdf
│   ├── ...
│   └── portal-pageN.pdf
├── __snapshot__/
├── config.yml
├── diff.ts
├── fetch.ts
├── package-lock.json
└── package.json
```

---
layout: two-cols
---

# 最終イメージ
Concept

<ol>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>config.yml</code>に取得対象のページ情報を記述</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">WebページをPDF形式で取得</li>
  <li><code>pdf-visual-diff</code>でsnapshot(.png)と比較</li>
  <li>snapshotとのdiffの確認</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>pdf-visual-diff</code>コマンドでsnapshotの更新</li>
</ol>

::right::

<div class="mt-10"/>

```shell {3,6-9,12,15}
.
├── pdf/
│   ├── portal-page1.pdf
│   ├── ...
│   └── portal-pageN.pdf
├── __snapshot__/
│   ├── portal-page1.pdf.diff.png
│   ├── portal-page1.pdf.new.png
│   ├── portal-page1.pdf.png
│   └── ...
├── config.yml
├── diff.ts
├── fetch.ts
├── package-lock.json
└── package.json
```

---
layout: two-cols
---

# 最終イメージ
Concept

<ol>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>config.yml</code>に取得対象のページ情報を記述</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">WebページをPDF形式で取得</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20"><code>pdf-visual-diff</code>でsnapshot(.png)と比較</li>
  <li class="text-black dark:text-white text-opacity-20 dark:text-opacity-20">snapshotとのdiffの確認</li>
  <li><code>pdf-visual-diff</code>コマンドでsnapshotの更新</li>
</ol>

::right::

<div class="mt-10"/>

```shell {6-7,13}
.
├── pdf/
│   ├── portal-page1.pdf
│   ├── ...
│   └── portal-pageN.pdf
├── __snapshot__/
│   ├── portal-page1.pdf.png
│   └── ...
├── config.yml
├── diff.ts
├── fetch.ts
├── package-lock.json
└── package.json
```

---
layout: section
---

# おわりに

---

# 課題

* 画面上部にセクション追加などがあると、それ以降の部分が変更箇所としてすべて検出されていまう
* `networkidle`を待機しても画像の読み込みがされる場合とされない場合等がある (原因不明)
* CI等で定期的に回す場合、変更内容を確認しようとすると多くのsnapshot(.png)を保存する必要があるため、容量を食う
  * 変更有無の検知だけで回すぐらいなら気にならないと思うが

---

# Wrap Up
* `pdf-visual-diff`と`Playwright`等を使用することで、JSスタックのみでWebページの変更/差分検知ができる
* WebページのPDF化は、コンテンツの状態(load state, css media)を気にする必要がある
* Webページの更新検知をする場合、差分をどう取るかが重要 (サイドバー、画面上部の追加)

# まとめ
* Webページの監視は確認作業が辛い
* コンテンツの変更点はGit等でDiffとして確認できる形式になっているのが好ましい
