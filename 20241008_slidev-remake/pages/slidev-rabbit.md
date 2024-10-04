---
layout: section
---

# <logos-slidev/> & <mdi-rabbit class="c-pink animate-pulse"/>

---
layout: two-cols
---

# <mdi-rabbit/> Rabbit

https://rabbit-shocker.org/ja/
* Rubyist向けのプレゼンテーションツール
* RD(Ruby Document), Wiki記法, **Markdown**で<br/>スライド作成できる
* Rubyのパパ・Matzがよく使っている

## 特徴
* スライドの下部に <span class="c-pink"><mdi-rabbit/>ウサギ</span> と <span class="c-green"><mdi-tortoise/>カメ</span> が表示される
  * <span class="c-pink"><mdi-rabbit/>ウサギ</span>: ページが進むごとに右に移動する
  * <span class="c-green"><mdi-tortoise/>カメ</span>: 時間経過とともに右に進む
* <span class="c-pink"><mdi-rabbit/>ウサギ</span>が<span class="c-green"><mdi-tortoise/>カメ</span>より遅れている<br/>→ プレゼンが時間内に終わらない

::right::

<div class="ml-5 mt-10">

![Rabbit](/rabbit.png)

<div class="mt-5"/>

![Matz with Rabbit](/rabbit-matz.png)
<span class="text-size-sm">[Matz Keynote / Yukihiro "Matz" Matsumoto @yukihiro_matz](https://www.youtube.com/watch?v=m_LW5WIYJ9Q)</span>
</div>

---
layout: two-cols
---

# <logos-slidev/> & <mdi-rabbit class="c-pink"/>
<span class="text-sm"><logos-github-octocat/> [kaakaa/slidev-addon-rabbit](https://github.com/kaakaa/slidev-addon-rabbit) | <logos-npm-icon /> [slidev\-addon\-rabbit](https://www.npmjs.com/package/slidev-addon-rabbit)</span>

RabbitをSlidev Addonとして実装

### How to use

1. Install the addon

```bash
$ npm i slidev-addon-rabbit
```

2. Declare the addon in frontmatter

```yaml
---
addon:
  - slidev-addon-rabbit
rabbit:
  slideNum: true
---
```

3. Access a slide with `?time=${MINUTE}` query  

e.g.: `https://example.com/slide?time=25`

::right::


<div class="ml-5">

### <span class="c-green"><mdi-tortoise/></span> components/turtle.vue

```vue {1,2-3,5|2,6,8-13|2,6,13,17,19-23}
<template>
  <div class="rabtle-container" :style="{left: left + 'px'}">
    <emojione-monotone-turtle class="icon" />
  </div>
</template>
<script>
  ...
  data() {
    const maxWidth = this.$slidev.configs.canvasWidth - 20; // 20 is margin-right
    const time = this.$route?.query?.time || 10;
    return {
      left: 0,
      speed: maxWidth / (time * 60 * 10) // 100ms毎の変化量
      ...
    }
  },
  beforeUpdate() {
    ...
    this.intervalId = setInterval(() => {
      if (this.left < this.maxWidth) {
        this.left += this.speed;
      }
    }, 100); // update per 100ms
  ...
```

</div>


---

# TODO

### <span class="underline">Page Weight対応</span>
セクションタイトルスライドも内容盛りだくさんのスライドも、同じ1ページとして換算されるためページごとにWeightを設定できた方が良い?
(Weightの大きなスライドを消化した時に一気にウサギが移動することになるので、見た目的にスマートではない気がする)

### <span class="underline">長い時間を指定すると亀の動きが実際の時間とズレている気がする</span>
30分などの長い時間を指定すると、30分経っても亀がゴールしていない気がする(未検証)

[setInterval](https://developer.mozilla.org/ja/docs/Web/API/setInterval)で素朴に100msごとに動かしているだけなので、ブラウザのクロックがズレていっているのかもしれない  
https://github.com/kaakaa/slidev-addon-rabbit/blob/master/components/Turtle.vue#L36
