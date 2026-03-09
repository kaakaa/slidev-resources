`# AI Coding における Intent / Trajectory 管理

## 発表概要
AIコーディングエージェントが普及する中、「何を変えたか（What）」だけでなく「なぜ変えたか（Why）」「どんな意図で動かしたか（Intent）」を管理・追跡するツールやサービスが登場してきている。3つの事例を通じてこのトレンドを紹介する。

---

## アウトライン

### 1. オープニング：AIコーディングの"次の問題"

- AIエージェントがコードを書く時代になった
- 「タイピング速度」はもはやボトルネックではない
- 新しいボトルネック：**誰が（どのエージェントが）何をやっているかの追跡**
- コンテキストの消失問題
  - プロンプトは使い捨て、判断の理由は残らない
  - エージェントを再起動するたびに文脈を再供給するコスト
  - [Towards a science of scaling agent systems: When and why agent systems work](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/)
    -  MAS(Multi-Agent System)を採用すべきタスクに関する研究。逐次的なタスクでは、MASでパフォーマンスが低下する場合も。
    - > We found that independent multi-agent systems (agents working in parallel without talking) amplified errors by 17.2x. Without a mechanism to check each other's work, errors cascaded unchecked. 
- キーワードの整理
  - **Intent**：エージェントに与えるタスクの意図・仕様
  - **Trajectory**：エージェントが辿った思考・操作の軌跡（会話・ツール呼び出し履歴）

---

### 1. オープニング：AIコーディングの"次の問題"

- GitHubというプラットフォームの危機
  - https://x.com/mitchellh/status/2014433315261124760
    - Ghosttyで、AIによって生成されたPRのレビューにメンテナの時間が割かれることを問題とし、AIによるPRを基本的に自動Closeするポリシーを策定
    - [Mitchell Hashimoto’s new way of writing code](https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto)
      - > 6. Open source is moving from “default trust” to “default deny” — and Mitchell thinks that’s how it should be.
- AIと共に開発する場合、Git履歴だけではコンテキストが足りない
- [Entire](https://entire.io/)
  - > Entire CLI hooks into your git workflow to capture AI agent sessions on every push.
  - [元GitHub CEOのドムケ氏、AI時代の開発プラットフォーム「Entire CLI」をオープンソースで公開。すべてのコンテキストをGitに保存 － Publickey](https://www.publickey1.jp/blog/26/github_ceoaientire_cligit.html)
    - Thomas Dohmke: 2021/11/03-2025/08/11 GitHub's CEO
- [Cognition \| Agent Trace: Capturing the Context Graph of Code](https://cognition.ai/blog/agent-trace)
  - > Agent Trace is an open, vendor-neutral spec for recording AI contributions alongside human authorship in version-controlled codebases.
  - [そのコードのその行をどのようにAIが生成し、なぜ変更されたのか。コードのコンテキスト履歴を記録する標準「Agent Trace」。Cursor、Cognition、Google Julesらが提唱 － Publickey](https://www.publickey1.jp/blog/26/aiagent_tracecursorcognitiongoogle_jules.html)

---

### 2. Entire「Checkpoints」── Trajectoryをgitと一緒に記録する

- **会社**: Entire（元GitHub CEO Thomas Dohmke設立、$60Mシード調達）
- **プロダクト**: Entire (entire.io, Entire CLI)
- **解決する問題**
  - Gitはファイルの差分は記録するが、AIがその変更をした**理由・経緯**は記録しない
  - AIが生成したコードはブラックボックスになりがち
- **アプローチ**
  - AIエージェントのセッション（プロンプト・レスポンス・操作ファイル・判断）をgitコミットに紐付けて保存・インデックス化
  - "What changed" → "Why it changed" へ
- **ビジョン**
  - コードとコンテキストの統合データベース
  - 複数エージェントが知見を共有できるセマンティック推論レイヤー
  - AIネイティブなインターフェース

### Setup

* entire.io アカウント作成 (GitHub OAuth)
* Install Entire CLI
  * Supported OS: macOS or Linux (Windows via WSL)
  * Supported Agents (2026/02/28): Claude Code, Gemini CLI, **OpenCode**, or Cursor

```shell
$ entire enable --agent opencode. # default: claude-code
# 各Coding Agent向け拡張機能の作成
# => `.opencode/plugins/entire.ts`
# git操作記録用のgit-hooksを作成
# => `entire/checkpoints/v1`ブランチにコミットされる

$ opencode
> Tauriを使ったローカルで動作するシンプルかつ軽量なMarkdown Editorを作成したいです。テキスト入力をし、PreviewとしてMarkdownレンダリングができればいいです。あと、フォルダを指定して、その配下のMarkdownファイルを表示できる FileTree表示をして、ファイルの新規作成や編集、削除、リネームぐらいはできると嬉しいです。

# Todos
[ ] Tauriプロジェクトのスキャフォールド作成 (React + TypeScript)
[ ] Tauriバックエンド: ファイルシステム操作コマンド実装 (フォルダ選択, ファイルツリー取得, 読み書き, リネーム)
[ ] フロントエンド: レイアウト設計 (サイドバー + エディタ + プレビュー)
...
```

```shell
$ entire status
● Enabled · manual-commit · branch main

── Active Sessions ─────────────────────────────────────────────────────────────

