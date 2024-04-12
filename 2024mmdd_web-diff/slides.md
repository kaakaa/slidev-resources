---
theme: seriph
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

# Welcome to Slidev

Presentation slides for developers

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

# Motivation

* 課題
  * SaaSサービスは日々更新されており、それに合わせてドキュメントも改版されている
  * ドキュメント関連のソースが変更履歴とともに公開されていたりしなければ、どこが変更されているか正確に把握することは困難
* やりたい事
  * Webドキュメントの変更有無を検知したい
  * Webドキュメントの変更点を把握したい

---
src: ./pages/diff.md
---

---
src: ./pages/web2pdf.md
---

---

コード
ディレクトリtree

# WebページのPDF化

* PlayWrightを使用
  * wait
  * wait locator
  * pdf size
    * ImageよりもPDFの方がサイズが小さい (本当にそうか確認)

# 設定のYAML化

* 独自形式の説明
* 最初はJSONで書いていたが、コメントが書けないのが気に入らなくてYAMLに

# 運用

* 手動実行しているコマンド・目視チェック
  * サイドバーメニューの変更があると辛いので、PDF取得時にmaskを設定
* 実行後のDirectory構造
  * PDFを記録として保存している (画像よりもPDFの方がサイズが小さい)

# 自動実行
* CI自動実行で通知飛ばすところまではできる
  * どこのチャットに飛ばすのが妥当か決めきれなかったので