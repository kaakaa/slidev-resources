# Practical Prompting

* プロダクトでは実際にどのようにPrompt Engineeringが使われているのか?
* OSSとして公開されているツールのPromptを眺めてみた
  * [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new)
  * [cline/cline](https://github.com/cline/cline)
  * [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)

※ プロンプトっぽいファイルを探して眺めているだけなので、見落としがある可能性は大いにあります

---

# Bolt.new

[AIにフルスタックアプリの生成を指示、Webブラウザ上のNode\.js環境でそのまま実行できる「bolt\.new」、StackBlitzが公開 － Publickey](https://www.publickey1.jp/blog/24/aiwebnodejsboltnewstackblitz.html)

* Web上に開発環境を構築するサービスを提供するStackBlitz社のサービス
* AIが同社が開発するWebContainer APIを使って開発環境を構築するサービス
* Web言語のみ対応しており、おそらくはNode.jsやjs関係のフレームワークがメインターゲット
* Prompt: [`bolt.new/app/lib/.server/llm/prompts.ts`](https://github.com/stackblitz/bolt.new/blob/main/app/lib/.server/llm/prompts.ts)
  * GitHubに公開されているコードがどのような位置付けのものかはよく分からない

---
layout: two-cols
---

# Bolt.new

::right::

<<< @/slides.md

