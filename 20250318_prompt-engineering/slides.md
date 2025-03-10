---
title: 突撃!隣のPrompting!
info: |
  ## 突撃!隣のPrompting!
  様々なPromptEngineeringテクニックがあるが、実際のプロダクトでどのようにPrompt Engineeringテクニックが使われているのか見てみた。Bolt.new, OpenHands, Cline.
theme: seriph
background: https://cover.sli.dev
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
githubPages:
  ogp: true
addons:
  - slidev-addon-rabbit
rabbit:
  slidevNum: true
---

# 突撃！隣のPrompting!

Practical Prompt Engineering

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

---

# 概要
* 様々なPromptEngineeringテクニックがあるが、実際のプロダクトでどのようにPrompt Engineeringテクニックが使われているのか覗いてみた

<logos-github-octocat/> [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)  <br>

<logos-github-octocat/> [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)  <br>

<logos-github-octocat/> [cline/cline](https://github.com/cline/cline)<br>

---
src: ./pages/practical/bolt.new.md
---

---
src: ./pages/practical/openhands.md
---

---
src: ./pages/practical/cline.md
---

---

# Wrap Up

* Role Assinment, XML Tags, Few-shot辺りは当たり前に使われている
* Tool-use部分をプロンプト内で説明しているものも多かった (Bolt, Cline)
  * この辺りはMCPに吸収されていくのだろうか
* ファイル操作やコマンド実行時の細かな注意事項等も書かれていたが、共通項を見つけるのが難しい

# 感想

* プロンプト1文の有無でどう結果が変わるのか分からないのでやっぱり気持ち悪い
* とは言え、全体を通してXML Tagsを用いながら役割と制約等を書いていくという方向性は見えた
* やはりMCPは気になる(今更)
