# Agent Harnessのパッケージングと配布 - スライド設計書

**発表日**: 2026年9月15日
**持ち時間**: 20分 / **想定スライド数**: 本編15枚（＋目次1・セクションカバー3＝実枚数19枚）
**着地点**: Harnessの管理・流通を実現する手段として **microsoft/apm を調べてみた**。
あわせて、今後の展望として **Agent Plugins 等の統一仕様の動き**に軽く触れる。

> APMが主役、Agent Pluginsは展望。この配分を崩さないこと。

---

## 全体構成（本編15枚 / 実枚数19枚）

「実」＝Slidev上の実際のページ番号。カバーと目次は**本編15枚にはカウントしない**。

| 実 | 本編# | スライド | Part | 状態 |
|---|---|---------|------|------|
| 1 | 1 | タイトル | 導入 | ✅ 日付・発表者は載せない |
| 2 | — | **はじめに（目次）** | — | ✅ 3部構成を提示 |
| 3 | — | **▶ カバー: 1. Harness Engineering** | — | ✅ |
| 4 | 2 | AIエージェント開発の進化（4層） | 導入 | ✅ |
| 5 | 3 | Harness Engineeringとは | 導入 | ✅ |
| 6 | 4 | 2種類のHarness（Agent / User） | 導入 | ✅ |
| 7 | 5 | User Harnessの共有が難しい | 導入 | ✅ |
| 8 | 6 | User Harnessの共有方法（3択） | 導入 | ✅ semver表記を修正 |
| 9 | — | **▶ カバー: 2. microsoft/apm** | — | ✅ |
| 10 | 7 | APMとは | **APM** | ✅ lsp/21種/版数を反映 |
| 11 | 8 | 使う: apm install | **APM** | ✅ 実機検証済 |
| 12 | 9 | 何がどこに置かれるか（配置 + Targets） | **APM** | ✅ 統合済 |
| 13 | 10 | 再現性: apm.lock.yaml と audit | **APM** | ✅ 新規作成 |
| 14 | 11 | 作る: `.apm/` と apm pack | **APM** | ✅ 全面改稿 |
| 15 | 12 | 配る: 2つの経路 | **APM** | ✅ 新規作成 |
| 16 | 13 | 調べてみた所感 | **APM** | ✅ 新規作成 |
| 17 | — | **▶ カバー: 3. まとめと展望** | — | ✅ |
| 18 | 14 | 展望: 2026年夏、一気に動いた | 展望 | ✅ 4枚→1枚に圧縮 |
| 19 | 15 | まとめ / 参考リンク / Q&A | 締め | ✅ 2枚→1枚に統合 |

**3部構成**（目次スライドと3枚のカバーで一貫させている）
1. **Harness Engineering** — なぜUser Harnessを「配る」必要があるのか
2. **microsoft/apm** — Agent Package Manager を調べてみた ← 本日のメイン
3. **まとめと展望** — Agent Plugins 1.0.0 とその周辺の動き

> セクション1の名前は「はじめに」と衝突するため **Harness Engineering** にした。
> カバーは `layout: cover` ＋ Unsplash背景。1枚あたり5秒程度で流す想定なので尺には影響しない。

> 2026-09-06 時点で実19枚を作成・描画確認済み（`slidev build` 成功、Overviewで19 slidesを確認）。

**配分**: 導入6枚 / **APM本編7枚（47%）** / 展望1枚 / 締め1枚

### 20枚案からの削減（-5枚）

| 操作 | 対象 |
|------|------|
| 統合 | 配置結果 ＋ Targets matrix → 本編9 |
| 統合 | 配る ＋ GitLabプライベート配布 → 本編12 |
| 統合 | Agent Pluginsとは ＋ 特徴 ＋ 比較表 ＋ 相補図 → 本編14 |
| 統合 | まとめ ＋ Next Steps/Q&A → 本編15 |
| 差し替え | セクションカバーを本編カウント外の3枚に再編（旧「Agent Plugins」→「まとめと展望」） |

> さらに削るなら本編2（4層モデル）が候補。

---

## 導入（スライド1-6）

現状のまま使える。引用・図版・出典が揃っており完成度が高い。

