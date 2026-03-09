---
layout: cover
class: text-white
---

# Entire

<div class="text-xl mt-2 opacity-80">ツール紹介</div>

<div class="abs-br m-8 text-sm opacity-50">
  <a href="https://entire.io" target="_blank" class="text-white">entire.io</a>
</div>

---

# Prerequisite

* [entire.io](https://entire.io) アカウント作成 (GitHub OAuth)
* [Entire CLI](https://github.com/entireio/cli) をインストール
  * **Supported OS**: macOS / Linux (Windows は WSL)
  * **Supported Agent**: Claude Code, Gemini CLI, **OpenCode** (v0.4.6~), Cursor

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

# データ構造
[Core Concepts \- Entire](https://docs.entire.io/core-concepts)

### <mdi-source-branch/> main

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

* CodingAgentとのやりとりが記録される
* git commitで **Checkpoint** 作成 (git-hook)
  * コミットログにCheckpint ID自動付与

::right::

<div class="mt-22 ml-5">

### <mdi-source-branch/> entire/checkpoints/v1

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

* git commitの度にRewind可能なCheckpoint作成
* <span class="text-gray-400 text-sm">GitCommit/Checkpointをbi-directionalに参照可能と書いてあるけど、Checkpoint側にCommitID無い...?</span>
</div>

<!--
- Commit: https://github.com/kaakaa/yamdes/commit/b8b39173968d9a57637419f646000993d5d90cbc
- Checkpoint: https://github.com/kaakaa/yamdes/commit/6bbde57e1a69038b9b5c20638c065b4f978ed4b4
-->

---
layout: image-right
image: /entire_overview.png
---

# entire.io: Overview

* Throughput: Avg. tokens/checkpoint
* Iteration: Avg. steps/checkpoint
* Continuity: Peak session length
* Streak: 連続稼働日数
* Contributions グラフ（checkpoint単位）
* 使用エージェント内訳

---

# entire.io: Repository

* Repository内のCheckpoint一覧

![](/entire_repository.png)

---
layout: image-right
image: /entire_checkpoint.png
---

# entire.io: Checkpoint

* 会話の全ステップを時系列で確認
* **Line Attribution**: AI generated / Human added / Human modified の内訳
* File Diffをインラインで表示

---
layout: image-right
image: /entire_toolcall.png
---

# entire.io: Tool Calls

* 各ステップで使ったTool Callを展開可能
* Arguments / Result をそのまま確認できる
