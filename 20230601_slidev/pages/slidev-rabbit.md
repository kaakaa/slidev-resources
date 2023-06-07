---
layout: section
---

# Slidevでウサカメする

---
layout: two-cols
---

# Rabbit

https://rabbit-shocker.org/ja/
* Rubyist向けのプレゼンテーションツール
* RD(Ruby Document), Wiki記法, Markdownでスライド作成できる
* Rubyのパパ・Matzがよく使っている

## 特徴
* スライドの下部に<span class="text-pink-500">ウサギ</span>と<span class="text-green-500">カメ</span>が表示される
  * <span class="text-pink-500">ウサギ</span>: ページが進むごとに右に移動する
  * <span class="text-green-500">カメ</span>: 時間経過とともに右に進む
*q <span class="text-pink-500">ウサギ</span>が<span class="text-green-500">カメ</span>より遅れていると、プレゼンが時間内に終わらない

::right::

![](/20230601_slidev/rabbit-matz.png)
<span class="text-size-sm">[Matz Keynote / Yukihiro "Matz" Matsumoto @yukihiro_matz](https://www.youtube.com/watch?v=m_LW5WIYJ9Q)</span>

---

# Slidevでウサカメする
使用したSlidevの機能

* [Global Layers \| Slidev](https://sli.dev/custom/global-layers.html)
> Global layers allow you to have custom components that persistent across slides. This could be useful for having footers, cross-slides animations, global effects, etc.

* [Components \| Slidev](https://sli.dev/builtin/components.html#custom-components)
> Custom Components
>
> Create a directory components/ under your project root, and simply put your custom Vue components under it, then you can use it with the same name in your markdown file!

* [Use Addon \| Slidev](https://sli.dev/addons/use.html)
> Addons are sets of additional components, layouts, styles, configuration...etc. that you can use in your presentation.

→ Global LayerのFooterとしてウサギとカメを表示し、Slidev Addonとして配布する

---

# 成果物

* [kaakaa/slidev\-addon\-rabbit: Slidev addon for presentation time management inspired Rabbit](https://github.com/kaakaa/slidev-addon-rabbit)
  * 時間があればこの中身とか
*  [slidev\-addon\-rabbit \- npm](https://www.npmjs.com/package/slidev-addon-rabbit)
