---
layout: section
---

# Web page to PDF

WebページをPDFファイルにする

---
layout: two-cols
---

# Web page to PDF
Tool

`pdf-visual-diff`を使うため、WebページをPDF化

* [wkhtmltopdf](https://wkhtmltopdf.org/)
* [html2canvas](https://www.npmjs.com/package/html2canvas/v/1.4.1) + [jspdf](https://www.npmjs.com/package/jspdf)
* [Page\.pdf\(\) method \| Puppeteer](https://pptr.dev/api/puppeteer.page.pdf)
* [Page - pdf() \| Playwright](https://playwright.dev/docs/api/class-page#page-pdf)

...

<div v-click="1">

## なんとなく<span class="underline decoration-sky-500">Playwright</span> <mdi-lightbulb-on class="text-yellow-400"/>

</div>

::right::

<div v-click="1" class="mt-70">

```js
import { chromium } from 'playwright';

const fetch = async (url) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({ path: 'page1.pdf' });
    await browser.close();
}
```

</div>

---
layout: two-cols-header
---

# Web page to PDF
Problems

サイトによってはうまくPDF化できないことがある → <span class="underline decoration-pink-400">コンテンツを読み込む前にPDF化してしまう</span>  
<span class="text-xs">例: <span class="text-sky-300"><a href="https://docs.servicenow.com/ja-JP/bundle/washingtondc-it-asset-management/page/product/software-asset-management2/task/t_RequSoftwareAssetMgmt.html">ソフトウェア資産管理 を要求する | ServiceNow Documentation</a></span></span>

::left::
## Web

<img class="p-3" src="/web2pdf_problem-example.png">

::right::

## PDF

<img class="p-3 h-80" src="/web2pdf_problem-example2.png">

---
layout: two-cols
---

# Web page to PDF
Problems

```js {4-8}
...
await page.goto(targetUrl);

// fix1: wait:domcontentloaded
await page.waitForLoadState('domcontentloaded')

// fix2: wait:networkidle
await page.waitForLoadState('networkidle')

// fix3: waitForSelector
await page.waitForSelector(
    '#zDocsContent', {state: 'visible'})

// fix4: locator.waitFor
await page.locator('#zDocsContent').waitFor();

await page.pdf({ path: 'fetch1.pdf' });
...
```

::right::

<div class="mt-10 ml-5">

[waitForLoadState \| Playwright](https://playwright.dev/docs/api/class-page#page-wait-for-load-state)

<div class="text-xs">

| state | description |
|:-|:-|
| `load` (default) | wait for the load event to be fired. |
| `domcontentloaded` | wait for the DOMContentLoaded event to be fired.<br/><span class="text-rose-600">→ 結果変わらず</span> |
| `networkidle` | DISCOURAGED wait until there are no network connections for at least 500 ms. Don't use this method for testing, rely on web assertions to assess readiness instead.<br/><span class="text-rose-600">→ ページ取得できるようになるが時間かかる<br>　(後述)</span> |

</div>

</div>

---
layout: two-cols
---

# Web page to PDF
Problems

```js {10-15}
...
await page.goto(targetUrl);

// fix1: wait:domcontentloaded
await page.waitForLoadState('domcontentloaded')

// fix2: wait:networkidle
await page.waitForLoadState('networkidle')

// fix3: waitForSelector
await page.waitForSelector(
    '#zDocsContent', {state: 'visible'})

// fix4: locator.waitFor
await page.locator('#zDocsContent').waitFor();

await page.pdf({ path: 'fetch1.pdf' });
...
```

::right::

<div class="mt-10 ml-5">

[waitForSelector \| Playwright](https://playwright.dev/docs/api/class-page#page-wait-for-selector)

<div class="text-xs">

> DISCOURAGED  
> Use web assertions that assert visibility or a locator-based locator.waitFor() instead. Read more about locators.

</div>

[locator.waitFor() \| Playwright](https://playwright.dev/docs/api/class-locator#locator-wait-for)

<div class="text-xs">

| state | description |
|:-|:-|
| `attached` | wait for element to be present in DOM. |
| `detached` | wait for element to not be present in DOM. |
| <span class="ml-1 text-rose-600">visible</span> | wait for element to have non-empty bounding box and no visibility:hidden |
| `hidden` | wait for element to be either detached from DOM, or have an empty bounding box or visibility:hidden. |

</div>

</div>

---
layout: two-cols-header
---

# Web page to PDF
Problems


<mdi-cross class="text-rose-600"/> waitForLoadState('load') /  waitForLoadState('domcontentloaded') <br/>
<mdi-skull-crossbones class="text-orange-400"/> waitForLoadState('networkidle') <br/>
<mdi-circle-outline class="text-yellow-400"/> waitForSelector(...)  <br/>
<mdi-circle-double class="text-green-400"/> <span class="underline decoration-sky-400">locator(...).waitFor()</span>


::left::
## Correct PDF

<img class="p-3" src="/web2pdf_problem-fix.png">

::right::

## PDF

<img class="p-3 h-80" src="/web2pdf_problem-fix-performance.png">

---

# Web page to PDF
Setting file

多くのページを対象とする場合のために、`locator`の設定等を外部ファイルに逃して管理しやすくする  
(最初はJSONを使っていたが、コメント書けないのが辛いのでYAMLに)

```yaml
targets:
  # XXX Documentation
  - url: https://....
    locator: "#zDocsContent"
    title: "XXX Documentation top" # 出力ファイル名
  - url: https://....
  # YYY Developers Documentation
  - url: https://....
  - url: https://....
    locator: "#zDocsContent"
    masks:
      - "ul.sitemap"   # マスク指定　(後述)
```

---
layout: two-cols
---

# Web page to PDF
Miscellaneous

左サイドメニューが欠落することへの対応

* [Page.emulateMedia \| Playwright](https://playwright.dev/docs/api/class-page#page-emulate-media): css media 指定  
* [Page.pdf \| Playwright](https://playwright.dev/docs/api/class-page#page-pdf): `format`でページサイズ指定

```js {2-3,5,7}
...
// page.pdf() の場合、デフォルト'print' 
await page.emulateMedia({media: 'screen'})

await page.pdf({
    path: 'page1.pdf',
    format: 'A2', // default 'Letter'
})
```

<span class="text-rose-600"><mdi-minus-circle /></span><span class="underline decoration-pink-400">ただし、サイドバーメニューに変更があった場合、複数のPDFで変更が検知されることになり、確認が煩雑なのでこれはやらなかった</span>

::right::

![](/web2pdf_emulateMedia.png)


---
layout: two-cols-header
---

# Web page to PDF
Miscellaneous

逆に左サイドメニューが表示されてしまう場合は、`display: none` する。

```js
page.locator('ul.sitemap').evaluateAll(elems => elems.forEach(e => e.style.display = 'none'))
```

<span class="text-xs">例: [相互リンク募集中 | フラワーショップ あいざわ](http://www.aizawa8783.ecweb.jp/pre/link_s.html)</span>

::left::

<div class="mr-3">

![](/web2pdf_mask-1.png)

</div>

::right::

![](/web2pdf_mask-2.png)

---
layout: two-cols
---

# Web page to PDF
Miscellaneous

* Playwrightは画像形式のsnapshotも取得可  
  * [Page.screenshot \| Playwright](https://playwright.dev/docs/api/class-page#page-screenshot) 
* maskも可

```js
await page.screenshot({
    path: 'fetch8.png',
    fullPage: true,
    mask: [page.locator('ul.sitemap')],
});
```

<div class="mt-3"/>
<mdi-minus-circle class="text-rose-600"/><span class="underline decoration-pink-400">PDFに比べてファイルサイズが大きくなるため却下</span>

* PDF: 719,579 B
* Screenshot(png): 1,710,339 B

::right::

![](/web2pdf_screenshot.png)