---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Advanced
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
download: true
addons:
  - slidev-addon-rabbit
---

# Slidev

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# はじめに

* ここ数年、仕事以外の発表資料作成はSlidevを使っている
* GitHubでMarkdown原稿を管理して、GitHub ActionsでPDF/SPAエクスポートしていけそうな感じになってきたのでやってることの棚卸し

---
src: ./pages/slidev.md
---

---
src: ./pages/slidev-github.md
---

---
src: ./pages/slidev-rabbit.md
---

---
layout: section
---

# まとめ

---

# Warp Up

* Slidev。Markdownでスライド資料作れて、2段組のページも簡単に作れるのいいぞ
* ディレクトリ構成を工夫することで、GitHub上でソース、SPA、PDFを管理できるのもいいぞ
* ウサカメで発表時間管理できるようになったのでもっといいぞ

<div class="mt-10"/>

# 感想
* 画像などのアセットもリポジトリに入れると1スライド10MBぐらいのサイズを取るので、アセット管理を外に逃がせるともうちょっとスマートにはなると思う(あまりやる気はないけど)
* Markdownで書けると言ってもレイアウト確認しながら作っていくので、楽という気はあまりしない
  * WYSIWYGなパワポとかの方が楽なんだろうなと感じることも多い
* とはいえGitHub Actions使ってPages/Releasesへのアップロードを自動化できたのは達成感ある
