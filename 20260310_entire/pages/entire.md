---
layout: cover
class: text-white
---

<div class="flex flex-col items-center justify-center h-full gap-4">

<div class="flex items-center gap-4">
  <mdi-database-search class="text-green-400 text-6xl"/>
  <div>
    <div class="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
      Entire
    </div>
    <div class="text-xl opacity-70 mt-1">ツール紹介</div>
  </div>
</div>

<div class="flex gap-6 mt-4 text-sm">
  <div class="px-3 py-1 rounded-full bg-green-900 bg-opacity-60 border border-green-700 text-green-300 flex items-center gap-1">
    <mdi-check-circle class="text-xs"/> AI Agent対応
  </div>
  <div class="px-3 py-1 rounded-full bg-blue-900 bg-opacity-60 border border-blue-700 text-blue-300 flex items-center gap-1">
    <mdi-git class="text-xs"/> git統合
  </div>
  <div class="px-3 py-1 rounded-full bg-purple-900 bg-opacity-60 border border-purple-700 text-purple-300 flex items-center gap-1">
    <mdi-history class="text-xs"/> Checkpoint管理
  </div>
</div>

</div>

<div class="abs-br m-8 text-sm opacity-50">
  <a href="https://entire.io" target="_blank" class="text-white hover:opacity-100 flex items-center gap-1">
    <mdi-web/> entire.io
  </a>
</div>

---

# <mdi-console class="text-green-400"/> EntireCLI: Prerequisite
Agent Sessions情報を記録するツール

<div class="grid grid-cols-2 gap-4">

<div class="p-4 rounded-lg bg-blue-950 bg-opacity-40 border border-blue-800 border-opacity-50">
  <div class="flex items-center gap-2 mb-3">
    <mdi-account-plus class="text-blue-400 text-xl"/>
    <span class="font-bold text-blue-300">アカウント作成</span>
  </div>
  <div class="text-sm flex items-center gap-2">
    <mdi-github class="text-gray-300"/> <a href="https://entire.io" target="_blank">entire.io</a> (GitHub OAuth)
  </div>
</div>

<div class="p-4 rounded-lg bg-green-950 bg-opacity-40 border border-green-800 border-opacity-50">
  <div class="flex items-center gap-2 mb-3">
    <mdi-download class="text-green-400 text-xl"/>
    <span class="font-bold text-green-300">Entire CLI インストール</span>
  </div>
  <div class="text-sm space-y-1">
    <div class="flex items-center gap-2"><mdi-apple class="text-gray-300 text-xs"/> <mdi-linux class="text-gray-300 text-xs"/> macOS / Linux (Windows は WSL)</div>
    <div class="flex items-center gap-1 flex-wrap text-xs text-gray-400 mt-2">
      <span class="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300">Claude Code</span>
      <span class="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300">Gemini CLI</span>
      <span class="px-1.5 py-0.5 rounded bg-orange-900 text-orange-300 font-bold">OpenCode</span>
      <span class="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300">Cursor</span>
    </div>
  </div>
</div>

</div>

```shell
$ entire enable --agent opencode   # エージェント向け設定と git-hooks を作成
# 生成されるOpenCode用プラグイン
# → https://gist.github.com/kaakaa/5a30a1cb447197a9e679e9f66ec56b46

$ opencode                         # 普段通り使うだけ
> Tauriを使ったローカルで動作するシンプルかつ軽量なMarkdown Editorを作成したいです...
...
> /exit

$ entire status                    # Entireが管理しているSessionを表示
● Enabled · manual-commit · branch main
── Active Sessions ─────────────────────────────────────────────────────────────
OpenCode · ses_356
> "Tauriを使ったローカルで動作するシンプルかつ軽量なMarkdown Editorを作成したいです..."
started 23h ago · active 23h ago · tokens 35.4k
─────────────────
1 sessions
```

---
layout: two-cols
---

# <mdi-console class="text-greep-400"/> EntireCLI: データ構造
Agent Sessions情報を記録するツール


<div class="flex items-center gap-2 mt-3 mb-2">
  <mdi-source-branch class="text-green-400"/>
  <span class="font-bold text-green-300 font-mono">main</span>
  <span class="text-gray-400 text-xs">ブランチ</span>
</div>

```shell
.entire/
  logs/              # entire動作ログ
    entire.log
  metadata/.         # sessionごとの記録
    ses_356a586.../
      context.md.    # Session概要?
      full.jsonl.    # Messages, Tool Calls, etc...
      prompt.txt.    # 最新のプロンプト?
      summary.txt.   # ↑に対するAgent動作の要約?
  tmp/
    ses_356a586....json
  settings.json
src/
  ...
```

<div class="mt-3 text-sm space-y-1">
  <div class="flex items-center gap-2"><mdi-chat-processing class="text-blue-400 text-sm"/> CodingAgentとのやりとりが記録される</div>
  <div class="flex items-center gap-2"><mdi-source-commit class="text-green-400 text-sm"/> git commitで <span class="text-green-300 font-bold mx-1">Checkpoint</span> 作成 (git-hook)</div>
  <div class="flex items-center gap-2 text-gray-400 text-xs ml-4"><mdi-tag-outline class="text-xs"/> コミットログにCheckpoint ID自動付与</div>
</div>

::right::

<div class="mt-22 ml-5">

<div class="flex items-center gap-2 mb-2">
  <mdi-source-branch class="text-purple-400"/>
  <span class="font-bold text-purple-300 font-mono">entire/checkpoints/v1</span>
</div>