- **2. 4層モデル**: Prompt → Context → Harness → Loop。本日のフォーカスを明示
- **3. Harness Engineeringとは**: `Agent = Model + Harness`（LangChain引用）
- **4. 2種類のHarness**: Agent Harness（標準提供） vs User Harness（自分で作る）。martinfowler.com の同心円図
- **5. User Harnessの共有**: 個人環境で偶発的に生まれ、共有のハードルが高い。
  さらに各Coding Agentが独自形式 → **Agentごとのパッケージングが必要**という課題提起
- **6. 共有方法の3択**（リポジトリ直接共有 / APM / Agent Plugins）→ APM本編への橋渡し

**6の要修正点**
- `agentplugins.org` → **`agent-plugins.org`** ✅適用済
- APM列の「✅ semver管理」は**不正確**。Git参照（`#v1.0.0`）はタグ固定であってsemverレンジ解決ではない。
  semverレンジ（`^2.0.0` / `~2.1.0`）が使えるのは marketplace / registry 経由の依存のみ。
  → 「✅ ロックファイルで固定」に改める

---

## APM本編（スライド7-13）★ここが主役

### 7. APMとは
- Microsoft製、MIT License。CLI実体は Python（調査時点 v0.28.0 / 調査中に 0.29.0 が出た）
- マニフェスト `apm.yml`、ロックファイル `apm.lock.yaml`
- 依存は **apm / mcp / lsp** の3系統（※現状スライドはlspが抜けている）
- 4つの柱: Portable / Secure by Default / Governed / Multi-Platform

### 8. 使う: apm install
**ここで「変換」の概念を先に導入しておく**（本編9で「変換」「落ちる」を唐突に使わないため）。
サブタイトルに「1つのpackageが**ターゲットごとのネイティブ形式に変換されて配置される**
（ログの `integrated ->` の行）」と明記した。
**実機で出力が一致することを確認済み**。
- `apm install microsoft/apm-sample-package --target claude,copilot`
- 依存が推移的に解決される（sample-package → github/awesome-copilot/skills/review-and-refactor）
- 未固定の依存には `[!] N dependencies unpinned -- add #tag or #sha to prevent drift` の警告
- 参照形式: `{owner}/{repo}(/{path})#{ref}`

### 9. 何がどこに置かれるか（配置 + Targets を統合）
1つのパッケージが**ターゲットごとのネイティブ形式に変換**されて配置されるのが肝。
```
.agents/skills/          # ハーネス非依存のSkills置き場
.claude/{agents,commands,rules,skills}/
.github/{agents,instructions,prompts}/
apm.lock.yaml
apm_modules/             # .gitignore に自動追加される
```
- 同じ1つの primitive が `.claude/skills/` と `.agents/skills/` の両方に展開される
- 対応ターゲットは **21種**（現状スライドの8種は古い）✅一部適用済
  既定: `agent-skills, antigravity, claude, codex, copilot, cursor, gemini, grok-build, kiro, opencode, windsurf`
  experimental: `copilot-app, copilot-cowork, grok-cloud, hermes, openclaw` ／ 他 `vscode, intellij, agents, agy, all`
- **変換が起きるタイミングは `apm install` 実行時**（＝配置するとき）。ここを明示しないと
  「パッケージ側の制約」と誤読される
  - パッケージは primitive を**原本のまま**持っている
  - `apm install` が `targets` を見て、各ターゲットのネイティブ形式に変換して配置する
  - その際、ターゲットが対応しないfrontmatterキーは**警告付きで落とされる**（例: claude commands の `mode`）
  - 落ちるのは**配置されたコピー**。同じパッケージでも `targets` の指定次第で結果が変わる
  → 「Portable」は完全互換ではなく**最大公約数への変換**である、という正直な指摘を入れる

### 10. 再現性: apm.lock.yaml と audit ★新規
「Secure by Default」を口で言わずに**実物で見せる**スライド。
```yaml
lockfile_version: '1'
apm_version: 0.28.0
dependencies:
- repo_url: microsoft/apm-sample-package
  resolved_commit: fb2851683be0e0e7711421d518bd8dba23b0b1f6
  deployed_files: [...]
  deployed_file_hashes:
    .claude/skills/style-checker/SKILL.md: sha256:11427002...
```
- **配置後のファイル1つ1つのsha256を記録**している点が特徴
- `apm install --frozen` … CI用。lockとapm.ymlの不整合を拒否
- `apm audit` … 配置済みprimitiveの改ざん(drift)・隠しUnicodeを検査
- なぜ重要か: Harnessは**プロンプト＝実行される指示**なので、サプライチェーン汚染の影響が直接的

