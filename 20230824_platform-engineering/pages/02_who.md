---
layout: section
---

# Who?
Platform Engineering

---
layout: two-cols
---

# Team Topology

> 本書は高速なデリバリーを実現することを目的とした、**4つの基本的なチームタイプと3つのインタラクションパターン**に基づく、組織設計とチームインタラクションのための実践的な適応モデルを紹介する。

<a class="text-xs" href="https://pub.jmam.co.jp/book/b593881.html">ref: チームトポロジー - この本の内容</a>

<div class="mt-5"/>

<hr/>

<div class="mt-5"/>

#### コンウェイの法則 <a class="text-xs" href="https://bliki-ja.github.io/ConwaysLaw/#fn:1">ref: コンウェイの法則 - Martin Fowler's Bliki</a>
> システム（広義に定義）を設計するあらゆる組織は、組織のコミュニケーション構造をコピーした構造を持つ設計を生み出す。  
> ―メルヴィン・コンウェイ



<div class="mt-5"/>

#### 逆コンウェイの法則 <a class="text-xs" href="https://pub.jmam.co.jp/book/b593881.html">ref: チームトポロジー - KEY TAKEWAYS</a>
> チームトポロジーはチームの目的と責任を明確にし、チーム間の相互関係の効果を向上させる


::right::

<div class="ml-10 mt-10">
  <img src="/book-team-topology.png">
</div>

---
layout: two-cols
---

# Team Topology
4つのTeam

#### Stream-aligned team
> ストリームアラインドチームとは、価値のある単一の仕事のストリームに沿って働くチームのことだ。(中略)さらに、**なるべくそのチームだけで素早く安全に顧客やユーザーに価値を届けられる**ように、チームに権限が委譲されている。(中略)ストリームアラインドチームは、組織で根幹となるチームタイプで、**残りの基本的なチームタイプの目的は、ストリームアラインドチームの負荷を減らすこと**である。

<p class="text-xs">ref: Ch.5 4つの基本的なチームタイプ | ストリームアラインドチーム</p>

#### <span class="text-gray-600">Enabling team</span>
#### <span class="text-gray-600">Complicated Subsystem team</span>
#### <span class="text-green-900">Platform</span><span class="text-gray-600"> team</span>

::right::
<div class="ml-10 mt-10">
　<div class="mb-3">
    <img class="object-contain w-72" src="/team-topologies-fundamental.png">
  </div>
  <div class="text-xs">
    <img class="object-contain w-72" src="/team-topologies-fundamental-flow.png">
    ref: <a href="https://teamtopologies.com/key-concepts">Core ideas in Team Topologies</a>
  </div>
</div>

---
layout: two-cols
---

# Team Topology
4つのTeam

#### <span class="text-gray-600">Stream-aligned team</span>

#### Enabling team
> イネイブリングチームは、特定のテクニカル(プロダクト)ドメインのスペシャリストから構成され、**(ストリームアラインドチームの)能力ギャップを埋める**のを助ける。複数のストリームアラインドチームを横断的に支援し、適切なツール、プラクティス、フレームワークなどアプリケーションスタックのエコシステムに関する調査、オプションの探索、正しい情報に基づく提案を行う。

<p class="text-xs">ref: Ch.5 4つの基本的なチームタイプ | イネイブリングチーム</p>

#### <span class="text-gray-600">Complicated Subsystem team</span>
#### <span class="text-green-900">Platform</span><span class="text-gray-600"> team</span>

::right::
<div class="ml-10 mt-10">
　<div class="mb-3">
    <img class="object-contain w-72" src="/team-topologies-fundamental.png">
  </div>
  <div class="text-xs">
    <img class="object-contain w-72" src="/team-topologies-fundamental-flow.png">
    ref: <a href="https://teamtopologies.com/key-concepts">Core ideas in Team Topologies</a>
  </div>
</div>

---
layout: two-cols
---

# Team Topology
4つのTeam

#### <span class="text-gray-600">Stream-aligned team</span>
#### <span class="text-gray-600">Enabling team</span>

#### Complicated Subsystem team
> コンプリケイテッド・サブシステムチームは、システムのなかで**スペシャリストの知識が必要となるパーツを開発、保守する**責任を持つ。(中略)このチームの目的は、複雑なサブシステムを含んだり利用するシステムの担当となる**ストリームアラインドチームの認知負荷を減らす**ことにある。

<p class="text-xs">ref: Ch.5 4つの基本的なチームタイプ | コンプリケイテッドサブシステムチーム</p>

#### <span class="text-green-900">Platform</span><span class="text-gray-600"> team</span>

::right::
<div class="ml-10 mt-10">
　<div class="mb-3">
    <img class="object-contain w-72" src="/team-topologies-fundamental.png">
  </div>
  <div class="text-xs">
    <img class="object-contain w-72" src="/team-topologies-fundamental-flow.png">
    ref: <a href="https://teamtopologies.com/key-concepts">Core ideas in Team Topologies</a>
  </div>
</div>

---
layout: two-cols
---

# Team Topology
4つのTeam

#### <span class="text-gray-600">Stream-aligned team</span>
#### <span class="text-gray-600">Enabling team</span>
#### <span class="text-gray-600">Complicated Subsystem team</span>

#### <span class="text-green-400">Platform</span> team

> プラットフォームチームの目的は、**ストリームアラインドチームが自律的に仕事を届けられるようにする**ことである。(中略)プラットフォームチームは、**内部サービスを提供することで、ストリームアラインドチームが下位のサービスを開発する必要性をなくし、認知負荷を下げる**。

<p class="text-xs">ref: Ch.5 4つの基本的なチームタイプ | プラットフォームチーム</p>

::right::
<div class="ml-10 mt-10">
　<div class="mb-3">
    <img class="object-contain w-72" src="/team-topologies-fundamental.png">
  </div>
  <div class="text-xs">
    <img class="object-contain w-72" src="/team-topologies-fundamental-flow.png">
    ref: <a href="https://teamtopologies.com/key-concepts">Core ideas in Team Topologies</a>
  </div>
</div>

---
layout: statement
---

## <span class="text-green-400">Platform Engineering</span>は
## Stream-aligned team の自律的な取り組みを
## サポートする<span class="text-green-400">Platform team</span>の責務
