---
title: How to manage Slidev assets (REMAKE)
theme: seriph
background: https://cover.sli.dev
class: 'text-center'
highlighter: shiki
info: |
  ## How to manage Slidev assets
  Remake of [Advanced Slidev \- Slidev](https://kaakaa.github.io/slidev-resources/20230601_slidev).
  slidev-addon-rabbit, Build Slidev presentation by GitHub Actions, AI supported Slidev
drawings:
  persist: false
# use UnoCSS
css: unocss
download: true
rabbit:
  slideNum: true
githubPages:
  ogp: true
addons:
  - slidev-addon-rabbit
---

# How to manage Slidev assets

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# はじめに

* ここ数年、仕事以外の趣味の発表資料作成は **Slidev** を使っている
* 使い続ける中で原稿の管理方法とか試行錯誤してるので、それらの棚卸し
  * <logos-slidev/><span class="c-cyan">Slidev</span> ?
  * <logos-slidev/><span class="c-cyan">Slidev</span> と<span class="c-pink"><mdi-rabbit/>ウサギ</span> と <span class="c-green"><mdi-tortoise/>カメ</span> と
  * <logos-slidev/><span class="c-cyan">Slidev</span> と <logos-github-octocat/>GitHubと
  * <logos-slidev/><span class="c-cyan">Slidev</span> と <span class="c-pink animate-pulse"><mdi-brain/>AI</span> と

---
src: ./pages/slidev.md
---

---
src: ./pages/slidev-rabbit.md
---

---
src: ./pages/slidev-github.md
---

---
src: ./pages/slidev-ai.md
---


---
layout: section
---

# まとめ

---

# Warp Up

* Slidev。Markdownでスライド資料作れて、2段組のページも簡単に作れるのいいぞ
* ウサカメで発表時間管理できるようになったのでもっといいぞ
* ディレクトリ構成を工夫することで、GitHub上でソース、SPA、PDFを管理できるのもいいぞ
* AI使った原稿生成はまだ先が長いぞ

<div class="mt-10"/>

# 感想
* 画像などのアセットもリポジトリに入れると1スライド10MBぐらいのサイズを取るので、アセット管理を外に逃がせるともうちょっとスマートにはなると思う(あまりやる気はないけど)
* Markdownで書けると言ってもレイアウト確認しながら作っていくので、楽という気はあまりしない
  * WYSIWYGなパワポとかの方が楽なんだろうなと感じることも多い
* とはいえGitHub Actions使ってPages/Releasesへのアップロードを自動化できたのは達成感ある
* 100BぐらいのLocal LLMだとgpt-4oにまだまだ及ばない感じ