### 11. 作る: `.apm/` と apm pack ★全面改稿
> `apm compile` の注意書きだけを単独で置くと唐突なので、**コマンドの役割分担の表**を先に置き、
> その中で compile の位置づけを示す形にした。

| コマンド | 役割 |
|---------|------|
| `apm init` | `apm.yml` **だけ**作る（依存を入れる側のプロジェクト用） |
| `apm plugin init` | `apm.yml` ＋ **`plugin.json`**（配る側のパッケージ用） |
| `apm pack` | `.apm/` を配布用バンドルに固める |
| `apm publish` | レジストリにアップロードする（experimental） |
| `apm compile` | **配布用ではない**。下記参照 |

**レイアウト**: 左＝ディレクトリ構造 ＋ `apm.yml`/`plugin.json` の読み手の違い。
右＝コマンド表 ＋ `apm compile` の説明 ＋ レジストリとは。
構造の説明を先に読ませるため、当初の左右を入れ替えた。

**`apm compile` は何をするのか**（実機で `--dry-run -v` を叩いて確認）
- 「AGENTS.md に畳み込む」という説明は**不正確だった**。実際は
  `.apm/instructions/` を **各Agentが読むコンテキストファイルに展開する**
- 検出したターゲットに応じて **AGENTS.md / CLAUDE.md / GEMINI.md /
  `.github/copilot-instructions.md`** をそれぞれ生成する（1本にまとめるのではない）
- instruction には `applyTo: "src/api/**"` のように**適用範囲**を書ける。compileは1つの大きな
  ファイルにまとめず、**その範囲に近いディレクトリに分けて置く**（説明はこの言い方で通す）
  - 実測: `applyTo: "src/api/**"` → `src/AGENTS.md` ／ `applyTo: "**/*.py"` → `./AGENTS.md`
  - GEMINI.md は `@./AGENTS.md` を import する形で生成される
  - 生成物には "Do not edit manually / To regenerate: `apm compile`" が入る
- ターゲットフォルダが無いと `Targets: minimal` になり AGENTS.md のみ生成される
- → **他人に配るためのものではなく、自分のリポジトリで primitive を効かせるためのコマンド**

**`apm init` と `apm plugin init` の違い**（実機で確認）
- `apm init proj -y` → `apm.yml` のみ。`targets:` はコメントアウトされた状態で生成される
- `apm plugin init proj -y` → `apm.yml` ＋ `plugin.json`。`targets:` も設定される
- 違いは実質 **`plugin.json` を作るかどうかだけ**。配布するパッケージなら `plugin init`
- なお `apm init --plugin` は deprecated（`apm plugin init` を使えと表示される）

**`plugin.json` の位置づけ — 原本ではなく「出力」**
> 「apm.yml だけで marketplace.json が作れるなら plugin.json の存在価値は？」という
> 疑問が出た。原因は、plugin.json をソースだと説明していたこと。実際は生成物。

- **著者が書くのは `apm.yml` ＋ `.apm/` だけ**
  - 裏付け: `microsoft/apm-sample-package` のリポジトリは `.apm/` と `apm.yml` のみ。
    `plugin.json` も `.claude-plugin/` も持っていない（GitHub APIで確認）
- `plugin.json` は `apm pack` が **apm.yml から自動生成する出力**
  - 公式ドキュメント: "When `apm.yml` declares `target: claude` or `target: copilot`,
    `apm pack` also generates an ecosystem-specific `plugin.json` automatically --
    **authors no longer need to maintain this file manually**. The manifest is synthesised
    from `apm.yml` identity fields (name, version, description, author, license)."

**⚠️ ルールは1つ: `plugin.json` は一度生成されると更新されない**（実機で確認したハマりどころ）

- 検証: `apm plugin init demo -y --target claude,copilot` → `apm pack`（0.1.0が生成される）
  → `apm.yml` の version を **0.3.0** に変更 → `apm pack`
  - 結果: `.claude-plugin/plugin.json` も バンドルも **0.1.0 のまま**。以下の警告が出る
    ```
    [!] .claude-plugin/plugin.json already exists; skipping plugin.json generation.
        Re-run with --force to overwrite it.
    ```
  - `apm pack --force` で初めて **0.3.0** に更新される
