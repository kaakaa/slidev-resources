---
layout: two-cols
---

# <logos-stackblitz-icon/> Bolt.new

* StackBlitz社による<u>**in-browser AI web develompent agent**</u>サービス
  * WebContainer(ブラウザ上のNode.js実行環境)を利用し、ブラウザ上でAIとの開発が可能
  * 実行環境を持つためAIによるコマンド実行も可能

* [stackblitz/bolt\.new: Prompt, run, edit, and deploy full\-stack web applications](https://github.com/stackblitz/bolt.new)
  * ソースコードがGitHubにある
  * サービスはこれを元にしているらしい[^1]が、更新は活発でないため実サービスとは乖離してる模様

[^1]: <span class="text-sm">[What's the Difference Between Bolt (This Repo) and Bolt.new?](https://github.com/stackblitz/bolt.new/blob/main/CONTRIBUTING.md#whats-the-difference-between-bolt-this-repo-and-boltnew)</span>

::right::

<div class="mt-10 ml-35">
    <Tweet id="1841873251313844631" scale="0.8"/>
</div>

---
preload: false
---

# <logos-stackblitz-icon/> [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)
|<mdi-github/> [bolet.new/app/lib/.server/llm/prompts.ts](https://github.com/stackblitz/bolt.new/blob/main/app/lib/.server/llm/prompts.ts)

### <mdi-lightbulb-on class="c-yellow"/> Role Assignment
<div class="h-3"/>
<<< @/snippets/bolt.new/prompts.ts {6}{lines:true,maxHeight:'220px'}

* Role: `exceptional senior software developer` = 並外れたシニアソフトウェア開発者

---
preload: false
---

# <logos-stackblitz-icon/> [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)
|<mdi-github/> [bolet.new/app/lib/.server/llm/prompts.ts](https://github.com/stackblitz/bolt.new/blob/main/app/lib/.server/llm/prompts.ts)

### <mdi-lightbulb-on class="c-yellow"/> Constraints / [XML tags](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
<div class="h-3"/>
<<< @/snippets/bolt.new/prompts.ts {7-33}{lines:true,maxHeight:'220px'}

* `<system_constraints>`: できる事/できない事の明示
  * **WebContainer** を使う<br><div class="text-xs">[Webブラウザ上でWebAssemblyベースのNode\.js環境を実現する「WebContainer」がAPI提供開始。... － Publickey](https://www.publickey1.jp/blog/23/webwebassemblynodejswebcontainerapihttpnodejs_cli.html)</div>
  * `python`, `python3`を使えるが標準ライブラリに限る、等


---
preload: false
---

# <logos-stackblitz-icon/> [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)
|<mdi-github/> [bolet.new/app/lib/.server/llm/prompts.ts](https://github.com/stackblitz/bolt.new/blob/main/app/lib/.server/llm/prompts.ts)

### <mdi-lightbulb-on class="c-yellow"/> XML tags / Structured Output / Few-shot Prompting
<div class="h-3"/>
<<< @/snippets/bolt.new/prompts.ts {86-92|108|164-278}{lines:true, maxHeight:'250px'}

* Boltの最終成果物の指示 (最近で言う「Agentモード」のようなコマンドとファイル/フォルダの作成指示)
* 3-shot prompting

---
preload: false
---
# <logos-stackblitz-icon/> [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)
|<mdi-github/> [bolet.new/app/lib/.server/llm/prompts.ts](https://github.com/stackblitz/bolt.new/blob/main/app/lib/.server/llm/prompts.ts)

### <mdi-lightbulb-on class="c-yellow"/> Zero-shot Chain-of-Thoughts?
<div class="h-3"/>
<<< @/snippets/bolt.new/prompts.ts {95}{lines:true, maxHeight:'150px'}

* `Think step by step` の亜種?

<hr class="h-2"/>

<div class="h-3"/>
<<< @/snippets/bolt.new/prompts.ts {159-161}{lines:true, maxHeight:'100px'}

* `ULTRA IMPORTANT` \ﾊｲ!/
