# 展望: 2026年夏、一気に動いた

<div class="relative mt-6 mb-5">

<div class="absolute left-1 right-1 top-2.5 h-px bg-gray-400/40"></div>

<div class="relative grid grid-cols-6 gap-3">

<div class="col-span-2">
<div class="w-3 h-3 rounded-full bg-gray-400"></div>
<div class="text-xs font-mono text-gray-500 dark:text-gray-400 mt-2">2025/9/18</div>
<div class="text-sm font-bold mt-0.5">microsoft/apm 公開</div>
<div class="text-xs text-gray-600 dark:text-gray-300">v0.4.0 &nbsp;<span class="opacity-60">— ここから約11ヶ月、静かに版を重ねる</span></div>
</div>

<div>
<div class="w-3 h-3 rounded-full bg-purple-500"></div>
<div class="text-xs font-mono text-purple-700 dark:text-purple-300 mt-2">2026/8/6</div>
<div class="text-sm font-bold mt-0.5 text-purple-800 dark:text-purple-200">Agent Plugins 1.0.0</div>
<div class="text-xs text-gray-600 dark:text-gray-300">ベンダー中立の<b>フォーマット仕様</b><br/><span class="opacity-70">同日 apm v0.28.0</span></div>
</div>

<div>
<div class="w-3 h-3 rounded-full bg-indigo-500"></div>
<div class="text-xs font-mono text-indigo-700 dark:text-indigo-300 mt-2">2026/8/12</div>
<div class="text-sm font-bold mt-0.5 text-indigo-800 dark:text-indigo-200">MS製品が実装</div>
<div class="text-xs text-gray-600 dark:text-gray-300">VS Code / Copilot CLI / SDK / Copilot app<br/><span class="opacity-70">仕様公開から<b>6日</b></span></div>
</div>

<div>
<div class="w-3 h-3 rounded-full bg-cyan-500"></div>
<div class="text-xs font-mono text-cyan-700 dark:text-cyan-300 mt-2">2026/8/13</div>
<div class="text-sm font-bold mt-0.5 text-cyan-800 dark:text-cyan-200">DeepSeek Harness</div>
<div class="text-xs text-gray-600 dark:text-gray-300"><b>「すべてがプラグイン」</b>のOSS harness<br/>MIT / 2日で95k stars</div>
</div>

<div>
<div class="w-3 h-3 rounded-full bg-green-500"></div>
<div class="text-xs font-mono text-green-700 dark:text-green-300 mt-2">2026/8/30</div>
<div class="text-sm font-bold mt-0.5 text-green-800 dark:text-green-200">apm v0.29.0</div>
<div class="text-xs text-gray-600 dark:text-gray-300">Agent Plugins 1.0出力に対応<br/><a href="https://github.com/microsoft/apm/pull/2654" class="text-green-700 dark:text-green-300">PR #2654</a></div>
</div>

</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="space-y-2">

```text [Agent Plugins のパッケージ構造 ~i-mdi:file-code~]
my-plugin/
├── plugin.json          # 必須マニフェスト
├── skills/              # Agent Skills仕様に準拠
└── mcp.json             # stdio / HTTP / SSE
```

<div class="rounded-lg bg-purple-500/15 border border-purple-400/40 p-2 text-xs">
<div class="font-bold text-purple-800 dark:text-purple-200">📐 標準化したもの / しなかったもの</div>
<div class="text-purple-800 dark:text-purple-200 mt-1">
標準化: <b>Agent Skills ＋ MCP servers</b><br/>
仕様外: <code>commands/</code> <code>agents/</code> <code>hooks/</code>、そして<b>配布方法</b><br/>
<span class="opacity-80">→ 仕様外の分は各ベンダーが<b>名前空間ディレクトリ</b>で載せる（8/12のMS実装がまさにこれ）</span>
</div>
</div>

<div class="rounded-lg bg-red-500/15 border-2 border-red-400/60 p-2 text-xs">
<div class="font-bold text-red-800 dark:text-red-200">🤔 Anthropicは不参加</div>
<div class="text-red-800 dark:text-red-200 mt-1">
<b>Agent Skills も MCP も Anthropic 発</b>だが、TSCに入っておらずClaude Codeもローンチ実装に含まれない
</div>
</div>

</div>

<div class="space-y-2">

<div class="rounded-lg bg-green-500/15 border-2 border-green-400/60 p-3 text-xs">
<div class="font-bold text-green-800 dark:text-green-200 mb-1">🔗 APMは既に対応済み（v0.29.0）</div>
<div class="text-green-800 dark:text-green-200 space-y-1">
<div><code>apm pack --format agent-plugin</code> で仕様準拠の<br/>
<code>plugin.json</code> ＋ <code>skills/</code> ＋ <code>mcp.json</code> を出力</div>
<div class="pt-1">既定は従来のClaude pluginレイアウトのまま（後方互換）</div>
<div class="pt-1 border-t border-green-400/40"><b>可搬でないprimitiveはパックに失敗する</b><br/>
（agents / commands / instructions / hooks / LSP）<br/>
→ 仕様の境界がツールの挙動として現れている</div>
</div>
</div>

<div class="rounded-lg bg-cyan-500/15 border border-cyan-400/50 p-3 text-xs">
<div class="font-bold text-cyan-800 dark:text-cyan-200 mb-1">👀 ウォッチしたいもの</div>
<div class="text-cyan-800 dark:text-cyan-200">
<b>DeepSeek Harness</b> — モデルアダプタもツールレジストリもAgentループ自体もプラグイン。<br/>
harnessを「配る」だけでなく<b>harnessそのものを組み替える</b>方向
</div>
</div>

</div>

</div>

<div class="mt-2 text-xs text-right text-gray-700 dark:text-gray-300">
<a href="https://agent-plugins.org/" class="text-blue-700 dark:text-blue-300">agent-plugins.org</a> /
<a href="https://github.com/agentplugins/agent-plugins-spec" class="text-blue-700 dark:text-blue-300">agent-plugins-spec</a> /
<a href="https://github.com/microsoft/apm/issues/2522" class="text-blue-700 dark:text-blue-300">apm#2522</a>
</div>

<!--
展望として1枚。
まずタイムライン。8月に3つ立て続けに起きた。この発表の1ヶ月ちょっと前。
Agent Pluginsが仕様を決め、その1週間後にDeepSeekが「すべてがプラグイン」のharnessを出し、
さらにその9日後にAPMが仕様に追従した。動きが速い。

APMの対応で面白いのは、可搬でないprimitiveをパックしようとすると失敗すること。
Agent Pluginsが標準化しなかった範囲が、ツールのエラーとして現れている。

そしてAgent SkillsもMCPもAnthropic発なのに、それを束ねる標準化にAnthropicがいない。
ここは今後どうなるか分からないので、注視しておきたいところ。
-->
