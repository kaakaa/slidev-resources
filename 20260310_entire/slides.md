---
title: Entire / AgentTrace あたり
info: |
  ## Entire / AgentTrace あたり
  Presentation slides for Entire / AgentTrace.
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

<div class="flex flex-col items-center justify-center h-full gap-4">

<div class="flex items-center gap-3 text-5xl font-bold">
  <mdi-robot-excited class="text-blue-400 animate-pulse"/>
  <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
    Entire / AgentTrace あたり
  </span>
</div>

<div class="text-xl opacity-70 mt-2 flex items-center gap-2">
  <mdi-code-braces class="text-green-400"/>
  AI時代のコード帰属とコンテキスト管理
</div>

<div class="flex gap-6 mt-6 text-sm opacity-60">
  <div class="flex items-center gap-1"><mdi-calendar class="text-blue-300"/> 2026/03/10</div>
  <div class="flex items-center gap-1"><mdi-tag class="text-purple-300"/> OSS / AI Agent</div>
</div>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded-full border border-white border-opacity-30 cursor-pointer bg-white bg-opacity-5 hover:bg-opacity-15 transition-all flex items-center gap-2">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

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
layout: two-cols
---

# <mdi-alert-circle class="text-red-400"/> "AI Slop" 問題
<span class="text-gray-400 text-base">OSSメンテナの疲弊とコミュニティ変容の兆し</span>


### <mdi-ghost class="text-purple-400"/> [Ghostty](https://github.com/ghostty-org/ghostty/blob/main/CONTRIBUTING.md)