- **公式ドキュメントに記載あり**（`reference/cli/pack` の "Overwrite and dry-run"）:
  "If a `plugin.json` already exists at the target path it is **preserved**: `apm pack` warns
  and skips the write. Re-run with `--force` to overwrite it."
- つまり `apm.yml` の version を上げただけでは **plugin.json は古いまま配布される**。
  リリース手順に `apm pack --force` を入れておくのが安全
- `apm plugin init` はさらに `license: MIT` を `plugin.json` にだけ入れる（`apm.yml` には入らない）ので、
  最初からズレている
- `microsoft/apm-sample-package` はルートに `plugin.json` を置いていない（`.apm/` ＋ `apm.yml` のみ）

**ドキュメントの記載状況**（「仕様がごちゃごちゃしている」という指摘への回答）

| 事項 | 記載 |
|------|------|
| `apm pack` が targets に応じて `plugin.json` を生成すること・出力パス | ✅ `reference/cli/pack` |
| 既存 `plugin.json` は保持され `--force` が要ること | ✅ `reference/cli/pack` |
| `apm plugin init` が `plugin.json` ＋ `apm.yml` を作ること | ✅ `reference/cli/plugin` |
| **ルートの `plugin.json` と pack の関係** | ❌ **どちらのページにも無い** |

- 個々の挙動は文書化されているが、**両者を繋ぐ記述が無い**。
  加えて `plugin.json` が3箇所（ルート / `.claude-plugin/` / `.github/plugin/`）に存在しうるため、
  「どれが効くのか」が読んだだけでは分からない。ごちゃごちゃして見えるのは妥当な感想
- スライドでは深追いせず、**「一度生成されると更新されない（`--force` が要る）」の1行**に凝縮した
- 役割は **APMを入れていない Claude Code / Copilot CLI が読める身分証**。
  APM経由でしか配らないなら無くてよい
- 逆方向も成立: 既存の `.claude-plugin/plugin.json` を持つプラグインをAPMが検出し、
  `apm.yml` を合成して通常のAPMパッケージとして扱える（バージョン固定・推移解決付き）
- なお `plugin.json` には2種類ある
  - `apm pack`（既定）… Claude互換の marketplace plugin 形式
  - `apm pack --format agent-plugin` … Agent Plugins v1 の `$schema` を持つポータブル形式

**3つのファイルの階層を混ぜないこと**

| ファイル | 位置づけ | 作り方 |
|---------|---------|--------|
| `apm.yml` ＋ `.apm/` | **原本**。著者が書くのはこれだけ | 手で書く |
| `plugin.json` | **パッケージ1個の身分証** | `apm pack` が apm.yml から生成 |
| `marketplace.json` | **パッケージ群のカタログ** | `apm pack` が `marketplace:` から生成 |

**レジストリとは**（`apm publish` の説明で必ず聞かれるので、このページの右側に置く）
- **npmjs.com のような共用の公開サービスは無い**。ドキュメントの例も全て
  `registry.example.com` / `artifactory.corp.example.com` のプレースホルダで、
  Microsoftが運営するインスタンスは示されていない
  - ※ 「public registry からインストールする」という節はあるが、これは
    **認証不要のレジストリを自分で立てられる**という意味であって、共用インスタンスの話ではない
- **Artifactory / JFrog は実際に使える**（スライドに例として残す根拠）
  - 公式ドキュメント: "point at a private / self-hosted registry (**Artifactory, JFrog**,
    or any service that implements the Registry HTTP API)"
  - APM側に専用実装がある: `artifactory_entry.py` / `artifactory_resolver.py` /
    `artifactory_orchestrator.py`
  - 設定例も Artifactory 前提:
    `url: https://artifactory.corp.example.com/artifactory/api/apm/corp-main-local`
  - 認証は "Bearer (preferred for JFrog / Artifactory)"
- 実体は **Registry HTTP API という仕様**。組織が自前で立てる
- `apm publish` → `PUT /v1/packages/{owner}/{repo}/versions/{version}` にzipをアップロード。
  同一versionの再publishは **409 Conflict**（immutable）
- 宣言: `registries: { corp-main: { url: https://registry.example.com/apm/corp-main } }`
- 認証: `apm config set registry.<name>.{url,token}` ／ `apm experimental enable registries` が必要

> 「`.apm/prompts/review.prompt.md` が `commands/review.md` になる」という注記は削除した。
> 本編8で変換の話を済ませており、このページで再度触れる必要が無いため。

