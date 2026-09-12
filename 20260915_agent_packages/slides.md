---
title: Agent Harnessのパッケージングと配布
info: |
  ## Agent Harnessのパッケージングと配布
  microsoft/apmとAgent Pluginsの活用
theme: seriph
background: https://cover.sli.dev
class: text-center
highlighter: shiki
mdc: true
comark: true
githubPages:
  ogp: true
addons:
  - slidev-addon-rabbit
rabbit:
  slidevNum: true
---

# Agent Harnessのパッケージングと配布

<div class="text-xl text-white/80 mt-2">microsoft/apm を調べてみた</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded-full bg-white/20 cursor-pointer hover:bg-white/30 transition">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/kaakaa/slidev-resources" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: center
---

# はじめに

<div class="text-sm text-gray-600 dark:text-gray-300 mb-8">本日の流れ</div>

<div class="space-y-5">

<div class="flex items-baseline gap-4">
<div class="text-3xl font-bold text-gray-400 dark:text-gray-500 w-10">1</div>
<div>
<div class="text-2xl font-bold">Harness Engineering</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-1">なぜUser Harnessを「配る」必要があるのか</div>
</div>
</div>

<div class="flex items-baseline gap-4">
<div class="text-3xl font-bold text-blue-500 w-10">2</div>
<div>
<div class="text-2xl font-bold text-blue-800 dark:text-blue-200">microsoft/apm</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-1">Agent Package Manager を調べてみた <span class="opacity-60">← 本日のメイン</span></div>
</div>
</div>

<div class="flex items-baseline gap-4">
<div class="text-3xl font-bold text-gray-400 dark:text-gray-500 w-10">3</div>
<div>
<div class="text-2xl font-bold">まとめと展望</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-1">Agent Plugins 1.0.0 とその周辺の動き</div>
</div>
</div>

</div>

<!--
本日は3部構成。
1部でHarnessを配る必要性の話をして、2部がメインでAPMを実際に触った話、
3部で展望として最近の動きに触れます。
-->

---
layout: cover
background: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80
class: text-center
---

# 1. Harness Engineering

<div class="text-xl text-white/70 mt-2">
なぜUser Harnessを「配る」必要があるのか
</div>

---

# AIエージェント開発の進化

<div class="grid grid-cols-4 gap-3 mt-8 text-sm">

<div class="rounded-xl border border-gray-400/40 p-4 text-center shadow">
<div class="text-3xl mb-2">📝</div>
<div class="font-bold text-base mb-2">Prompt<br/>Engineering</div>
<div class="text-gray-600 dark:text-gray-300 text-xs space-y-1 text-left">
<div>• 適切な指示文の設計</div>
<div>• Few-shot / CoT等の技法</div>
<div>• モデルへの指示を最適化</div>
</div>
</div>

<div class="rounded-xl border border-gray-400/40 p-4 text-center shadow">
<div class="text-3xl mb-2">🗂️</div>
<div class="font-bold text-base mb-2">Context<br/>Engineering</div>
<div class="text-gray-600 dark:text-gray-300 text-xs space-y-1 text-left">
<div>• 背景情報の提供</div>
<div>• Files / Docs / Memory</div>
<div>• RAGによる知識補完</div>
</div>
</div>

<div class="rounded-xl border-2 border-blue-500 bg-blue-500/15 p-4 text-center shadow-lg">
<div class="text-3xl mb-2">🔧</div>
<div class="font-bold text-base text-blue-800 dark:text-blue-200 mb-2">Harness<br/>Engineering</div>
<div class="text-blue-700 dark:text-blue-300 text-xs space-y-1 text-left">
<div>• ツール・環境の定義</div>
<div>• Skills / MCP / Hooks</div>
<div>• エージェントの能力設計</div>
</div>
</div>

<div class="rounded-xl border border-gray-400/40 p-4 text-center shadow">
<div class="text-3xl mb-2">🔄</div>
<div class="font-bold text-base mb-2">Loop<br/>Engineering</div>
<div class="text-gray-600 dark:text-gray-300 text-xs space-y-1 text-left">
<div>• 反復・評価の制御</div>
<div>• Feedback loops / Evals</div>
<div>• 品質・安全性の担保</div>
</div>
</div>

</div>

<div class="mt-8 text-center">
<span class="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
本日のフォーカス: Harness Engineering
</span>
</div>


---

# Harness Engineeringとは
**Agent = Model + Harness**. If you're not the model, you're the harness. <sup><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness" class="text-blue-700 dark:text-blue-300">[1]</a></sup>

<div class="grid grid-cols-3 gap-3 mb-4">

