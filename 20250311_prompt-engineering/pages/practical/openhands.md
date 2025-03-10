---
layout: two-cols
---

# OpenHands
(旧OpenDevin)

* All Hands AI社のSoftware Engineering AI Agents
  * [Devin](https://devin.ai/)のOSS版として開発されていた
  * 独自のWebIDEやGitHub Actionsとして利用可能
* [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)
  * Multi-agent構成で各Agentがプロンプトを持つ
  * メイン(?)であるCodeActエージェントが使用しているプロンプトを見てみる

::right::

<div class="mt-1 ml-2">
  <img src="/openhands-top.png" style="width: 90%"/>
  <div class="mt-2" />
  <img src="/openhands-arch.png"/>
  <span class="text-xs">ref: <a href="https://github.com/All-Hands-AI/OpenHands/blob/main/docs/static/img/system_architecture_overview.png" class="text-xs">Openhands/docs/static/img/system_architecture_overview.png</a></span>
</div>

---
preload: false
---
# [OpenHands](https://github.com/All-Hands-AI/OpenHands)
|<mdi-github/> [OpenHands/openhands/agenthub/codeact_agent/prompts/system_prompt.j2](https://github.com/All-Hands-AI/OpenHands/blob/dc9489ddcd7b22c164c9e66bea71626808010865/openhands/agenthub/codeact_agent/prompts/system_prompt.j2)

### <mdi-lightbulb-on class="c-yellow"/> Role Assignment / XML Tags
<div class="h-3"/>
<<< @/snippets/openhands/system_prompt.j2 md {1-6}{lines:true,maxHeight:'220px'}

* Role: **a helpful AI assistant**
  * コマンド実行、コード修正、技術的な問題の解決
* tool-use方式を採用しているため、Systemプロンプトの中で成果物に関する詳細な指示は与えない

---
preload: false
---
# [All-Hands-AI](https://github.com/All-Hands-AI/OpenHands)
|<mdi-github/> [OpenHands/openhands/agenthub/codeact_agent/tools/bash.py](https://github.com/All-Hands-AI/OpenHands/blob/dc9489ddcd7b22c164c9e66bea71626808010865/openhands/agenthub/codeact_agent/tools/bash.py)

### <mdi-lightbulb-on class="c-yellow"/> ReAct (Tool-use) / Structured Output

<div class="h-3"/>
<<< @/snippets/openhands/tools_bash.py {3-8|25-45}{lines:true,maxHeight:'220px'}

* Bash commandを実行するTool
* 他にもIPythonやブラウザを使うToolなどがある

---
preload: false
---
# [OpenHands](https://github.com/All-Hands-AI/OpenHands)
|<mdi-github/> [OpenHands/openhands/agenthub/codeact_agent/prompts/system_prompt.j2](https://github.com/All-Hands-AI/OpenHands/blob/dc9489ddcd7b22c164c9e66bea71626808010865/openhands/agenthub/codeact_agent/prompts/system_prompt.j2)

### miscs

<div class="h-1"/>
<<< @/snippets/openhands/system_prompt.j2 md {13-14}{lines:true,maxHeight:'80px'}

* 「ユーザーからのパスはカレントからのパスだと思うな。ちゃんと探せ。」

<<< @/snippets/openhands/system_prompt.j2 md {26-27}{lines:true,maxHeight:'80px'}

* git commitする時は、特段指示がない限り自分の情報を使え

<<< @/snippets/openhands/system_prompt.j2 md {49-51}{lines:true,maxHeight:'80px'}

* OpenHandsは依存ライブラリをインストールさせる(ちょっと怖い)