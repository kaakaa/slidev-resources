---
layout: two-cols
---

# Cline

* 個人開発(?)のSWE AI Agent as VS Code Extension
  * ... AI assistant that can use your <span class="text-red-300">**CLI**</span> a<span class="text-red-300">**N**</span>d <span class="text-red-300">**E**</span>ditor.
  * RooCode等のFork先も含めて盛り上がってる様子
  * [MCP Marketplace](https://cline.bot/mcp-marketplace)で更なる盛り上がり...?
* [cline/cline](https://github.com/cline/cline)
  * ClineはOSSのため全て公開されている(はず)
  * Promptは[cline/src/core/prompts/system.ts](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/system.ts)?
    * 約1,000行ある
    * 同じディレクトリに [`responses.ts`](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/responses.ts) と言うのもあるが、今回は無視。

::right::

<div class="mt-10 ml-15">
  <img src="/cline.png" style="width: 80%"/>
  <div class="mt-3"/>
  <img src="/cline-mcp.png" style="width: 80%"/>
  <span class="text-xs">ref: <a href="https://cline.bot/mcp-marketplace" class="text-xs">MCP Marketplace</a></span>
</div>

---
preload: false
---
# [Cline](https://github.com/cline/cline)
|<mdi-github/> [cline/src/core/prompts/system.ts](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/system.ts)

### <mdi-lightbulb-on class="c-yellow"/> Role Assignment / XML Tags
<div class="h-3"/>
<<< @/snippets/cline/prompts_system.ts {12}{lines:true,maxHeight:'150px'}

* Role: **a highly skilled software engineer**

---
preload: false
---
# [Cline](https://github.com/cline/cline)
|<mdi-github/> [cline/src/core/prompts/system.ts](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/system.ts)

### <mdi-lightbulb-on class="c-yellow"/> ReAct (Tool-use) / Few-shot
<div class="h-3"/>
<<< @/snippets/cline/prompts_system.ts {16-18|38-49|247-353}{lines:true,maxHeight:'220px'}

* Toolの内容をプロンプト内にベタ書きしている...?
* 6-shotのTool-useに関するExample

---
preload: false
---
# [Cline](https://github.com/cline/cline)
|<mdi-github/> [cline/src/core/prompts/system.ts](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/system.ts)

### <mdi-lightbulb-on class="c-yellow"/> MCP Server
<div class="h-3"/>
<<< @/snippets/cline/prompts_system.ts {381-387}{lines:true,maxHeight:'220px'}

* MCPサーバー: AI Agentが使えるToolを外付けできるもの?
* (盛り上がってるので、これを調べるのも面白かったかも)

---
preload: false
---
# [Cline](https://github.com/cline/cline)
|<mdi-github/> [cline/src/core/prompts/system.ts](https://github.com/cline/cline/blob/39359307dcc9dc25d54507b2de5704c68c31b4c6/src/core/prompts/system.ts)

### <mdi-lightbulb-on class="c-yellow"/> Plan Mode
<div class="h-3"/>
<<< @/snippets/cline/prompts_system.ts {872-880}{lines:true,maxHeight:'220px'}

* Plan Mode: コード編集やコマンド実行を行う前に、指示に対するプランニングを行うモード
  * GitHub Copilot Workspaceでは、指示に対して変更が必要なファイルと編集内容を自然言語で表現し、それを確認/編集後に実際のコード修正をしていたので、同様の機能か

---
layout: two-cols
---

<img src="/cline-prompt-claude.png"/>

::right::

<div class="mt-18 ml-2">
  <img src="/cline-prompt-claude2.png"/>
</div>