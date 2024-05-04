---
layout: image
image: /tools_wraith-logo.png
backgroundSize: 20em 50%
---
# <mdi-hammer-wrench/> Screen Diff Tool
Candidates

### [<mdi-github/> bbc/wraith: Wraith — A responsive screenshot comparison tool](https://github.com/bbc/wraith?tab=readme-ov-file)

🇬🇧 英BBCのOSS
<p><mdi-minus-circle class="text-pink-700" /> 最終コミットが5年前で開発停止中</p>
<p><mdi-minus-circle class="text-pink-700" /> ドキュメントもDeadLink <mdi-skull-crossbones/></p>
<p><mdi-minus-circle class="text-pink-700" /> 内部的に<b>ImageMagick</b>を使っているため環境構築が重そう</p>

---
layout: two-cols
---

# <mdi-hammer-wrench/> Screen Diff Tool
Candidates

### [moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)
<div class="text-slate-500">Visual Regression Testing for PDFs in JavaScript</div>

<div class="mt-3"><mdi-check-circle class="text-green-300" /> JSライブラリのみに依存</div>
<dl>
  <dt class="ml-6 text-sky-300"><a href="https://www.npmjs.com/package/pdfjs-dist">pdfjs-dist</a></dt>
  <dd class="ml-10">PDF.js is a Portable Document Format (PDF) library that is built with HTML5.</dd>
  <dt class="ml-6 text-sky-300"><a href="https://www.npmjs.com/package/jimp">jimp</a></dt>
  <dd class="ml-10">JavaScript Image Manipulation Program</dd>
  <dt class="ml-6 text-sky-300"><a href="https://www.npmjs.com/package/pixelmatch">pixelmatch</a></dt>
  <dd class="ml-10">JavaScript pixel-level image comparison library</dd>
</dl>

<div class="mt-3">
  <mdi-alert-box class="text-orange-500" /> <mdi-git /> <span class="underline decoration-pink-700">79 commits</span> | <mdi-github /><span class="underline decoration-pink-700"> 31 stars</span> | <mdi-account-group /> <span class="underline decoration-pink-700">4 contributors</span> <br>
  <span class="ml-6 text-slate-500"> 個人プロジェクト?</span>
</div>
<div class="mt-1"><mdi-alert-box class="text-orange-500" /> WebページをPDF化する手段が必要</div>


::right::
<div class="mt-25 ml-5">
  <img class="rounded shadow" src="tools_pdf-visual-diff.png">
</div>

---

![alt text](/tools_example-diff.png)

<div class="mt-10"/>

<div v-click="1" class="flex justify-center">
  <img class="w-1/2" src="/tools_example-diff-2.png">
</div>

---
layout: two-cols
---

# <mdi-school-outline /> How to use
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

関数 <b class="underline decoration-sky-500 text-pink-500">`comparePdfToSnapshot()`</b> か  
Jest Matcher <span class="underline decoration-sky-500">`toMatchPdfSnapshot()`</span> を使う。

```js {all|2,6,8-12}
// test/index.test.js
import { comparePdfToSnapshot } from 'pdf-visual-diff';
import { expect } from 'chai';

describe('test pdf diff', () => {
    const pathToPdf = 'testdata/sample.pdf';
    it('should pass', async () => {
        const ret = await comparePdfToSnapshot(
            pathToPdf,
            ".",
            'sample.pdf'
        );
        expect(ret).to.be.true;
    })
})
```

::right::

<div class="mt-40 ml-3">

```js
/**
 * Compare pdf to persisted snapshot. If one does not exist it is created
 * @param pdf - path to pdf file or pdf loaded as Buffer
 * @param snapshotDir - path to a directory where __snapshots__ folder is going to be created
 * @param snapshotName - uniq name of a snapshot in the above path
 * @param compareOptions - image comparison options
 * @param compareOptions.tolerance - ...
 * @param compareOptions.maskRegions - ...
 */
type ComparePdfToSnapshot = (
  pdf: string | Buffer,
  snapshotDir: string,
  snapshotName: string,
  compareImageOpts: Partial<CompareOptions> = {},
) => Promise<boolean>
```

</div>

---
layout: two-cols
---

# <mdi-school-outline /> How to use
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

関数 <b class="underline decoration-sky-500 text-pink-500">`comparePdfToSnapshot()`</b> か  
Jest Matcher <span class="underline decoration-sky-500">`toMatchPdfSnapshot()`</span> を使う。

```js {2,6,8-12}
// test/index.test.js
import { comparePdfToSnapshot } from 'pdf-visual-diff';
import { expect } from 'chai';

describe('test pdf diff', () => {
    const pathToPdf = 'testdata/sample.pdf';
    it('should pass', async () => {
        const ret = await comparePdfToSnapshot(
            pathToPdf,
            ".",
            'sample.pdf'
        );
        expect(ret).to.be.true;
    })
})
```

::right::

<div class="mt-23 ml-5">
  <div v-click="1" class="bg-slate-900 font-mono text-sm">$ <span class="text-red-300">npm run test</span></div>
  <div v-click="2" class="bg-slate-900 font-mono text-sm"><span class="text-slate-400">(update `testdata/sample.pdf`)</span></div>
  <div v-click="2" class="bg-slate-900 font-mono text-sm">$ <span class="text-red-300">npm run test</span></div>
</div>

<div class="ml-5">

```shell {8-9|2,5,8-9|2-5,8-9} {at:1}
.
├── __snapshot__/              // create automatically
│   ├── sample.pdf.diff.png    // - diff image (*)
│   ├── sample.pdf.new.png     // - new  image (*)
│   └── sample.pdf.png         // - base image
├── test/
│   └── index.test.js
├── testdata
│   └── sample.pdf             // PDF file for testing
├── package-lock.json
└── package.json

```

</div>

---

<div>
  <span class="mr-2/7">sample.pdf.png (base)</span>
  <span>sample.pdf.new.png (new)</span>
</div>

![alt text](/tools_example-diff.png)

<div class="mt-3"/>

<div class="flex justify-center">
  <p class="w-1/2">
    sample.pdf.diff.png (diff)<br/>
    <img src="/tools_example-diff-2.png">
  </p>
</div>

---
layout: two-cols-header
---

# Tools
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

差分を確認した後、`pdf-visual-diff`コマンドを使って、差分の承認/破棄を実施する。

::left::

```shell
$ pdf-visual-diff --help
Command:
  pdf-visual-diff approve  Approve new snapshots
  pdf-visual-diff discard  Discard new snapshots and diffs

Options:
  --help     ヘルプを表示
  --version  バージョンを表示
```

::right::

<div class="ml-3">

```json
  ...
  "scripts": {
    "test": "mocha ./test/**/*.test.mjs",
    "test:pdf-approve": "pdf-visual-diff approve",
    "test:pdf-discard": "pdf-visual-diff discard",
    "jest": "jest"
  },
  ...
```

</div>
