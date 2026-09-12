---
layout: two-cols
---

# 📦 APMとは
<mdi-github class="text-gray-300"/> [microsoft/apm](https://github.com/microsoft/apm) — MIT License / 調査時点 v0.28.0

<div class="mr-3">

<div class="space-y-4 text-sm">
<div>
<div class="font-bold text-blue-800 dark:text-blue-200 mb-1">📋 マニフェスト: apm.yml</div>
<div class="text-gray-700 dark:text-gray-300 ml-6">package.jsonのAgent版。リポジトリルートに配置<br/>ロックファイルは <code>apm.lock.yaml</code></div>
</div>
<div>
<div class="font-bold text-purple-800 dark:text-purple-200 mb-1">🎯 管理対象 = <b>primitive</b></div>
<div class="text-gray-700 dark:text-gray-300 ml-6">Skills / Prompts / Instructions / Agents / Hooks<br/>これらをAPMは<b>primitive</b>と呼ぶ（以降この語を使う）<br/>依存は <b>apm / mcp / lsp</b> の3系統</div>
</div>
<div>
<div class="font-bold text-gray-800 dark:text-gray-200 mb-1">🔧 対応Coding Agent</div>
<div class="text-gray-700 dark:text-gray-300 ml-6">Copilot / Claude Code / Cursor / Codex / Gemini /<br/>Grok Build / Kiro / OpenCode / Windsurf ほか<b>21種</b></div>
</div>
</div>
</div>

::right::

<div class="space-y-3 mt-10">
<div class="rounded-lg bg-green-500/15 border border-green-400/40 p-3">
<div class="flex items-center gap-2 mb-1">
<div class="text-lg">🌐</div>
<div class="font-bold text-green-800 dark:text-green-200 text-sm">Portable</div>
</div>
<div class="text-xs text-green-800 dark:text-green-200">1つの<code>apm.yml</code>で複数ハーネスをサポート<br/>lockfileが完全な再現性を保証</div>
</div>

<div class="rounded-lg bg-red-500/15 border border-red-400/40 p-3">
<div class="flex items-center gap-2 mb-1">
<div class="text-lg">🔒</div>
<div class="font-bold text-red-800 dark:text-red-200 text-sm">Secure by Default</div>
</div>
<div class="text-xs text-red-800 dark:text-red-200">コンテンツハッシュ検証 / 隠しUnicode文字検出 /<br/>MCP serverの明示的許可制</div>
</div>

<div class="rounded-lg bg-blue-500/15 border border-blue-400/40 p-3">
<div class="flex items-center gap-2 mb-1">
<div class="text-lg">🏢</div>
<div class="font-bold text-blue-800 dark:text-blue-200 text-sm">Governed</div>
</div>
<div class="text-xs text-blue-800 dark:text-blue-200"><code>apm-policy.yml</code>によるポリシー管理<br/>Enterprise→Org→Repoの継承構造</div>
</div>

<div class="rounded-lg bg-purple-500/15 border border-purple-400/40 p-3">
<div class="flex items-center gap-2 mb-1">
<div class="text-lg">🔗</div>
<div class="font-bold text-purple-800 dark:text-purple-200 text-sm">Multi-Platform</div>
</div>
<div class="text-xs text-purple-800 dark:text-purple-200">GitHub / GitLab / Azure DevOps / Bitbucket</div>
</div>
</div>

<!--
npmライクなAgent Package Manager。
ポイントは「1つのマニフェストで複数のCoding Agentに配れる」こと。
CLIの実体はPythonで、調査中に0.28から0.29が出るくらい活発に動いている。
-->

---

# 使う: apm install
1つのpackageが<b>ターゲットごとのネイティブ形式に変換されて配置される</b>（ログの <code>integrated -&gt;</code> の行）。依存は推移的に解決される

<div class="grid grid-cols-9 gap-4">

<div class="col-span-4">

<div class="relative" id="apmyml-wrap">

```yaml [apm.yml ~i-mdi:file-code~]
name: my-agent-package
version: 1.0.0
targets:  # apm init時にも選択可能
- claude
- copilot
dependencies:
  apm: # {owner}/{repo}(/{path})#{ref}
    - microsoft/apm-sample-package#v1.0.0
      # 1 agent / 1 instruction / 2 prompts / 1 skill
      # => 依存: github/awesome-copilot/skills/
      #          review-and-refactor
  mcp: []
```

<a href="https://github.com/microsoft/apm-sample-package" target="_blank"
   title="microsoft/apm-sample-package"
   class="absolute z-10 rounded-sm hover:bg-blue-400/25"
   style="left:13.6%; top:59.9%; width:53.5%; height:5.1%"></a>

</div>

<div class="mt-3 rounded-lg bg-orange-500/15 border border-orange-400/40 p-3">
<div class="font-bold text-orange-800 dark:text-orange-200 text-sm mb-1"><mdi-git/>GitLabやAzureDevOps等も取得対象 </div>
<div class="text-xs text-orange-800 dark:text-orange-200">Git cloneで取得するため、FQDN指定 (<code>gitlab.com/acme/repo#v2.0</code>)、HTTPS/SSH URL、モノレポのサブパス、ローカルパスに対応 (ref: <a href="https://microsoft.github.io/apm/consumer/manage-dependencies/#reference-formats">Reference formats | APM</a>) </div>
</div>

</div>

<div class="col-span-5">

```sh [$ apm install ~i-mdi:npm-variant-outline~]
[i] Targets: claude, copilot  (source: apm.yml)
  [+] microsoft/apm-sample-package #v1.0.0 @fb285168
  |-- 2 prompts integrated -> .github/prompts/
  |-- 2 agents integrated -> .claude/agents/, .github/agents/
  |-- 2 commands integrated -> .claude/commands/
  |-- 2 instruction(s) integrated -> .claude/rules/,
      .github/instructions/
  |-- 1 skill(s) integrated -> .agents/skills/, .claude/skills/
  [+] github/awesome-copilot/skills/review-and-refactor
  |-- Skill integrated -> .agents/skills/, .claude/skills/
[i] Added apm_modules/ to .gitignore
  [!] Claude command accessibility-audit: frontmatter keys
      not supported were dropped: mode.
  [!] 1 dependency unpinned: github/awesome-copilot
      -- add #tag or #sha to prevent drift
[*] Installed 2 APM dependencies in 16.1s.
```

</div>

</div>

<!--
実際に手元で叩いた出力そのまま。
注目してほしいのは2点。
1つは1パッケージが .github/ と .claude/ の両方に展開されていること。
もう1つは警告で、claude commands が対応しないfrontmatterキーが黙って落とされている。
-->

---

# 何がどこに置かれるか

<div class="grid grid-cols-5 gap-4">

<div class="col-span-3">

```sh [インストール後のツリー ~i-mdi:folder-edit~]
.
├── .agents/          # Harness非依存のSkills置き場
│   └── skills        #   (Copilot, Codex, Cursor, etc...)
├── .claude/          # Claude Code用Harness
│   ├── agents
│   ├── commands
│   ├── rules
│   └── skills
├── .github/          # Copilot用のHarness
│   ├── agents
│   ├── instructions
│   └── prompts
├── .gitignore        # "apm_modules/" を追加
├── apm.lock.yaml     # Lockファイル（配置ファイルのハッシュ等）
├── apm.yml
└── apm_modules/      # 依存ライブラリ
```

</div>

<div class="col-span-2 space-y-3">

<div class="rounded-lg bg-blue-500/15 border border-blue-400/40 p-3">
<div class="font-bold text-blue-800 dark:text-blue-200 text-sm mb-1">🔄 変換は <code>apm install</code> のときに起きる</div>
<div class="text-xs text-blue-800 dark:text-blue-200 space-y-1">
<div class="font-mono bg-blue-900/20 rounded p-2 leading-relaxed">パッケージ（primitiveの原本）<br/>　　↓ <b>apm install</b> が targets を見て変換<br/>　　├→ .claude/commands/xxx.md<br/>　　└→ .github/prompts/xxx.prompt.md</div>
<div>対応ターゲットは<b>21種</b>（一部experimental）</div>
</div>
<div class="text-xs mt-1 text-blue-700 dark:text-blue-300">ref: <a href="https://microsoft.github.io/apm/reference/targets-matrix/#summary">Targets matrix | APM</a></div>
</div>

<div class="rounded-lg bg-amber-500/15 border-2 border-amber-400/60 p-3">
<div class="font-bold text-amber-800 dark:text-amber-200 text-sm mb-1">⚠️ 落ちるのは「配置されたコピー」</div>
<div class="text-xs text-amber-800 dark:text-amber-200">
配置先のターゲットが対応しないfrontmatterキーは、<b>install時に警告付きで落とされる</b>（例: claude commandsの <code>mode</code>）。<br/><br/>
パッケージ側は原本を保持したままなので、<b>これはパッケージの制約ではなくインストール時の注意点</b>。<br/>
同じパッケージでも <code>targets</code> の指定次第で結果が変わる
</div>
</div>

</div>

</div>

<!--
1つのパッケージが各Coding Agentのネイティブ形式に変換されて配置される。これがAPMの肝。
ただし完全互換ではなく、対応しないキーは落ちる。ここは正直に言っておきたいところ。
-->

---
layout: two-cols
---

# 再現性: apm.lock.yaml

<div class="mr-4">

```yaml [apm.lock.yaml ~i-mdi:lock~]
lockfile_version: '1'
apm_version: 0.28.0
dependencies:
- repo_url: microsoft/apm-sample-package
  resolved_commit: fb2851683be0e0e7711421d5...
  version: 1.0.0
  deployed_files:
  - .claude/skills/style-checker/SKILL.md
  - .claude/commands/design-review.md
  - .github/prompts/design-review.prompt.md
  deployed_file_hashes:
    .claude/skills/style-checker/SKILL.md:
      sha256:1142700284d253c15e561434362ae620...
    .claude/commands/design-review.md:
      sha256:ed0741675cb37dd3fe77fbd199800582...
```

<div class="mt-4 rounded-lg bg-green-500/15 border border-green-400/40 p-3 text-xs text-green-800 dark:text-green-200">
commit SHAだけでなく、<b>配置後のファイル1つ1つのsha256</b>を記録している
</div>

</div>

::right::

<div class="mt-14 ml-2 space-y-3">

<div class="rounded-lg bg-blue-500/15 border border-blue-400/40 p-3">
<div class="font-bold text-blue-800 dark:text-blue-200 text-sm mb-1">🔒 apm install --frozen</div>
<div class="text-xs text-blue-800 dark:text-blue-200">lockとapm.ymlが不整合ならインストールを拒否。CI向け</div>
</div>

<div class="rounded-lg bg-purple-500/15 border border-purple-400/40 p-3">
<div class="font-bold text-purple-800 dark:text-purple-200 text-sm mb-1">🔍 apm audit</div>
<div class="text-xs text-purple-800 dark:text-purple-200"><code>.claude/</code> 等に配置されたファイルを再ハッシュし、lockとの差分<b>(drift)</b>と<b>隠しUnicode文字</b>を検査</div>
</div>

<div class="rounded-xl bg-red-500/15 border-2 border-red-400/60 p-4 mt-6">
<div class="font-bold text-red-800 dark:text-red-200 mb-2">なぜここまでやるのか</div>
<div class="text-sm text-red-800 dark:text-red-200">
Harnessの中身は<b>プロンプト = 実行される指示</b>。<br/><br/>
書き換えられればエージェントの振る舞いが直接変わるため、通常のライブラリよりサプライチェーン汚染の影響が直接的
</div>
</div>

</div>

<!--
lockfileにsha256が入っているのがAPMの本気度が出ているところ。
なぜここまでやるかというと、Harnessの中身はプロンプト、つまり実行される指示だから。
ライブラリの改ざんより影響が直接的になる。
-->

---

# 作る: `.apm/` と apm pack

<div class="grid grid-cols-2 gap-5">

<div>

::code-group

```sh [0. 構造 ~i-mdi:package-variant~]
.apm/                    # primitive（配布する中身）
  skills/my-skill/SKILL.md
  prompts/review.prompt.md
  instructions/style.instructions.md
  agents/logging-expert.agent.md
apm.yml                  # パッケージのメタ情報
plugin.json              # apm plugin init が生成
```

```sh [1. init ~i-mdi:file-code~]
$ apm plugin init my-harness -y \
    --target claude,copilot

[>] Initializing APM project: my-harness
[*] APM project initialized successfully!
    Created Files
  * apm.yml
  * plugin.json
```

```sh [2. pack ~i-mdi:archive~]
$ apm pack

[+] Generated plugin manifest:
      .claude-plugin/plugin.json
[+] Generated plugin manifest:
      .github/plugin/plugin.json
[*] Packed 4 file(s) -> build/my-harness-0.1.0
[i] Plugin bundle ready -- contains plugin.json
    plus plugin-native directories and an
    embedded apm.lock.yaml
[i] Share with: apm install build/my-harness-0.1.0
```

```sh [3. bundle ~i-mdi:folder-edit~]
build/my-harness-0.1.0/
├── plugin.json
├── skills/
│   └── my-skill/SKILL.md
├── commands/
│   └── review.md
└── instructions/
    └── style.instructions.md
```

::

<div class="mt-4 text-xs border-l-2 border-blue-500 pl-3">
<b class="text-blue-800 dark:text-blue-200">plugin.json</b> … Claude Code等が<b>「これはプラグインだ」と認識するためのマニフェスト</b>（name / version / description）。APM無しで配るときに要る。<code>apm.yml</code> から生成されるが、<b>一度できると更新されない</b>（<code>--force</code> が要る）
</div>

</div>

<div>

<div class="text-xs -mt-9">

| コマンド | 役割 |
|---------|------|
| `apm init` | `apm.yml` だけ作る（使う側） |
| `apm plugin init` | `apm.yml` ＋ `plugin.json`（配る側） |
| `apm pack` | 配布用バンドルに固める |
| `apm publish` | レジストリに上げる |
| `apm compile` | <span class="text-red-700 dark:text-red-300">配布用ではない</span> |

</div>

<div class="mt-4 text-xs space-y-2.5">

<div class="border-l-2 border-red-500 pl-3">
<b class="text-red-700 dark:text-red-300">apm compile</b> … <code>.apm/instructions/</code> を <b>AGENTS.md / CLAUDE.md 等に展開する</b>コマンド。<code>applyTo</code> の範囲に近いディレクトリへ分けて置かれる（<code>src/api/**</code> → <code>src/AGENTS.md</code>）。配るためではなく<b>手元で効かせる</b>ためのもの
</div>

<div class="border-l-2 border-gray-400/50 pl-3">
<b>レジストリ</b> … npmjs.comのような<b>共用の公開サービスは無い</b>。<b>Artifactory / JFrog</b>、または Registry HTTP API を実装したサービスを<b>自前で立てる</b><br/><span class="text-amber-700 dark:text-amber-300">※ <code>registries</code> はまだ experimental（<code>apm experimental enable registries</code> が必要）</span>
</div>

</div>

</div>

</div>

<!--
ここは実際に手を動かして確認した。
配る中身は .apm/ に置き、メタ情報は apm.yml に書く。

apm compile は紛らわしいが配布用ではない。
.apm/instructions を、AGENTS.md や CLAUDE.md といった各Agentが読むファイルに展開する。
1つにまとめるのではなく、applyTo のglobを見て効かせたい階層に分散して置いてくれる。
手元で試したら src/api/** の instruction は src/AGENTS.md に置かれた。

パッケージを作るなら plugin init して .apm/ に置いて pack する。
plugin.json があると、APMを入れていない人でもClaude Codeのプラグインとして使える。
逆に、既にある .claude-plugin/plugin.json をAPMが検出して apm.yml を合成することもできる。
これが後のAgent Pluginsの話に繋がる。
-->

---

# 配る: 2つの経路

<div class="text-xs mt-2">

| 経路 | 作る側 | 使う側 |
|------|--------|--------|
| **Git直接参照** | pushするだけ | `apm install owner/repo#v1.0` |
| **Marketplace** | `marketplace:` ＋ `apm pack` | `apm marketplace add` / Claude Codeの `/plugin` |

</div>

<div class="grid grid-cols-2 gap-5 mt-4 text-xs">

<div class="border-l-2 border-gray-400/50 pl-3">
<div class="font-bold mb-1">Git直接参照 — プライベート配布はこれで足りる</div>

```yaml
dependencies:
  apm:
    # リポジトリ丸ごと
    - gitlab.company.com/team/standards#main
    # 一部だけ（type: は自己ホストGitLabの明示）
    - git: https://gitlab.company.com/team/tools.git
      path: skills/security-review
      ref: v2.0
      type: gitlab
```

<div class="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
<div>・<b>pushすれば配れる</b>。別途publishする手順は無い。<code>#ref</code> は <b>tag / branch / commit SHA</b> のどれでも指定できる</div>
<div>・<code>path:</code> で<b>一部だけ</b>を指すとHTTPのファイル取得になり、ホストによってはPATが渡らず<b>401/403</b>。駄目なら<b>丸ごと</b>に切り替える</div>
</div>
</div>

<div class="border-l-2 border-blue-500 pl-3">
<div class="font-bold text-blue-800 dark:text-blue-200 mb-1">Marketplace — Claude Codeと同じカタログになる</div>

```json
// apm pack が生成する .claude-plugin/marketplace.json
{ "name": "my-team-harness",
  "owner": { "name": "kaakaa" },
  "plugins": [
    { "name": "team-standards",
      "version": "0.1.0",
      "description": "社内コーディング規約",
      "source": "./dist/team-standards" }]}
```

<div class="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
<div>・<code>apm.yml</code> の <code>marketplace:</code> だけで生成される<b>カタログ</b>。中身は各パッケージへのポインタ</div>
<div>・<b>Anthropicのmarketplace.jsonとバイト互換</b>。Claude Codeが <code>/plugin marketplace add owner/repo</code> でそのまま読む</div>
<div>・<span class="text-amber-700 dark:text-amber-300">⚠️</span> 参照先は <code>apm pack</code> の成果物（<code>skills/</code> 等がルートにある形）を指すこと。<code>.apm/</code> のままではClaude Codeがコンポーネントを見つけられない</div>
</div>
</div>

</div>


<!--
ここが調べていて一番の発見だった。配布経路が3つある。
Marketplaceは apm search で探せる仕組みで、一般提供されている。
Registryは apm publish でRESTにzipを上げるが、experimental フラグが要る。
なので今組織で使うなら Git直接参照 + タグ固定が現実解。
-->

---
layout: center
---

# 調べてみた所感

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl bg-green-500/15 border border-green-400/40 p-4">
<div class="text-2xl mb-2">👍</div>
<div class="font-bold text-green-800 dark:text-green-200 mb-2">良かった</div>
<div class="text-xs text-green-800 dark:text-green-200 space-y-2">
<div>1つの<code>apm.yml</code>で複数Agentに配れる。<b>開発はClaude、CIはCodexとかがやりやすそう</b></div>
<div>既存HarnessをAPM化するのは、適切なディレクトリに振り分けるだけ</div>
<div>lockfileに<b>配置ファイルのsha256</b>まで入れる本気度</div>
</div>
</div>

<div class="rounded-xl bg-amber-500/15 border border-amber-400/40 p-4">
<div class="text-2xl mb-2">🤔</div>
<div class="font-bold text-amber-800 dark:text-amber-200 mb-2">気になった</div>
<div class="text-xs text-amber-800 dark:text-amber-200 space-y-2">
<div>CodingAgentごとの細かな制約がどのように扱われるのか理解しきれない</div>
<div>勝手に.gitignoreに <code>apm_modules/</code> を入れるのはやりすぎ</div>
<div><code>plugin.json</code> の扱いがよく分からない</div>
<div>配布までは簡単だが、継続改善含む運用考えると難しい</div>
</div>
</div>

<div class="rounded-xl bg-blue-500/15 border-2 border-blue-400/60 p-4">
<div class="text-2xl mb-2">🎯</div>
<div class="font-bold text-blue-800 dark:text-blue-200 mb-2">今使うなら</div>
<div class="text-xs text-blue-800 dark:text-blue-200 space-y-2">
<div>社内標準の配布を<b>Git + タグ固定</b>で小さく始める</div>
<div>apm.yml, apm.lock.yml, app_modules/あたりを <code>.git/info/exclude</code> に</div>
<div>Marketplaceは発見性が要るようになってから</div>
<div>便利ではあるが、<b>統制方面での使い方</b>で効果を発揮しそう</div>
</div>
</div>

</div>

<!--
まとめると、配る仕組みとしての芯はしっかりしている。
ただしPortableという言葉から期待するほど完全ではない。
小さく始めるなら十分使える、という感触。
-->