<div class="rounded-xl bg-orange-500/15 border border-orange-400/40 p-4">
<div class="text-2xl mb-1">📋</div>
<div class="font-bold text-orange-800 dark:text-orange-200 mb-1">System Prompts</div>
<div class="text-xs text-orange-700 dark:text-orange-300">ルール・人格・ワークフロー定義<br/>Instructions / AGENTS.md</div>
</div>

<div class="rounded-xl bg-green-500/15 border border-green-400/40 p-4">
<div class="text-2xl mb-1">⚡</div>
<div class="font-bold text-green-800 dark:text-green-200 mb-1">Tools / Skills / MCPs</div>
<div class="text-xs text-green-700 dark:text-green-300">ReActループで実行（推論→実行→観察）<br/>Bash・カスタムツール・MCP等</div>
</div>

<div class="rounded-xl bg-cyan-500/15 border border-cyan-400/40 p-4">
<div class="text-2xl mb-1">🕸️</div>
<div class="font-bold text-cyan-800 dark:text-cyan-200 mb-1">Orchestration</div>
<div class="text-xs text-cyan-700 dark:text-cyan-300">サブエージェント生成・ハンドオフ<br/>モデルルーティング</div>
</div>

<div class="rounded-xl bg-blue-500/15 border border-blue-400/40 p-4">
<div class="text-2xl mb-1">🧠</div>
<div class="font-bold text-blue-800 dark:text-blue-200 mb-1">Memory / Context</div>
<div class="text-xs text-blue-700 dark:text-blue-300">Filesystem・Web検索<br/>Session / User Memory</div>
</div>

<div class="rounded-xl bg-purple-500/15 border border-purple-400/40 p-4">
<div class="text-2xl mb-1">🖥️</div>
<div class="font-bold text-purple-800 dark:text-purple-200 mb-1">Infrastructure</div>
<div class="text-xs text-purple-700 dark:text-purple-300">Sandbox実行環境<br/>ブラウザ・テストランナー等</div>
</div>

<div class="rounded-xl bg-red-500/15 border border-red-400/40 p-4">
<div class="text-2xl mb-1">🪝</div>
<div class="font-bold text-red-800 dark:text-red-200 mb-1">Hooks / Middleware</div>
<div class="text-xs text-red-700 dark:text-red-300">コンパクション・継続処理<br/>ライフサイクルフック</div>
</div>

</div>

<div class="mt-3 text-xs text-right text-gray-700 dark:text-gray-300">
[1] <a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness" class="text-blue-700 dark:text-blue-300">The Anatomy of an Agent Harness - LangChain</a>
</div>

---

# 2種類のHarness
Agent HarnessとUser Harness

> In coding agents, **part of the harness is already built in** (e.g. via the system prompt, or ...(snip)...). But coding agents also provide us, their users, with **many features to build an outer harness** specifically for our use case and system. <sup><a href="https://martinfowler.com/articles/harness-engineering.html" class="text-blue-700 dark:text-blue-300">[2]</a></sup>

<div class="grid grid-cols-5 gap-4 items-start mb-5">

<div class="col-span-2 text-center">
<img src="https://martinfowler.com/articles/harness-engineering/harness-bounded-contexts.png" class="rounded-lg mx-auto w-full" alt="Model・Builder Harness・User Harnessの同心円図" />
<div class="text-xs mt-2 text-gray-700 dark:text-gray-300">
Fig.1: <a href="https://martinfowler.com/articles/harness-engineering.html" class="text-blue-700 dark:text-blue-300">martinfowler.com</a>
</div>
</div>

<div class="col-span-3 space-y-3">

<div class="rounded-2xl border-2 border-indigo-400 bg-indigo-500/15 p-4">
<div class="flex items-center mb-2">
<div class="text-3xl mr-2">🤖</div>
<div>
<div class="font-bold text-lg text-indigo-800 dark:text-indigo-200">Agent Harness</div>
<div class="text-xs text-indigo-700 dark:text-indigo-300">CodingAgentが標準提供</div>
</div>
</div>
<div class="grid grid-cols-2 gap-x-4 text-xs text-indigo-800 dark:text-indigo-200">
<div class="flex items-center"><carbon:checkmark class="mr-1 text-indigo-700 dark:text-indigo-300"/> ファイル操作・読み書き</div>
<div class="flex items-center"><carbon:checkmark class="mr-1 text-indigo-700 dark:text-indigo-300"/> コード検索・解析</div>
<div class="flex items-center"><carbon:checkmark class="mr-1 text-indigo-700 dark:text-indigo-300"/> コマンド実行・Sandbox</div>
<div class="flex items-center"><carbon:checkmark class="mr-1 text-indigo-700 dark:text-indigo-300"/> Web検索</div>
</div>
</div>

