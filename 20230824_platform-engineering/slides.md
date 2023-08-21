---
title: Platformは好きですか?
githubPages:
  ogp: true
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  Platform Engineeringについて調べた
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
download: true
addons:
  - slidev-addon-rabbit
---

# Platform は好きですか？

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# Platform Engineering?

* 最近、<span class="text-green-400">Platform Engineering</span> という言葉が話題
  * [Platform Engineering MeetUp](https://platformengineering.connpass.com/)の参加者500人超
  * Gartnerのハイプサイクルにも登場
    * [3 Exciting New Trends in the Gartner Emerging Technologies Hype Cycle](https://www.gartner.com/en/articles/what-s-new-in-the-2022-gartner-hype-cycle-for-emerging-technologies)
  * Thoughtworks TechRadarでは2017年に登場
    * [Platform engineering product teams \| Technology Radar \| Thoughtworks](https://www.thoughtworks.com/en-ec/radar/techniques/platform-engineering-product-teams)
    * 2017/MAR: Assess 〜 2021/OCT: Adopt

::right::

<div class="mt-3 ml-5">
  <div class="text-xs mb-2">
    <img src="/connpass-pem.png" style="height: 200px"/>
    ref: <a href="https://platformengineering.connpass.com/">Platform Engineering Meetup - connpass</a>
  </div>
  <div class="text-xs mb=1">
    <img src="/gartner-hype-cycle.png" style="height: 240px"/>
    ref: <a href="https://www.gartner.co.jp/ja/newsroom/press-releases/pr-20220816">Gartner、「先進テクノロジのハイプ・サイクル：2022年」を発表</a>
  </div>
</div>

---
layout: section
---

# "Platform"...? 🤔

---

# モチベーション
* <span class="text-green-400">Platform Engineering</span>はバズワードっぽい匂いがする
  * 一般的な名詞の組み合わせで、どうとでも解釈することができ、かつ多くの人が関係していそうな気がしてくる (名前的に近しい活動をしてると尚更)
* よく分からないままワードが降ってくる前に調べておこうというモチベーション
  * [**Why**] なぜ<span class="text-green-400">Platform Engineering</span>をやるのか
  * [**Who**] 誰が<span class="text-green-400">Platform Engineering</span>をやるのか
  * [**What**] <span class="text-green-400">Platform Engineering</span>とは何をすることなのか
  * [**How**] どのように<span class="text-green-400">Platform Engineering</span>をやるのか

---
src: ./pages/01_why.md
---

---
src: ./pages/02_who.md
---

---
src: ./pages/03_what.md
---

---
src: ./pages/04_how.md
---

---
layout: section
---

# まとめ

---

# Wrap Up

#### [**Why**]
<span class="text-green-400">Platform Engineering</span>は<span class="text-green-400">DevOps</span>の推進による<span class="text-green-400">開発チームの負荷向上</span>や<span class="text-green-400">チーム間のバラツキ</span>を<span class="text-green-400">解消</span>するための取り組み

#### [**Who**]
<span class="text-green-400">Platform Engineering</span>はStream-aligned team の自律的な取り組みをサポートする<span class="text-green-400">Platform team</span>の責務

#### [**What**]
<span class="text-green-400">Platform Engineer</span>はStream-aligned teamが必要とする機能をセルフサービス型で提供するために<span class="text-green-400">Internal Developer Portal (IDP)</span>を構築する

#### [**How**]
<span class="text-green-400">Platform Engineer</span>は<span class="text-green-400">IDPをプロダクトとして(Platform as a Product)</span>提供し、そのUX/信頼性を向上することで、Stream-aligned teamの自律性をサポートする。IDPの例として<span class="text-green-400">Backstage</span>などがある。

---

<div class="ml-3">

# 感想
* 基本的には今までもあった共通技術基盤的な話
  * システム開発の中で開発組織が担う部分が薄くなってきており、XaaS/OSSなど共通して使われるものが多くなってきているという背景も共通技術基盤を後押し
  * DevOpsというコンテキストの流れで生まれた新たな潮流
</div>