```
.apm/                          # primitives（配布する中身）
  skills/my-skill/SKILL.md
  prompts/review.prompt.md
  instructions/style.instructions.md
  agents/cli-logging-expert.agent.md
apm.yml                        # APMパッケージのメタ情報
plugin.json                    # apm plugin init が生成
```

`apm pack` の結果（実機確認済）:
- `build/<name>-<version>/` に plugin.json + `skills/` `commands/` `instructions/`
- `.claude-plugin/plugin.json` と `.github/plugin/plugin.json` を生成
- **`.apm/prompts/review.prompt.md` が `commands/review.md` に変換される**（ここでも形式変換）
- `--target` は **deprecated**（バンドルはtarget非依存になった）

### 12. 配る: 2つの経路（プライベート配布を統合）★新規・最重要
現状スライドに完全に欠けている軸。APMの配布は1つではない。

| 経路 | 作る側 | 使う側 |
|------|--------|--------|
| **Git直接参照** | pushするだけ | `apm install owner/repo#v1.0` |
| **Marketplace** | `marketplace:` ＋ `apm pack` | `apm marketplace add` / Claude Codeの `/plugin` |

> **Registry (REST) の行は削除した。** experimental のものをこのページで説明する価値が薄いため。
> `apm publish` とレジストリの話は本編11「作る」のコマンド表と補足に残してある
> （そちらには experimental である旨も明記済み）。
> かつて「状態」列を置いていたが、何を示すのか伝わらないので削除した。

**Git直接参照について、言い方の修正（2回直している）**
- 1st: 「push連動の自動公開は無い」→ pushすれば実際に配れるので誤解を招く
- 2nd: 「タグを打てばそれで配れる」→ **タグは必須ではない**ので、これも不正確だった
- 現在: **「pushすれば配れる。`#ref` は tag / branch / commit SHA のどれでも指定できる」**
  - 根拠（Reference formats）: `owner/repo` は default branch の最新、
    `owner/repo#v1.0.0` の ref は **"Tag, branch, or commit SHA"**
  - 「タグ必須ではない」という否定形はスライドに書かない（誰も必須だとは言っていないため）。
    選べる、という事実だけを書く
  - ただし推奨は変わらず「タグかSHAで固定する」。未固定だと install 時に
    `unpinned -- add #tag or #sha to prevent drift` の警告が出る

**「サブパス指定」とは何か**（説明が曖昧だったので定義を固定する）
- = **リポジトリ全体ではなく、中の一部だけを指す書き方**。2通りある
  - 文字列形式: `owner/repo/skills/review`（monorepoのサブフォルダ）
  - object形式: `git: ...` ＋ **`path: skills/review`**
- スライドでは object形式の `path:` を例にしているので、**「`path:` で一部だけを指す」**と言い切る
  （YAML例に「# リポジトリ丸ごと」「# 一部だけ」のコメントを入れて対比させた）

**なぜ private で失敗するのか**（ドキュメントで確認）
- 一部だけを指す指定は **git clone ではなくHTTPのファイル取得API**で取りに行く
- この経路では非デフォルトホストに APM管理のPATが渡らないため **401/403**
- **リポジトリ丸ごと**の参照なら git clone になり、通常のgit認証がそのまま効く
- 原文: "Generic non-default hosts do not receive APM-managed GitHub or GitLab PATs on the
  HTTP file-read path. If a private host fails with 401/403, use a whole-repo git dependency"
- なお GitLab の `path:` は git transport で取得されるため、APIを無効にした自己ホストでも入る。
  自己ホストGitLabは **`type: gitlab`** を付けて明示する（YAML例に含めた）
- スライドでは深追いせず「駄目なら丸ごとに切り替える」という対処だけ書く

**Marketplace = Claude Codeと同じカタログになる**（実機で生成を確認）
- **生成に必要なのは `apm.yml` の `marketplace:` ブロックだけ。`plugin.json` は不要**
  - 検証: `apm.yml` 1ファイルだけのリポジトリで `apm pack` を実行し、
    `.claude-plugin/marketplace.json` が生成されることを確認した（`.apm/` も plugin.json も無い状態）
  - marketplace.json は**カタログ**（載せるパッケージの一覧）であり、パッケージ自身のマニフェスト
    ではない。各エントリの実体は `source:` が指す別リポジトリ側にある