<div class="rounded-2xl border-2 border-emerald-400 bg-emerald-500/15 p-4">
<div class="flex items-center mb-2">
<div class="text-3xl mr-2">👤</div>
<div>
<div class="font-bold text-lg text-emerald-800 dark:text-emerald-200">User Harness</div>
<div class="text-xs text-emerald-700 dark:text-emerald-300">ユーザーが独自に構築</div>
</div>
</div>
<div class="grid grid-cols-2 gap-x-4 text-xs text-emerald-800 dark:text-emerald-200">
<div class="flex items-center"><carbon:star class="mr-1 text-emerald-700 dark:text-emerald-300"/> カスタムSkills・Tools</div>
<div class="flex items-center"><carbon:star class="mr-1 text-emerald-700 dark:text-emerald-300"/> 独自ワークフロー定義</div>
<div class="flex items-center"><carbon:star class="mr-1 text-emerald-700 dark:text-emerald-300"/> 組織固有の規約・ルール</div>
<div class="flex items-center"><carbon:star class="mr-1 text-emerald-700 dark:text-emerald-300"/> 社内MCP Servers</div>
</div>
</div>

</div>

</div>

<div class="mt-3 text-xs text-right text-gray-700 dark:text-gray-300">
[2] <a href="https://martinfowler.com/articles/harness-engineering.html" class="text-blue-700 dark:text-blue-300">Harness engineering for coding agent users - martinfowler.com</a>
</div>


---
layout: two-cols
---

# User Harnessの共有

<div class="text-sm text-gray-600 dark:text-gray-300 mb-6">共有を阻む2つの壁（個人的感想）</div>

<div class="space-y-6">

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">01</div>
<div>
<div class="font-bold">個人環境で偶発的に生まれる</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-1">組織の課題を解くために作られるが、<br/><b class="text-gray-800 dark:text-gray-100">出来上がったものを共有するハードルが高い</b></div>
</div>
</div>

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">02</div>
<div>
<div class="font-bold">共有の仕組みが各社バラバラ</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-1">Memory / Skills / MCP … 中身はAgentに依らず<br/>再利用できるはず。だが<b class="text-gray-800 dark:text-gray-100">Agentごとのパッケージングが要る</b>（右図）</div>
</div>
</div>

</div>

<div class="mt-8 text-center">
<div class="inline-block bg-blue-600 text-white text-sm font-bold px-8 py-3 rounded-full shadow-lg">
🎯 共通的なパッケージ化・配布の仕組みが必要
</div>
</div>

::right::

<div class="mt-10 ml-5">
<img src="/ref_harness_sharing.png">
<p class="text-xs">ref: <a href="https://zenn.dev/aws_japan/articles/agent-plugins-1-0-deep-dive">Agent Plugins 1.0.0 は何を標準化し、何を標準化しなかったのか - Zenn</a></p>
</div>

---
layout: center
---

# User Harnessの共有方法

<div class="text-sm mb-5">
User Harnessをチーム・組織で共有する方法はいくつかある。シンプルなファイル共有から標準化された仕様まで選択肢が広がっている。
</div>

<div class="grid grid-cols-3 gap-4">

<div class="rounded-xl border border-gray-400/40 bg-gray-500/10 p-4">
<div class="font-bold text-gray-800 dark:text-gray-200 mb-1">📁 リポジトリ直接共有</div>
<div class="text-xs text-gray-700 dark:text-gray-300 mb-3">例: Claude Code / GitHub Copilot</div>
<div class="space-y-1 text-xs text-gray-800 dark:text-gray-200">
<div>📌 <code>.claude</code>, <code>.github/</code> にファイルを配置</div>
<div>📌 Git clone / コピーで共有</div>
<div>&nbsp;</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-1 text-xs">
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ シンプル</div>
<div class="rounded bg-yellow-500/15 text-yellow-800 dark:text-yellow-200 px-2 py-1 text-center">⚠️ バージョン管理</div>
<div class="rounded bg-red-500/15 text-red-800 dark:text-red-200 px-2 py-1 text-center">❌ PJ特化</div>
<div class="rounded bg-red-500/15 text-red-800 dark:text-red-200 px-2 py-1 text-center">❌ Agent特化</div>
</div>
</div>

