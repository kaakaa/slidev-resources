---
layout: two-cols
---
# Tools

* [bbc/wraith: Wraith](https://github.com/bbc/wraith?tab=readme-ov-file)
  * 英BBCのOSS
    * > Wraith — A responsive screenshot comparison tool
  * 最終コミットが5年前で開発停止中
    * ドキュメントリンクも修正されていない
    * (GitHub Organization名が変わっただけなので[URLを変えれば](https://bbc.github.io/wraith/configs.html)アクセスできるが)
  * 内部的に**ImageMagickを使っている**ため環境構築が重そう
    * 他にもImageMagickを使ったライブラリ多数

::right::

<div class="mt-10 ml-5">
  <img src="/tools_wraith-logo.png">
</div>

---
layout: two-cols
---

# Tools

* [moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)
  * JSのみに依存したPDF/Image比較ライブラリ
    * [**jimp**](https://www.npmjs.com/package/jimp): JavaScript Image Manipulation Program
    * [**pixelmatch**](https://www.npmjs.com/package/pixelmatch): JavaScript pixel-level image comparison library
    * [**pdfjs\-dist**](https://www.npmjs.com/package/pdfjs-dist): PDF.js is a Portable Document Format (PDF) library that is built with HTML5. 
  * 環境依存も少ない(ImageMagick不要)なため採用
  * WebページをPDF化するのは別途考える

::right::
<div class="mt-10 ml-5">
  <img src="tools_pdf-visual-diff.png">
</div>

---

![alt text](/tools_example-diff.png)

---

![alt text](/tools_example-diff.png)

<div class="mt-10"/>

<div class="flex justify-center">
  <img class="w-1/2" src="/tools_example-diff-2.png">
</div>

---
layout: two-cols
---

# Tools
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

以下のいずれかの関数を使ってPDFを比較する
* function: `comparePdfToSnapthot` <=
* jest: `toMatchPdfSnapthot`

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

<div class="mt-50 ml-3">

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

# Tools
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

以下のいずれかの関数を使ってPDFを比較する
* function: `comparePdfToSnapthot`
* jest: `toMatchPdfSnapthot`

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

<div class="mt-50"></div>

<div class="ml-5">

```shell {8-9|2,5,8-9|2-5,8-9}
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

<div class="mt-10"/>

<div class="flex justify-center">
  <p class="w-1/2">
    sample.pdf.diff.png (diff)<br/>
    <img src="/tools_example-diff-2.png">
  </p>
</div>

---
layout: two-cols
---

# Tools
[moshensky/pdf\-visual\-diff](https://github.com/moshensky/pdf-visual-diff)

差分を確認した後、`pdf-visual-diff`コマンドを使って、差分の承認/破棄を実施する。

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

<div class="mt-38 ml-3">

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