```shell
3b/a4aeefb257/.        # Checkpoint ID
  metadata.json.       # Checkpointメタデータ
  0/                   # Checkpoint内のセッションデータ
    content_hash.txt
    context.md
    full.jsonl.        # Full transcript with agent
    metadata.json.     # Token usage, attribution, etc.
    prompt.txt
41/988b16b53a/
...
```

<div class="mt-3 text-sm space-y-1">
  <div class="flex items-center gap-2"><mdi-backup-restore class="text-purple-400 text-sm"/> git commitの度にRewind可能なCheckpoint作成</div>
  <div class="flex items-conter gap-2"><mdi-alert-circle class="text-yellow-400 text-sm"/>Agentによるコマンド実行結果等も含まれるため公開注意</div>
  <div class="text-gray-400 text-xs mt-2"><mdi-comment-question-outline class="text-xs inline"/> GitCommit/Checkpointをbi-directionalに参照可能と書いてあるけど、Checkpoint側にCommitID無い...?</div>
</div>

<div class="abs-br m-8 text-sm opacity-50">
  <a href="https://entire.io" target="_blank" class="text-white hover:opacity-100 flex items-center gap-1">
    <mdi-web/> <a href="https://docs.entire.io/core-concepts">Core Concepts - Entire</a>
  </a>
</div>

</div>

<!--
- Commit: https://github.com/kaakaa/yamdes/commit/b8b39173968d9a57637419f646000993d5d90cbc
- Checkpoint: https://github.com/kaakaa/yamdes/commit/6bbde57e1a69038b9b5c20638c065b4f978ed4b4
-->

---
layout: image-right
image: /entire_overview.png
---

# <mdi-view-dashboard class="text-cyan-400"/> entire.io: Overview
Checkpoint の情報を表示するサービス

<div class="mt-3 space-y-2">

<div class="flex items-center gap-2 text-sm">
  <mdi-lightning-bolt class="text-yellow-400"/>
  <span><span class="text-yellow-300 font-bold">Throughput</span>: Avg. tokens/checkpoint</span>
</div>
<div class="flex items-center gap-2 text-sm">
  <mdi-refresh class="text-blue-400"/>
  <span><span class="text-blue-300 font-bold">Iteration</span>: Avg. steps/checkpoint</span>
</div>
<div class="flex items-center gap-2 text-sm">
  <mdi-link-variant class="text-green-400"/>
  <span><span class="text-green-300 font-bold">Continuity</span>: Peak session length</span>
</div>
<div class="flex items-center gap-2 text-sm">
  <mdi-fire class="text-red-400"/>
  <span><span class="text-red-300 font-bold">Streak</span>: 連続稼働日数</span>
</div>
<div class="flex items-center gap-2 text-sm">
  <mdi-chart-bar class="text-purple-400"/>
  <span>Contributions グラフ（checkpoint単位）</span>
</div>
<div class="flex items-center gap-2 text-sm">
  <mdi-robot class="text-cyan-400"/>
  <span>使用エージェント内訳</span>
</div>

</div>

---

# <mdi-folder-open class="text-orange-400"/> entire.io: Repository

<div class="flex items-center gap-2 mb-3 text-sm text-gray-400">
  <mdi-information-outline class="text-orange-300"/>
  Repository内のCheckpoint一覧 (左: entire.io / 右: github.com)
</div>

![](/entire_repository.png)

---
layout: image-right
image: /entire_checkpoint.png
---

# <mdi-flag-checkered class="text-green-400"/> entire.io: Checkpoint

<div class="mt-3 space-y-3">

<div class="flex gap-3 p-3 rounded-lg bg-green-950 bg-opacity-40 border border-green-800 border-opacity-50">
  <mdi-timeline class="text-green-400 text-xl mt-0.5 flex-shrink-0"/>
  <div class="text-sm">会話の全ステップを時系列で確認</div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-blue-950 bg-opacity-40 border border-blue-800 border-opacity-50">
  <mdi-percent class="text-blue-400 text-xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="text-sm font-bold text-blue-300">Line Attribution</div>
    <div class="text-xs text-gray-300 mt-1">
      <span class="px-1.5 py-0.5 rounded bg-blue-900 text-blue-300 mr-1">AI generated</span>
      <span class="px-1.5 py-0.5 rounded bg-green-900 text-green-300 mr-1">Human added</span>
      <span class="px-1.5 py-0.5 rounded bg-yellow-900 text-yellow-300">Human modified</span>
    </div>
  </div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-purple-950 bg-opacity-40 border border-purple-800 border-opacity-50">
  <mdi-code-braces class="text-purple-400 text-xl mt-0.5 flex-shrink-0"/>
  <div class="text-sm">File Diffをインラインで表示</div>
</div>

</div>

---
layout: image-right
image: /entire_toolcall.png
---

# <mdi-wrench class="text-orange-400"/> entire.io: Tool Calls

<div class="mt-3 space-y-3">

<div class="flex gap-3 p-3 rounded-lg bg-orange-950 bg-opacity-40 border border-orange-800 border-opacity-50">
  <mdi-chevron-down-circle class="text-orange-400 text-xl mt-0.5 flex-shrink-0"/>
  <div class="text-sm">各ステップで使ったTool Callを展開可能</div>
</div>

<div class="flex gap-3 p-3 rounded-lg bg-gray-800 bg-opacity-60 border border-gray-700 border-opacity-50">
  <mdi-eye class="text-gray-400 text-xl mt-0.5 flex-shrink-0"/>
  <div>
    <div class="text-sm font-bold text-gray-300">Arguments / Result</div>
    <div class="text-xs text-gray-400 mt-1">そのまま確認できる</div>
  </div>
</div>

</div>