<div class="rounded-xl border-2 border-blue-400 bg-blue-500/15 p-4 shadow-lg">
<div class="font-bold text-blue-800 dark:text-blue-200 mb-1">📦 APM</div>
<div class="text-xs text-blue-700 dark:text-blue-300 mb-3">microsoft/apm</div>
<div class="space-y-1 text-xs text-blue-800 dark:text-blue-200">
<div>📌 <code>apm.yml</code> で依存を宣言</div>
<div>📌 lockfileで完全固定</div>
<div>📌 GitLab等Private対応</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-1 text-xs">
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ lockで固定</div>
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ 汎用化可能</div>
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ 複数Agent対応</div>
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ ガバナンス</div>
</div>
</div>

<div class="rounded-xl border border-purple-400/40 bg-purple-500/15 p-4">
<div class="font-bold text-purple-800 dark:text-purple-200 mb-1">📐 Agent Plugins</div>
<div class="text-xs text-purple-700 dark:text-purple-300 mb-3">agent-plugins.org (仕様のみ)</div>
<div class="space-y-1 text-xs text-purple-800 dark:text-purple-200">
<div>📌 <code>plugin.json</code> 標準フォーマット</div>
<div>📌 配布方法は実装依存</div>
<div>📌 ベンダー中立</div>
</div>
<div class="mt-3 grid grid-cols-2 gap-1 text-xs">
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ 標準化</div>
<div class="rounded bg-yellow-500/15 text-yellow-800 dark:text-yellow-200 px-2 py-1 text-center">⚠️ 配布は実装依存</div>
<div class="rounded bg-green-500/15 text-green-800 dark:text-green-200 px-2 py-1 text-center">✅ 複数Agent対応</div>
</div>
</div>

</div>

---
layout: cover
background: https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1920&q=80
class: text-center
---

# 2. microsoft/apm

<div class="text-xl text-white/70 mt-2">
Agent Package Manager を調べてみた
</div>

---
src: ./pages/apm.md
---

---
layout: cover
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80
class: text-center
---

# 3. まとめと展望

<div class="text-xl text-white/70 mt-2">
Agent Plugins 1.0.0 とその周辺の動き
</div>

---
src: ./pages/agent_plugins.md
---

---
layout: center
---

# まとめ

<div class="grid grid-cols-5 gap-10 mt-6">

<div class="col-span-3 space-y-5">

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">01</div>
<div>
<div class="font-bold">Harnessは「作る」から「配る」段階へ</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">User Harnessによる効率化効果を増幅</div>
</div>
</div>

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">02</div>
<div>
<div class="font-bold">APMは今すぐ試せる実装</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">1つの<code>apm.yml</code>で複数Agentに配れる。Privateリポジトリでも使える。APMパッケージ化もディレクトリ配置のみ。</div>
</div>
</div>

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">03</div>
<div>
<div class="font-bold">フォーマットの標準化はこれから</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">約1ヶ月前にAgent Plugins 1.0.0。APMは対応済みだが、Agent Pluginsに準拠した別の便利なHarnessマネージャーが生まれるのか？</div>
</div>
</div>

<div class="flex gap-4">
<div class="text-xs font-mono text-gray-400 dark:text-gray-500 pt-1.5 w-5">04</div>
<div>
<div class="font-bold">作成・配布はできるようになったが、Feedbackに難あり?</div>
<div class="text-sm text-gray-600 dark:text-gray-300 mt-0.5">apmでインストールしたHarnessを改善したときのフィードバックフローがまだスムーズでないと感じる</div>
</div>
</div>



</div>

<div class="col-span-2 border-l border-gray-400/30 pl-6">
<div class="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-wider mb-3">REFERENCES</div>
<div class="space-y-1.5 text-xs">
<div><a href="https://microsoft.github.io/apm/" class="text-blue-700 dark:text-blue-300">microsoft.github.io/apm</a></div>
<div><a href="https://agent-plugins.org/" class="text-blue-700 dark:text-blue-300">agent-plugins.org</a></div>
<div><a href="https://github.com/agentplugins/agent-plugins-spec" class="text-blue-700 dark:text-blue-300">agentplugins/agent-plugins-spec</a></div>
<div><a href="https://zenn.dev/aws_japan/articles/agent-plugins-1-0-deep-dive" class="text-blue-700 dark:text-blue-300">Agent Plugins 1.0.0 Deep Dive (Zenn)</a></div>
<div><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness" class="text-blue-700 dark:text-blue-300">The Anatomy of an Agent Harness</a></div>
<div><a href="https://martinfowler.com/articles/harness-engineering.html" class="text-blue-700 dark:text-blue-300">Harness engineering for coding agent users</a></div>
</div>
</div>

</div>

<!--
まとめ。
Harnessは作るだけでなく配る段階に入っている。
APMは今すぐ試せるし、芯はしっかりしている。ただし万能ではないので小さく始めるのがよい。
そして1ヶ月前にAgent Plugins 1.0.0が出た。ここは追いかける価値がある。
-->