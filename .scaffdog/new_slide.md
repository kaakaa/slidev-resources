---
name: 'new_slide'
root: '.'
output: '.'
questions:
  name: 'Please enter a name of directory for slide:'
---

# `{{ inputs.name }}`/slides.md

```md
---
title: {{ inputs.name }}
info: |
  ## {{ inputs.name }}
  Presentation slides for {{ inputs.name }}.
theme: seriph
background: https://cover.sli.dev
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
githubPages:
  ogp: true
addons:
  - slidev-addon-rabbit
rabbit:
  slidevNum: true
---

# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
```


# `{{ inputs.name }}`/public/.gitkeep

```
```
