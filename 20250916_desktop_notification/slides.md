---
title: Desktop Notificatin Pet
info: |
  ## Desktop Notification Pet
  Agentの作業完了を通知してくれるGopher
theme: bricks
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


# Notifinvader

Desktop notification pet for agent hooks. 
(を作りたかった)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/kaakaa/slidev-resources" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


---

# やりたかったこと

* Claude Code hooks [^1] で、作業完了時に音を出して知らせるというのが話題

[Claude Codeでの作業完了通知方法まとめ](https://zenn.dev/karaage0703/articles/1cb99d9fca145f)
> Claude Codeで/hooksしてstop選択して、音を出すコマンドを設定します
> > afplay /System/Library/Sounds/Glass.aiff

<div class="mt-3"/>

* あまりPCから音を出したくない
* 昔、デスクトップ上にGohperを徘徊させるネタがあったので、その感じで通知できないか?

<hr class="mt-4 mb-2"/>

→ **時間切れになったので、GitHub Copilot/Vibe Codingまわりのアレコレまとめ**

[^1]: [フックリファレンス \- Anthropic](https://docs.anthropic.com/ja/docs/claude-code/hooks)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

<img src="/mattn_gopher.gif"/>
<p><a href="https://qiita.com/mattn/items/b7889e3c036b408ae8bd">本物の golang を... 本物の Gopher をお見せしますよ。 #Windows - Qiita</a></p>


---
layout: two-cols
---

# Notifinvader
通知する侵略者

* コマンドを実行するとデスクトップにキャラクターが現れ、メッセージを表示してくれる

```
$ notifinvatder -m "Complete processing the task"
```

* Go/[Ebiten](https://ebitengine.org/ja/)製
* 実用には耐えない
  * <small>e.g.: 長いメッセージが途切れる、デスクトップ右下に表示しようとしても座標がズレる(ので左上表示)、実際にAgent Hookで動かしてない、...</small>

<hr class="mt-4 mb-2"/>

* 音声でのVibe Coding
* GitHub Copilot Agent (Claude Sonnet 4)

::right::

<div class="ml-5 mt-10">
  <img src="/notifinvader-demo.gif" class="">
</div>

---
layout: two-cols
---

# Vibe Coding (voice)

<div class="mr-5">
  <Tweet id="1886192184808149383" scale="0.95"/>
</div>

::right::

<div class="mt-15" />

* Vibe Codingの始まりは、テキストによる指示でなく音声による指示

> ...。**また、私はSuperWhisperを使ってComposerと話すだけなので、キーボードにほとんど触れません。**...

* [VS Code Speech](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech) Extensionで簡単に音声入力ができる

---
layout: two-cols
---

# VS Code Speech
[VS Code Speech \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech)

* GitHub Copilot Chatへの指示を音声で行える
  1. <span class="text-gray-400">`Cmd + Shift + I` (Chatに移動)</span>
  2. `Cmd + I` (音声入力を開始)
  3. `Cmd`を押し続けている間は入力モード。話すとプロンプト送信。
     * `Cmd`を押したまま送信せず音声入力を終了するには、画面上のアイコンをクリック
* 設定
  * `accessibility.voice.speechLanguage`
    * **音声認識言語: `Japanese(Japan)`**
  * `accessibility.voice.speechTimeout`
    * 入力終了と判断するまでの無音時間 (ms)


::right::

<div class="ml-5">
  <img src="/vscode-speech.png">
  <div class="mt-10" />
  <img src="/vscode-speech-input.png">
</div>

---

# VS Code Speech
[VS Code Speech \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech)

* 音声認識精度はあまり良くないが、Copilotが文脈から補完してくれるため気にならない

![](/vscode-speech-example1.png)

> 「Copilot Instructionの内容を確認して、問題がなければmainにマージしてください」

と言っていた

---
layout: intro
---

![](/vscode-speech-example2.png)

## 健気...🥹

---
layout: section
---

# miscs

---
layout: two-cols-header
---

# GitHub Copilot Chat Debug

::left::

* GitHub Copilotが構築するプロンプト内容やLLMからのレスポンスを確認できるView
  * **Show Chat Debug View**メニューから開ける
* Copilot Chat Debugビュー
  * Agentモードの場合、`panel/editAction`と`list_dir`等のTool Callが交互に出現 (右下図)
  * `panel/editAction`には以下の情報
    * **Metadata**: 時刻、ID, Tool定義、等
    * **Request Messages**: プロンプト, 履歴
    * **Response**: レスポンスメッセージ

::right::

<div class="ml-5">
  <div class="mb-3">
    <img src="/copilot-chat-debug-view.png" class="h-50"/>
    <span class="text-sm">図: Copilot Chat Debugメニュー</span>
  </div>
  <div>
    <img src="/copilot-chat-debug-view-details.png" class="h-40 w-110 object-scale-down"/>
    <span class="text-sm">図: Copilot Chat Debug View</span>
  </div>
</div>


---

# GitHub Copilot Chat Debug

* GitHub MCP (70 tools) のOn/Offで1万トークンぐらい違う

```
GitHub MCP On:
`{"completion_tokens":158,"prompt_tokens":47361,"prompt_tokens_details":{"cached_tokens":47143},"total_tokens":47519}`

GitHub MCP Off:  
`{"completion_tokens":179,"prompt_tokens":34026,"prompt_tokens_details":{"cached_tokens":33648},"total_tokens":34205}`
```

* 不要なMCPはOffにしておいたほうがよさそう？
  * GitHub Copilotだと制限対象は「リクエスト数」なので、Token数は気にしなくていいのかも [^1]
  * > Copilot Chatのエージェントモード
    > 
    > Copilot Chat のエージェント モード	エージェント モードは、1 ユーザー プロンプトにつき1 つの Premium リクエストを使用します。モデルのレートで乗算されます。
* とはいえ、無駄なToolをLLMに見せないほうが良いとは思うので...

[^1]: [GitHub Copilot における要求 \- GitHub Docs](https://docs.github.com/ja/copilot/concepts/billing/copilot-requests)

<style>
.footnotes-sep {
  @apply mt-5 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>


---

# GitHub Copilot Chat Debug
[<logos-github-octocat/> microsoft/vscode\-copilot\-chat: Copilot Chat extension for VS Code](https://github.com/microsoft/vscode-copilot-chat)

* VSCode Copilot Chatのコードは公開されている
  * [Visual Studio CodeのAIエディタ化が前進、GitHub Copilot Chatがオープンソースで公開。現在プレリリース版 － Publickey](https://www.publickey1.jp/blog/25/visual_studio_codeaigithub_copilot_chat.html) (2025/06/30)
  * [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)の方は公開されていなそう (LLM Callとかソースのインデックスとかその辺り？)
* **Chat Debugの内容とVS Code Copilot Chatのソースと見比べてみる** (Agent/Claude Sonnet 4)

<img src="/copilot-chat-prompt1.png" class="scale-90"/>

---

# microsoft/vscode-copilot-chat
[<logos-github-octocat/> microsoft/vscode\-copilot\-chat: Copilot Chat extension for VS Code](https://github.com/microsoft/vscode-copilot-chat)

```tsx
// src/extenstion/prompts/node/agent/agentPrompt.tsx [2025/08/31 - 7b03d82]
async render(state: void, sizing: PromptSizing) {
  ...
	const baseAgentInstructions = <>.  // ← ① 変数baseAgentInstructions
		<SystemMessage>
			You are an expert AI programming assistant, working with a user in the VS Code editor.<br />
			{this.props.endpoint.family.startsWith('gpt-5') ? (
				<>
					<GPT5CopilotIdentityRule />. // ← gpt-5用のプロンプトがある?
					<Gpt5SafetyRule />
				</>
			) : (
				<>
					<CopilotIdentityRules />
					<SafetyRules />
				</>
			)}
		</SystemMessage>
		{instructions}
	</>;
  ...
```

---
layout: two-cols-header
---

# microsoft/vscode-copilot-chat
[<logos-github-octocat/> microsoft/vscode\-copilot\-chat: Copilot Chat extension for VS Code](https://github.com/microsoft/vscode-copilot-chat)

ところどころにモデル毎の分岐がある

::left::

<img src="/copilot-chat-prompt2.png"/>

::right::


<img src="/copilot-chat-prompt3.png" class="ml-5"/>

---

# microsoft/vscode-copilot-chat
[<logos-github-octocat/> microsoft/vscode\-copilot\-chat: Copilot Chat extension for VS Code](https://github.com/microsoft/vscode-copilot-chat)

ところどころにモデル毎の分岐がある

```ts
		return <InstructionMessage>
			<Tag name='instructions'>
				You are a highly sophisticated automated coding agent with expert-level knowledge across many different programming languages and frameworks.<br />
				The user will ask a question, or ask you to perform a task, and it may require lots of research to answer correctly. There is a selection of tools that let you perform actions or retrieve helpful context to answer the user's question.<br />
        // GrokCode用のプロンプト
				{isGrokCode && <>Your main goal is to complete the user's request, denoted within the &lt;user_query&gt; tag.<br /></>}
				<KeepGoingReminder modelFamily={this.props.modelFamily} />
        // GPT-5用のプロンプト
				{isGpt5 && <>Communication style: Use a friendly, confident, and conversational tone. Prefer short sentences, contractions, and concrete language. Keep it skimmable and encouraging, not formal or robotic. A tiny touch of personality is okay; avoid overusing exclamations or emoji. Avoid empty filler like "Sounds good!", "Great!", "Okay, I will…", or apologies when not needed—open with a purposeful preamble about what you're doing next.<br /></>}
				You will be given some context and attachments along with the user prompt. You can use them if they are relevant to the task, and ignore them if not.{tools[ToolName.ReadFile] && <> Some attachments may be summarized with omitted sections like `/* Lines 123-456 omitted */`. You can use the {ToolName.ReadFile} tool to read more context if needed. Never pass this omitted line marker to an edit tool.</>}<br />     
        ...   
```

* LLM毎にプロンプトを変更する場合に`tsx`形式は適していそうだけど、読み解くのが難しい
  * ただ、`.tsx`ならスナップショットテスト等で結果をある程度管理はできそうなのは良い

---
layout: two-cols-header
---

# POML: Prompt Orchestration Markup Language
[<logos-github-octocat/> microsoft/poml: Prompt Orchestration Markup Language](https://github.com/microsoft/poml)


Microsoftが公開したプロンプト用のマークアップ言語。  
ただ、立ち位置は微妙な感じ...?

::left::

<div class="mr-4">
  <img src="/poml-docs.png"/>
</div>

::right::

[Microsoft の POML 、単独開発者がプロジェクトの課題を明かしコミュニティから批判を受ける](https://biggo.jp/news/202508111933_POML_Project_Faces_Developer_Challenges)
> 現代の AI モデルは初期バージョンよりも**プロンプトの書式設定に敏感ではなく、AI 支援プログラミングが POML が解決するために設計された多くのタスクを処理できるようになった**と指摘した。

> コミュニティの開発者たちは、POML が既存の標準を基盤とするのではなく新しいマークアップ言語を作成するという決定を批判している。多くの人が、**POML はカスタム機能を持つ XML のように見えるが、特にブラケット構文内でのループとテンプレート変数の処理において、完全な XML 準拠性を欠いている**と指摘した。

---

# まとめ/感想

* [VS Code Speech](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-speech)等を使ったコーディングエージェントへの音声指示は実用的だと感じた。あとは慣れの問題。
  * LLMにより音声認識の精度が完全ではなくても、短いタスクであればコンテキストからタスク内容を補完することが可能になった
* TypeScript系のプロジェクトであれば、.tsx等でコンテキストからプロンプトを生成するのは理にかなっているように見える
  * 言語非依存なのが出てきそうな気もするが、POMLは浸透しなさそう? 普通のテンプレートエンジンで良いのか?