- <span class="text-purple-300 font-bold">Vouch System</span> 導入
  - [ghostty\-org/ghostty Vouch Request · Discussions](https://github.com/ghostty-org/ghostty/discussions/categories/vouch-request)
  - 初回コントリビューターは事前承認制
  - 承認なしのPRは自動Close
- [<span class="text-purple-300 font-bold">Denouncement System</span>](https://github.com/ghostty-org/ghostty/blob/c735fd8c4724a275fef9d8263c1986694649b62b/CONTRIBUTING.md)
  - 悪質なAI投稿者をブラックリストへ
  - リストは他プロジェクトとも共有

<blockquote class="mt-4 text-sm italic border-l-4 border-purple-400 pl-3 bg-purple-950 bg-opacity-30 py-2 pr-2 rounded-r">
"open source has always been a system of trust. Before, we've had default trust. Now it's just <v-mark.underline class="text-purple-300">default deny.</v-mark.underline>"
<div class="text-right not-italic mt-1">— <a href="https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto" target="_blank" class="opacity-70 hover:opacity-100">Mitchell Hashimoto（Ghostty作者）</a></div>
</blockquote>

::right::

<div class="mt-21 ml-5">

### <mdi-console class="text-yellow-400"/> [curl](https://curl.se/dev/contribute.html)

- <span class="text-yellow-300 font-bold">"On AI use in curl"</span> ポリシーを明文化
  - <mdi-eye class="text-yellow-300 text-sm"/> AIを使った場合は開示義務
  - <mdi-content-copy class="text-red-300 text-sm"/> AI生成レポートのコピペ禁止
  - <mdi-account-cancel class="text-red-400 text-sm"/> 偽セキュリティレポートは即バン

<blockquote class="mt-4 text-sm italic border-l-4 border-yellow-400 pl-3 bg-yellow-950 bg-opacity-30 py-2 pr-2 rounded-r">
"This makes sure the AI-generated inaccuracies and invented issues are <v-mark.underline class="text-yellow-300">filtered out early before they waste more people's time.</v-mark.underline>"
<div class="text-right not-italic mt-1">— <a href="https://curl.se/dev/contribute.html" target="_blank" class="opacity-70 hover:opacity-100">curl CONTRIBUTING</a></div>
</blockquote>

<!--
- AIによるPRの増加でOSSメンテナが疲弊している現状
- Ghostty: Mitchell Hashimoto（HashiCorp共同創業者・Ghostty作者）がVouchシステムを導入
- curl: Daniel Stenbergらがポリシーを明文化
-->
</div>

---
layout: two-cols
---

# <mdi-arrow-right-bold-circle class="text-green-400"/> What → Why の記録へ?
<span class="text-gray-400 text-base">[Entire](https://entire.io/blog/hello-entire-world/) と [Agent Trace](https://cognition.ai/blog/agent-trace)</span>

<div class="flex items-center gap-2 mt-3">
  <mdi-source-branch class="text-green-400 text-xl"/>
  <span class="font-bold text-green-300">Entire</span>
  <span class="text-gray-400 text-sm">(2026/02/10)</span>
</div>

- <mdi-account-tie class="text-green-300 text-sm"/> 元GitHub CEO設立、<span class="text-green-300 font-bold">$60M</span>調達
- Prompt/応答/ToolCallを <span class="text-green-300 font-bold">Checkpoint</span> 単位で保存
- <mdi-percent class="text-green-300 text-sm"/> AI/Human のコード比率を自動計算

<div class="flex items-center gap-2 mt-4">
  <mdi-vector-link class="text-blue-400 text-xl"/>
  <span class="font-bold text-blue-300">Agent Trace</span>
  <span class="text-gray-400 text-sm">(2026/01/29)</span>
</div>

- コード変更を会話の <span class="text-blue-300 font-bold">URL</span> と紐付けるオープン仕様
- Cursor/Cognition/GoogleJules/Vercel/Cloudflare 等

<blockquote class="mt-3 text-sm italic border-l-4 border-blue-500 pl-3 bg-blue-950 bg-opacity-30 py-2 pr-2 rounded-r">
"If git tracked "Lines of Code" as the primary measure of output of the software engineer in the pre-AI era, then Agent Traces are the beginning of the new era when "Lines of Code" are the commodity, and <v-mark.underline class="text-blue-300">the new precious resource is context.</v-mark.underline>"

<div class="text-right not-italic mt-1">— <a href="https://cognition.ai/blog/agent-trace" target="_blank" class="opacity-70 hover:opacity-100">Cognition: Agent Trace</a></div>
</blockquote>

::right::

<div class="mt-22 ml-5">

[Hello Entire World · Entire](https://entire.io/blog/hello-entire-world/)

<blockquote class="mt-3 text-sm italic border-l-4 border-green-500 pl-3 bg-green-950 bg-opacity-20 py-2 pr-2 rounded-r">
<span class="text-lg font-bold text-white not-italic">🔄 The game has changed. The system is cracking.</span><br/>
...<br/>
<span class="text-green-300">しかし今日でも、私たちはクラウド時代以前に構築され、本質的に人間同士のコラボレーションを前提としたソフトウェア開発ライフサイクルに依存しています。</span> そして、亀裂が生じつつあります。課題は人間による計画と追跡のために設計されており、構造化された機械可読な作業単位として設計されていません。Gitリポジトリは、AI時代の開発者が構築するすべてのバージョン管理に対応できるほど拡張されていませんでした。...<br/>

<br/>
自動車会社が伝統的な職人技に基づく生産システムを移動式組立ラインに置き換えたように、機械がコードの主役となる世界に向けて、ソフトウェア開発ライフサイクル全体を再考する必要があります。<span class="text-green-300 font-bold">エージェント時代のための組立ラインを創造するのです。</span>
</blockquote>

</div>
<!--
- AI Slop問題への直接の解決策ではなく補完的アプローチ
- コードの背景（Why）を可視化することでレビュー品質を向上
- ただし「コードの質が低い」という根本問題は解決しない
-->

---
src: ./pages/entire.md
---

---
src: ./pages/data.md
---

---

# <mdi-clipboard-check class="text-green-400"/> おわりに

<div class="grid grid-cols-1 gap-3 mt-4">

<div class="flex gap-3 p-3 rounded-lg bg-blue-950 bg-opacity-40 border border-blue-800 border-opacity-50">
  <mdi-swap-horizontal class="text-blue-400 text-2xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="font-bold text-blue-300">Entire と AgentTrace は別物</div>
    <div class="text-sm text-gray-300 mt-1">
      Entireの方が動作する仕様だが、セッション情報全体がgit管理されてしまう等課題も多い<br/>
      Agent Traceは単なるデータフォーマットなので組み入れやすいが、肝心のセッション情報がURLのみのため使いづらそう<br/>
      EntireのCheckpointに格納されるAgent Session情報がAgent Trace形式になる、という補完関係はありうるかも<br/>
    </div>
  </div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-yellow-950 bg-opacity-40 border border-yellow-800 border-opacity-50">
  <mdi-help-circle class="text-yellow-400 text-2xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="font-bold text-yellow-300">記録の具体的なメリットはまだ不明瞭</div>
    <div class="text-sm text-gray-300 mt-1">「Agentの精度が良くなる」「変更の意図がわかる」辺り、実感が湧かない<br/>entire.ioもまだ単なるviewという感じ (CLIでRewindとかもあるからリッチにはなっていきそう)</div>
  </div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-purple-950 bg-opacity-40 border border-purple-800 border-opacity-50">
  <mdi-robot class="text-purple-400 text-2xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="font-bold text-purple-300">Anthropicの出方次第でしょうか</div>
  </div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-red-950 bg-opacity-40 border border-red-800 border-opacity-50">
  <mdi-shield-alert class="text-red-400 text-2xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="font-bold text-red-300">セキュリティ・プライバシーに注意</div>
    <div class="text-sm text-gray-300 mt-1">
      Entire CheckpointのAgentセッションにはローカル端末の情報も含まれる<br/>
      GitHub等だとBranch単位の可視性設定はできないと思うので、既存プラットフォームで使えるものでは無さそうな<br/>
      API KeyなどはCLIの機能でRedactされるが、あくまでベストエフォート<br/>
      <a href="https://github.com/entireio/cli?tab=readme-ov-file#security--privacy" class="text-red-300 text-xs opacity-70 hover:opacity-100">entireio/cli: Security &amp; Privacy</a>
    </div>
  </div>
</div>

</div>

---
layout: cover
---

# 終