- `apm marketplace init` → `apm.yml` に `marketplace:` ブロック
- `apm pack` → **`.claude-plugin/marketplace.json`** を生成（`codex` を outputs に足すと
  `.agents/plugins/marketplace.json` も出る）
- 生成物は **Anthropicの marketplace.json とバイト互換**。Claude Code / Copilot CLI / APM が
  同じファイルを読む
- 消費側: `apm marketplace add owner/repo` ＋ `apm install pkg@marketplace` /
  Claude Code なら `/plugin marketplace add owner/repo`
- **この経路だけ semver レンジが効く**（`version: "^1.0.0"` → `v1.0.0` ＋ sha に解決される）
- 実際に生成された中身:
  ```json
  { "name": "my-team-harness",
    "plugins": [{ "name": "apm-sample-package", "version": "1.0.0",
      "source": { "source": "github", "repo": "microsoft/apm-sample-package",
                  "ref": "v1.0.0", "sha": "b05138f8...", "tag_pattern": "v{version}" }}]}
  ```

> Registryの説明は**本編11「作る」に移した**（`apm publish` の説明と同じ場所にある方が自然で、
> このページがbusyになりすぎるため）。ここでは表の1行に留める。

プライベート配布は Git直接参照でそのまま成立する（object form は実仕様で確認済み）:
```yaml
dependencies:
  apm:
    - git: https://gitlab.company.com/team/agent-tools.git
      path: skills/security-review
      ref: v2.0
      alias: security
    - gitlab.company.com/team/standards#main   # FQDNショートハンド
```
**まとめ**
- → **組織内配布の現実解は「Git直接参照 ＋ タグ固定」**。社内にカタログが欲しくなったら
  marketplace（Claude Codeとも共有できる）。registryは自前で立てる覚悟がいるので様子見

### 13. 調べてみた所感・ハマりどころ ★新規
「調べてみた」という着地点の**結論にあたる1枚**。ここが無いと発表が締まらない。
- 👍 良かった: 1つのapm.ymlで複数Agentに配れる / lockfile+sha256は本気度が高い / CLIが親切
- 🤔 気になった: 変換は最大公約数（frontmatterが黙って落ちる）/ 依存が既定で未固定 /
  registryはexperimentalで実質Git頼み / CLIのバージョンが速く動く（0.28→0.29が調査中に出た）
- 🎯 今使うなら: 社内標準の配布をGit + タグ固定で小さく始めるのが現実的

---

## 展望（スライド14）

### 14. 展望: 2026年夏、一気に動いた（4枚→1枚に圧縮）
**横方向のタイムライン**（罫線＋ドット）で見せる。色付きボックスは使わない。
日付は GitHub API (`gh api repos/microsoft/apm/releases`) で実測した。

| 日付 | 出来事 |
|------|--------|
| **2025/9/18** | **microsoft/apm 公開**（v0.4.0、リポジトリ作成も同日）。ここから約11ヶ月は静か |
| **2026/8/6** | **Agent Plugins 1.0.0** — ベンダー中立のパッケージ*フォーマット仕様*<br/>AWS / Cursor / Microsoft / OpenAI / Vercel(Lead) ＋ Googleが同日 core maintainer 参加<br/>実装済み: VS Code / GitHub Copilot / Cursor / ChatGPT / Kiro<br/>※ **同じ日に apm v0.28.0 がリリースされている**（偶然だが話のつかみに使える） |
| **2026/8/13** | **DeepSeek Harness (dsh)** — 「すべてがプラグイン」のOSS harness。MIT。<br/>Cordis基盤で、モデルアダプタ/ツールレジストリ/Agentループ自体まで差し替え可能。<br/>公開2日で95k stars |
| **2026/8/30** | **apm v0.29.0** — Agent Plugins 1.0出力に対応（issue #2522 → PR #2654、8/22 merged）<br/>同リリースに「register Agent Plugins natively with GitHub Copilot」も入っている |
| 2026/9/6 | apm v0.29.1（調査時点の最新） |

> タイムラインの終端に「今日」のマーカーは置かない（自明なので削除した）。

**APM側の対応の中身**（PR #2654 / v0.29.0）
- `apm pack --format agent-plugin` で仕様準拠の `plugin.json` ＋ `skills/` ＋ `mcp.json` を出力
- 既定（`apm pack` / `--format plugin`）は従来のClaude pluginレイアウトのまま（後方互換）
- **可搬でないprimitive（agents / commands / instructions / hooks / LSP）はパックに失敗する**
  → Agent Pluginsが標準化しなかった範囲が、ツールのエラーとして現れている。良い対比材料