OpenCode · ses_356
> "Tauriを使ったローカルで動作するシンプルかつ軽量なMarkdown Editorを実装してください。機能として..."
started 13m ago · active 4m ago · tokens 2194.9k

────────────────────────────────────────────────────────────────────────────────
1 session
```

```
> これまでの変更をコミットしてPushしてください

...
コミット完了しました。

59ファイル、9584行の追加で初回コミット 41d625c を作成しました。

合わせて　.gitignore に .entire/、.opencode/、.claude/
を追加してツール設定ディレクトリがコミット対象から除外されるようにしています。
```

---

## GitHubの画面
* `entire/checkpoints/v1`ブランチが作成されSession情報が格納される

## Entireの画面
* `entire/checkpoints/v1`ブランチにSession/Checkpointのデータが格納される
* entire.ioにmainブランチのコミットに関連するSessionデータが表示される
  * Session情報
    * Userメッセージ
    * Assistantsメッセージ(Tool calls履歴含む)
  * File changes

---

> $ entire rewind
* 過去のCheckpointの状態に戻す
* ローカルコミットのみ元に戻すため、remoteにPush済みの場合はForce Pushしないといけなそう
  * entire service側はあくまでmainブランチのコミットに関連するSession/Checkpoint情報を表示する
* `entire/checkpoints/v1`ブランチの内容は消されない
  * 存在しないコミットの情報も残ってしまう

---

* `entire/checkpoints/v1`にAgentのTool実行履歴等も記録されてしまうため、ローカルマシンの情報が公開されてしまう恐れがあ
  * READMEにも記載がある。検出されたSecretsは`entire/checkpoints/v1`に記録される際に編集されるが、あくまでベストエフォート
* 手動でコミットすると `entire/checkpoints/v1`ブランチが更新されない?
---

## Agent実行記録のデータ構造比較

* entire
* Agent Trace
* GitHub Copilot Logs
---


### 3. Augment「Intent」── Intentを中心にエージェントを orchestrate する

- **会社**: Augment Code
- **プロダクト**: Intent（macOS向けパブリックベータ）
- **解決する問題**
  - 複数エージェントを並行稼働させると、ターミナル・ブランチ・プロンプトが乱立する
  - エージェントごとにコンテキストがバラバラ → 衝突・陳腐化
- **アプローチ**
  - IDEの「次」のワークスペース
  - **Living Spec**：仕様書がエージェントの進捗に合わせて常に更新される
  - **Isolated Workspaces**：git worktreeベースの独立した作業空間
  - **3エージェント構成**：Coordinator（計画）→ Implementor（実装）→ Verifier（検証）
  - BYOA（Claude Code・Codex・OpenCodeも利用可能）
- **思想**
  - 開発者は「何を作るか」に集中、「どう作るか」はエージェントに委譲
  - IDEが中心だった時代の終わり

---

### 4. Cognition「Agent Trace」── 標準仕様でTrajectoryを業界共通化する

- **会社**: Cognition（Devin開発元）
- **取り組み**: Agent Trace仕様への支持表明・活用事例紹介
- **Agent Traceとは**
  - AIの貢献をバージョン管理されたコードベースに記録するオープン・ベンダーニュートラルな仕様
  - Cursor、Cloudflare、Vercel、Google Jules、Amp等も参加
- **解決する問題**
  - git は2005年、「帯域制限」の時代の産物 → コミットは最小限（行差分のみ）
  - 2026年は「コンテキスト制限」の時代 → 記録すべきはコンテキスト
- **アプローチ**
  - コード変更を、それを生み出した**会話・Trajectory**のURLに紐付ける
  - PII等のセンシティブ情報をトレースストアに含めない設計
- **ユースケース**
  - Eng Management：AI vs Human のコード帰属可視化、PR単位の開発内訳、レビューUX改善
  - エージェントのパフォーマンス向上：過去の推論コンテキストを再供給 → SWE-Bench +3pt相当
- **結論**
  - Lines of Code → コモディティ化
  - **Context（コンテキスト）が新しい希少資源**

---

### 5. まとめ：共通するテーマ

| | Entire Checkpoints | Augment Intent | Agent Trace |
|---|---|---|---|
| **対象** | Trajectory記録 | Intent管理・オーケストレーション | Trajectory帰属の標準化 |
| **レイヤー** | git統合（事後記録） | ワークスペース（リアルタイム） | 仕様（業界標準） |
| **スコープ** | 単一エージェントの追跡 | マルチエージェント調整 | 業界全体の共通基盤 |

- **なぜ今か？**
  - AIエージェントが人間よりも多くのコードを書く時代が来ている
  - 管理・可視性・説明責任がエンジニアリング組織の次のボトルネック
- **開発者の役割変化**
  - コードを書く職人 → **Intent（意図）とContext（文脈）を設計する人**
- **今後の注目ポイント**
  - Agent Traceのような標準仕様が普及するか
  - 既存のGit/PR/CIワークフローとどう統合されるか
  - エンジニアリングマネジメントの可視性ツールの進化

---

## 参考リンク
- [Entire: Hello Entire World](https://entire.io/blog/hello-entire-world/)
- [Augment Code: Intent — A Workspace for Agent Orchestration](https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration)
- [Cognition: Agent Trace](https://cognition.ai/blog/agent-trace)
