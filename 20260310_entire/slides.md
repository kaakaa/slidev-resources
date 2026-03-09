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

# Entire / AgentTrace あたり

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
layout: two-cols
---

# "AI Slop" 問題
OSSメンテナの疲弊とコミュニティ変容の兆し


### <mdi-ghost class="text-purple-400"/> [Ghostty](https://github.com/ghostty-org/ghostty/blob/main/CONTRIBUTING.md)

- **Vouch System** 導入
  - [ghostty\-org/ghostty Vouch Request · Discussions](https://github.com/ghostty-org/ghostty/discussions/categories/vouch-request)
  - 初回コントリビューターは事前承認制
  - 承認なしのPRは自動Close
- [**Denouncement System**](https://github.com/ghostty-org/ghostty/blob/c735fd8c4724a275fef9d8263c1986694649b62b/CONTRIBUTING.md)
  - 悪質なAI投稿者をブラックリストへ
  - リストは他プロジェクトとも共有

<blockquote class="mt-4 text-sm italic border-l-4 border-purple-400 pl-3">
"open source has always been a system of trust. Before, we've had default trust. Now it's just <v-mark.underline class="text-purple-300">default deny.</v-mark.underline>"
<div class="text-right not-italic mt-1">— <a href="https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto" target="_blank" class="opacity-70 hover:opacity-100">Mitchell Hashimoto（Ghostty作者）</a></div>
</blockquote>

::right::

<div class="mt-21 ml-5">

### <mdi-console class="text-yellow-400"/> [curl](https://curl.se/dev/contribute.html)

- **"On AI use in curl"** ポリシーを明文化
  - AIを使った場合は開示義務
  - AI生成レポートのコピペ禁止
  - 偽セキュリティレポートは即バン

<blockquote class="mt-4 text-sm italic border-l-4 border-yellow-400 pl-3">
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

# What → Why の記録へ?
[Entire](https://entire.io/blog/hello-entire-world/) と [Agent Trace](https://cognition.ai/blog/agent-trace)

### <mdi-source-branch class="text-green-400"/> Entire <span class="text-gray-400 text-sm">(2026/02/10)</span>

- 元GitHub CEO設立、$60M調達
- Prompt/応答/ToolCallを **Checkpoint** 単位で保存
- AI/Human のコード比率を自動計算

<div class="mt-5"/>

### <mdi-vector-link class="text-blue-400"/> Agent Trace <span class="text-gray-400 text-sm">(2026/01/29)</span>

- コード変更を会話の **URL** と紐付けるオープン仕様
- Cursor/Cognition/Google Jules/Vercel/Cloudflare 等

<blockquote class="mt-3 text-sm italic border-l-4 border-blue-500 pl-3">
"If git tracked "Lines of Code" as the primary measure of output of the software engineer in the pre-AI era, then Agent Traces are the beginning of the new era when "Lines of Code" are the commodity, and <v-mark.underline class="text-blue-300">the new precious resource is context.</v-mark.underline>"

<div class="text-right not-italic mt-1">— <a href="https://cognition.ai/blog/agent-trace" target="_blank" class="opacity-70 hover:opacity-100">Cognition: Agent Trace</a></div>
</blockquote>

::right::

<div class="mt-22 ml-5">

[Hello Entire World · Entire](https://entire.io/blog/hello-entire-world/)

<blockquote class="mt-3 text-sm italic border-l-4 border-blue-500 pl-3">
<span class="text-lg">The game has changed. The system is cracking.</span><br/>
...<br/>
<span class="text-green-300">しかし今日でも、私たちはクラウド時代以前に構築され、本質的に人間同士のコラボレーションを前提としたソフトウェア開発ライフサイクルに依存しています。</span> そして、亀裂が生じつつあります。課題は人間による計画と追跡のために設計されており、構造化された機械可読な作業単位として設計されていません。Gitリポジトリは、AI時代の開発者が構築するすべてのバージョン管理に対応できるほど拡張されていませんでした。...<br/>

<br/>
自動車会社が伝統的な職人技に基づく生産システムを移動式組立ラインに置き換えたように、機械がコードの主役となる世界に向けて、ソフトウェア開発ライフサイクル全体を再考する必要があります。<span class="text-green-300">エージェント時代のための組立ラインを創造するのです。</span>
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

# まとめ
* Entire/AgentTraceは別物だった
  * EntireのCheckpointに格納されるAgent Session情報がAgent Trace形式になる、という補完関係はありうるかも
* Agentとのセッションの記録を残す重要性はなんとなく理解できるが、記録を残したことで具体的に何が良くなるのかはまだ分からない
  * 「Agentの精度が良くなる」「変更の意図がわかる」辺り、実感が湧かない
  * entire.ioもまだ単なるviewという感じ (CLIでRewindとかもあるからリッチにはなっていきそう)
* Anthropicの出方次第でしょうか
* Entire CheckpointのAgentセッションにはローカル端末の情報も含まれるので可視性に注意
  * GitHub等だとBranch単位の可視性設定はできないと思うので、既存プラットフォームで使えるものでは無さそうな
  * API KeyなどはCLIの機能でRedactされるが、あくまでベストエフォート
[entireio/cli: Entire is a new developer platform that hooks into your git workflow to capture AI agent sessions on every push, unifying your code with its context and reasoning\.](https://github.com/entireio/cli?tab=readme-ov-file#security--privacy)
> Your session transcripts are stored in your git repository on the entire/checkpoints/v1 branch. If your repository is public, this data is visible to anyone.