- ※ 手元の v0.28.0 では `apm pack --format` は `plugin|apm` のみ（未搭載を確認済み）

**この1枚で必ず言う2点**
1. **論点**: Agent Skills も MCP も Anthropic 発なのに、Anthropic は TSC に不参加で
   Claude Code はローンチ実装に入っていない
2. **APMは既に仕様に追従している** — 「APM vs Agent Plugins」ではなく、フォーマットと配布の分業

> 圧縮で捨てたもの: オープンガバナンスの詳細、Transport一覧、比較表の全行、相補図、TSCの個人名、
> 逆ドメイン名前空間の説明。比較表は「フォーマット vs 配布手段」の一言に凝縮した。

---

## 締め（スライド15）

### 15. まとめ / 参考リンク / Q&A
- Harnessは作るだけでなく**配る**段階に入った
- APMは今すぐ試せる実装。Git + lockfile + sha256 で組織内配布の芯は押さえている
- ただし変換は最大公約数、registryはexperimental。**Git直参照から小さく始めるのが現実的**
- 約1ヶ月前に Agent Plugins 1.0.0 が出た。フォーマットの標準化はこれから動く

参考リンク:
- microsoft/apm: https://microsoft.github.io/apm/
- Agent Plugins: https://agent-plugins.org/ ✅表記揺れ修正済
- 仕様リポジトリ: https://github.com/agentplugins/agent-plugins-spec
- Zenn: Agent Plugins 1.0.0 は何を標準化し、何を標準化しなかったのか
- LangChain: The Anatomy of an Agent Harness
- martinfowler.com: Harness engineering for coding agent users

---

## デザイン方針

- 色付きの角丸ボックスにテキストを並べる強調は**多用しない**。分かりやすいが、
  ページ全体がそれで埋まると機械的な印象になる
- 色を使うのは**色自体が意味を持つとき**に限る
  - 本編13「調べてみた所感」の 👍 緑 / 🤔 琥珀 / 🎯 青（評価の種類を表す）
  - 本編14「展望」のタイムラインのドット（出来事の区別）
- それ以外は**組版で差をつける**: 連番、細い左罫線、区切り線、ウェイトとサイズの対比
  - 本編15「まとめ」は 01-04 の連番＋説明文、参考リンクは左罫線で区切るだけ
  - 本編12「配る」の左右2カラムも左罫線のみ
  - 本編14「展望」の時系列は、色付きカードを並べるのをやめ、
    **横罫線＋ドット＋等幅の日付**で本物のタイムラインとして描く

## 積み残しTODO

- [ ] **スピーカーノートが導入部（本編2-6 / 実4-8）に無い**。目次・APM本編・展望・まとめには入れた。
      20分の尺合わせのため、残りにも最低限入れる
- [ ] セクションカバーの背景画像はUnsplashの外部URL。オフライン発表なら `public/` に落とす
- [ ] **`public/apm_target_matrix.png` が未使用になった**。スライド9でTargets matrixを
      テキストに統合したため。画像を戻すか削除するか要判断
- [ ] 通しでのリハーサル（20分に収まるか）。特にスライド8・11は情報量が多い
- [ ] `apm` のバージョンを再確認（調査時点 0.28.0。発表時点で更に進む可能性）
- [ ] 発表直前に Agent Plugins の実装クライアント一覧を再確認（動きが速い領域）
- [ ] `apm pack --format agent-plugin` が実際に使える版が出ているか確認し、
      使えるなら実行して出力をスライド14に反映する（現状はPRの記述ベース）
- [ ] デモはやらない前提で組んである（20分15枚だと尺が無い。実行ログのキャプチャで代替）

## 検証メモ

本設計書の APM に関する記述は、`apm` CLI **v0.28.0** を手元で実行して確認した:
- `apm install microsoft/apm-sample-package` … 現状スライドのログと出力が一致
- `apm plugin init` / `apm pack` … 生成物を実際に確認
- `apm.lock.yaml` … `deployed_file_hashes` に sha256 が入ることを確認
- 参照形式は https://microsoft.github.io/apm/consumer/manage-dependencies/ で確認

Agent Plugins の日付・TSC構成は The New Stack / Google Developers Blog 等で確認した。
