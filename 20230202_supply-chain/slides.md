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
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
download: true
---

# Supply Chain Security Frameworks

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# 背景

* ソフトウェアサプライチェーン/SBOM関連の話題を見かけることが多い
* 巨大テック企業がサプライチェーン関連のフレームワークの整備を行なっているのを見かける

<div class="m-10"></div>

# 目的

* ソフトウェアサプライチェーンセキュリティ関連のフレームワークを見てみる
  * その中で言及されている技術を眺める
  * どのフレームワークがどの領域をターゲットにしているのかをなんとなく理解する

---
src: ./pages/background.md
---

---
src: ./pages/eo14028.md
---

---
src: ./pages/scs-frameworks.md
---

---

# Summary

* 各フレームワークに対する印象
  * **SSDF**: 組織論から運用まで、包括的に扱っている
  * **SLSA**: 簡易的だが導入としては良さそう
  * **CNCF**: 実践的なBest Practice集
  * **S2C2F**: 扱う領域がだいぶ絞られるため用途が限定的

* 開発者の立場だと**SLSA**で成熟度を見つつ、**CNCF**を参考にしながら成熟度を上げていく方針を取りそう
* 会社でやるなら**SSDF**なんじゃないですかね
