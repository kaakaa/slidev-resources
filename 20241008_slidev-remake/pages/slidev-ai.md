---
layout: section
---

# <logos-slidev/> & <span class="c-pink animate-pulse"><mdi-brain/>(AI)</span>

---
slidaiv:
  prompt:
    - AIを使ってSlidevの原稿を生成するVS Code Extensionを公開したことを紹介したい
    - >-
      公開したVS Code Extension
      https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv
    - 元々、ChatAIでスライドの原稿を生成する方法は提案されていたが、もっとインタラクティブにやりたいという野望があった
    - >-
      Slidev自体のVS Code
      Extension(https://marketplace.visualstudio.com/items?itemName=antfu.slidev)と組み合わせることで、リアルタイムにAIが生成した原稿を確認できると分かったため、VS
      Code Extensionとして作ろうと思った
    - unocssに関する記述は含めないでください
---

# VS Code Extension: AIが生成するSlidev原稿 📄✨

- **AIを使ってSlidevの原稿を生成するVS Code Extension** を公開！
- [スライドアイ](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)で検索 📢
  > ChatGPT等とは異なり、もっとインタラクティブにAIと原稿を作りたい！という想いから誕生しました。
- リアルタイム生成 🎉
  > SlidevのVS Code Extensionと組み合わせることで、AIが作った原稿を即座にプレビュー可能です。

 ## デモ 🌟
 > [デモ動画やGIFを入れる] AIによる原稿作成のデモンストレーションを見せる

 ## 実際に使ってみましょう！ 🤖✍️
 >> このスライドは、その場でAIに書き起こさせることで説明できます！


---
layout: two-cols
---

# Slid<span class="c-pink">ai</span>v
_<logos-github-octocat/>[kaakaa/slidaiv](https://github.com/kaakaa/slidaiv) | <logos-visual-studio-code/> [Slidaiv](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)

* VS Code上でSlidevの原稿を生成できるVS Code拡張
* プロンプトはFrontmatterで指定<br/><span class="text-sm">([@slidev/parser](https://www.npmjs.com/package/@slidev/parser)で原稿を解析してモデル化して取得)</span>
* SlidevのVS Code拡張を併用すれば、生成した原稿の表示内容をすぐに確認できる
* YAMLに複数ページ分のPromptを書いて一気に原稿を出力するCLIツール [slidaiv - npm](https://www.npmjs.com/package/slidaiv)

<div class="mt-5 text-sm c-gray">

* 調査資料を元に生成できるようにしたい。RAGりたい。
* 原稿の改善もAIでやれるようにしたい
* 画像生成AIの組み込みやUnoCSSを使ったデザイン等もしたい
* あんま良い感じの原稿が生成されないのでなんとかしたい...

</div>

::right::

<div class="ml-5 mt-15">

![](https://github.com/kaakaa/slidaiv/blob/master/resources/slidaiv-demo.gif?raw=true)
</div>


---

# Slid<span class="c-pink">ai</span>v
_<logos-github-octocat/>[kaakaa/slidaiv](https://github.com/kaakaa/slidaiv) | <logos-visual-studio-code/> [Slidaiv](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)

2ページ前のスライドは以下のプロンプト (+ System Prompt) qを元に **Ollama x Command-R Plus** で生成

```yaml
---
slidaiv:
  prompt:
    - AIを使ってSlidevの原稿を生成するVS Code Extensionを公開したことを紹介したい
    - >-
      公開したVS Code Extension
      https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv
    - 元々、ChatAIでスライドの原稿を生成する方法は提案されていたが、もっとインタラクティブにやりたいという野望があった
    - >-
      Slidev自体のVS Code
      Extension(https://marketplace.visualstudio.com/items?itemName=antfu.slidev)と組み合わせることで、リアルタイムにAIが生成した原稿を確認できると分かったため、VS
      Code Extensionとして作ろうと思った
    - unocssに関する記述は含めないでください
---
```

---
slidaiv:
  prompt:
    - AIを使ってSlidevの原稿を生成するVS Code Extensionを公開したことを紹介したい
    - >-
      公開したVS Code Extension
      https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv
    - 元々、ChatAIでスライドの原稿を生成する方法は提案されていたが、もっとインタラクティブにやりたいという野望があった
    - >-
      Slidev自体のVS Code
      Extension(https://marketplace.visualstudio.com/items?itemName=antfu.slidev)と組み合わせることで、リアルタイムにAIが生成した原稿を確認できると分かったため、VS
      Code Extensionとして作ろうと思った
    - unocssに関する記述は含めないでください
---

(Command-R Plus (104B) on Ollama)
# VS Code Extension: AIが生成するSlidev原稿 📄✨

- **AIを使ってSlidevの原稿を生成するVS Code Extension** を公開！
- [スライドアイ](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)で検索 📢
  > ChatGPT等とは異なり、もっとインタラクティブにAIと原稿を作りたい！という想いから誕生しました。
- リアルタイム生成 🎉
  > SlidevのVS Code Extensionと組み合わせることで、AIが作った原稿を即座にプレビュー可能です。

 ## デモ 🌟
 > [デモ動画やGIFを入れる] AIによる原稿作成のデモンストレーションを見せる

 ## 実際に使ってみましょう！ 🤖✍️
 >> このスライドは、その場でAIに書き起こさせることで説明できます！


---
slidaiv:
  prompt:
    - AIを使ってSlidevの原稿を生成するVS Code Extensionを公開したことを紹介したい
    - >-
      公開したVS Code Extension
      https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv
    - 元々、ChatAIでスライドの原稿を生成する方法は提案されていたが、もっとインタラクティブにやりたいという野望があった
    - >-
      Slidev自体のVS Code
      Extension(https://marketplace.visualstudio.com/items?itemName=antfu.slidev)と組み合わせることで、リアルタイムにAIが生成した原稿を確認できると分かったため、VS
      Code Extensionとして作ろうと思った
    - unocssに関する記述は含めないでください
---

(llama3.1:70b on Ollama)

# Slidev形式のVS Code Extensionの公開について 
## AIによるスライド原稿生成ツールの紹介 
- [Slidaiv](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)
- <font color="gray">ChatAIを利用したスライド原稿生成のアイデアをインタラクティブに進化</font>

## 背景
- SlidevのVS Code Extensionとは?[https://marketplace.visualstudio.com/items?itemName=antfu.slidev](https://marketplace.visualstudio.com/items?itemName=antfu.slidev)
- リアルタイムな原稿生成確認が可能になり、生産性向上を目指す

<font color="gray">このツールにより効率的なスライド制作が実現します。</font>

---
slidaiv:
  prompt:
    - AIを使ってSlidevの原稿を生成するVS Code Extensionを公開したことを紹介したい
    - >-
      公開したVS Code Extension
      https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv
    - 元々、ChatAIでスライドの原稿を生成する方法は提案されていたが、もっとインタラクティブにやりたいという野望があった
    - >-
      Slidev自体のVS Code
      Extension(https://marketplace.visualstudio.com/items?itemName=antfu.slidev)と組み合わせることで、リアルタイムにAIが生成した原稿を確認できると分かったため、VS
      Code Extensionとして作ろうと思った
    - unocssに関する記述は含めないでください
---

(OpenAI gpt-4o)

# 新しいVS Code Extensionの紹介

- **Slidevの原稿生成**にAIを活用
- 公開されたVS Code Extension: [Slidaiv](https://marketplace.visualstudio.com/items?itemName=kaakaa.slidaiv)
- **背景**
  - ChatAIでのスライド原稿生成は既に提案されていた
  - もっと**インタラクティブ**な方法を追求
- **目的**
  - SlidevのVS Code Extension([リンク](https://marketplace.visualstudio.com/items?itemName=antfu.slidev))と組み合わせ
  - **リアルタイム**にAI生成原稿を確認

<!-- ここに適切なアイコンを挿入 -->

---

# <logos-visual-studio-code/> Develop / Publish VS Code Extension

* 公式ドキュメントとサンプル集で大体のことはできる (未だに[Yeoman](https://yeoman.io/)を使ってるのが謎)
  * [Your First Extension \| Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
  * [microsoft/vscode\-extension\-samples: Sample code illustrating the VS Code extension API\.](https://github.com/microsoft/vscode-extension-samples)
* Marketplaceへのリリースも公式ドキュメント通りにやれば良い ([Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension))
  * Azure DevOpsのPATを元にVisual Studio MarketplaceのPublisherを作成する必要がある
  * 公式CLIツール [`vsce`](https://github.com/microsoft/vscode-vsce)を使うことでGitHub Actionsなどからリリースを実行することもできる
  * 管理画面からExtensionの閲覧数やインストール数が見れる
    <img src="/slidaiv_vsce-manage.png" class="h-40"/>

---
layout: two-cols
---

# TODO

### <span class="underline">Model/Promptの改善</span>

GitHub Models (AIアプリ開発用途で商用AIサービスをお試しできるサービス。実行回数制限あり。) 使って、適切なModel/Prompt等を調査していきたい。

### <span class="underline">RAG等の導入</span>

調査資料をどこかのディレクトリに放り込んでおくと、それを読み込んで良い感じの生成ができるようになるとか。  
VS Code Extensionからも呼べるローカルで動くRAGとは...。どこかのサービスを呼び出す感じにしなきゃだめかなぁ...。

::right::

<div class="ml-5">

![alt text](/slidaiv_github-models.png)

![alt text](/slidaiv_compare.png)

</div>
