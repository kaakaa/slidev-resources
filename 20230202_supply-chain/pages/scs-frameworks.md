---
layout: intro
---

# Supply Chain Security Frameworks

---

# Supply Chain Security Frameworks

| Abbr | Name | Org | Publishd | Descriptions |
|:-------------|:-----|:----|:---------|:-------------|
| SSDF | Secure Software Development Framework v1.1 | NIST | 2022/02/03 | ソフトウェアの脆弱性のリスクを軽減するための推奨事項。EO14028を受けて改訂。 |
| SLSA | Supply chain Levels for Software Artifacts | Google | 2021/06/21 | ソフトウェアアーティファクトの完全性(Integrity)を保証するためのEnd-to-Endのフレームワーク |
| - | Software Supply Chain Best Practices | CNCF | 2021/05/14 | セキュアな開発を行うためのプラクティス集 |
| S2C2F | Secure Supply Chain Consumption Framework | OpenSSF (Microsoft) | 2022/08/01 | OSSのセキュアな**利用方法**に関するフレームワーク |

---
layout: two-cols
---

# SSDF (SP 800-218)
NIST - Secure Software Development Framework 

未検出/未対処の脆弱性が悪用された場合の潜在的な影響を軽減するための、Software producerに向けたガイドライン

| Group | Tasks |
|:------|:------------|
| Prepare the Organization (PO) | 13 |
| Protect the Software (PS) | 4 |
| Produce Well-Secured Software (PW) | 16 |
| Respond to Vulnerabilities (RV) | 9 |

::right::


<div class="mt-15">
  <img src="/20230202_supply-chain/ssdf-title.png" class="rounded h-32 m-5"/>
  <img src="/20230202_supply-chain/ssdf-table.png" class="rounded h-64 m-5"/>
</div>



---
layout: two-cols
---

# SSDF (SP 800-218)
NIST - Secure Software Development Framework 

v1.1 での改訂箇所(追加セクション)

| Section | Title |
|:--------|:------|
| PO.1.2 | セキュリティ要求事項の文書化 |
| PO.5.1 | ソフトウェア開発における環境の分離/保護 |
| PO.5.2 | 開発関連作業用のエンドポイントの堅牢化 |
| PS.3.2 | **ソフトウェアの全コンポーネントの構成情報の収集、保護、維持、共有** |
| PW.1.2 | セキュリティ要求や設計判断の記録 |

::right::


<div class="mt-15">
  <img src="/20230202_supply-chain/ssdf-eo14028.png" class="rounded m-5"/>
</div>


---
layout: two-cols
---

# SLSA 

Google - Supply chain Levels for Software Artifacts

ソフトウェアアーティファクトの完全性(Integrity)を保証するためのEnd-to-endのフレームワーク。  
3つのTrust Boundariesを設け、それぞれの領域の対応状況によりレベルを設定する。

| Boundary Name | Requirements |
|:--------------|:-------------|
| **Source Integrity** | 4 |
| **Build Integrity** | 8 |
| **Dependencies** | 5 |
| (Common) | 3 |

::right::


<div class="mt-15">
  <img src="/20230202_supply-chain/slsa-boundaries.png" class="rounded h-48 m-5"/>
  <img src="/20230202_supply-chain/slsa-requirements.png" class="rounded h-48 w-86 m-5"/>
  <div class="text-xs text-right">参考: <a href="https://slsa.dev/spec/v0.1/index">SLSA • Introduction</a></div>
</div>



---
layout: two-cols
---

# CNCF
CNCF - Software Supply Chain Best Practices

サプライチェーンが侵害された事例を収集・分析し、攻撃のリスクを低減するための推奨事項や利用可能なツールを開発ステージごとに紹介。  

* **Securing the Source Code**
* **Securing the Materials**
* **Securing the Build Pipelines**
* **Securing the Artefacts**
* **Securing Deployments**


::right::

<div class="mt-15">
  <img src="/20230202_supply-chain/cncf-introduction.png" class="rounded m-5"/>
  <div class="text-xs text-right">参考: <a href="https://www.microsoft.com/en-us/security/blog/2022/11/16/microsoft-contributes-s2c2f-to-openssf-to-improve-supply-chain-security/">Microsoft contributes S2C2F to OpenSSF to improve supply chain security
</a></div>
</div>

---

# CNCF
CNCF - Software Supply Chain Best Practices

全49プラクティスで実践的なものが多く、かつSLSAよりも包括的。  
[Comparing SLSA to the CNCF Software Supply Chain Best Practices Recommendations](https://medium.com/read-the-source/comparing-slsa-to-the-cncf-software-supply-chain-best-practices-recommendations-46988f781426)

| Target | Practices |
|:-|:-|
| **Source Code** | 署名付きコミット、マージ前の検証(Tests, AST等)、Code Ownerの設定など |
| **Materials** | Checksum検証、脆弱性/ライセンススキャン、SBOMの生成など |
| **Pipelines** | 再現可能なビルドを意識する、ネットワーク接続の最小化、 短命の証明書(SPIFEE)など |
| **Artefacts** | ビルドプロセスに対する署名及び検証、秘密鍵の更新方法に確率、成果物の暗号化(ocicrypto)など |
| **Deployments** | 成果物に対するメタデータの検証、TUF(The Update Framework)の使用、など


---
layout: two-cols
---

# S2C2F
OSSF - Secure Supply Chain Consumption Framework

OSSのConsumer側の視点に立ったフレームワーク。　　
既知の攻撃手法の分析から導出した8つのプラクティスと4段階の成熟モデルから成る。

* **Ingest It**: 外部OSSリソースを取り込む
* **Scan It**: 脆弱性等をスキャンする
* **Inventory It**: どこで使われているか管理する
* **Update It**: OSSの更新をすぐに適用可能にする
* **Enforce It**: OSSの利用方法を定める
* **Rebuild It**: 独自ビルドを実行可能にする
* **Fix It**: 脆弱性を修正できるようにする


::right::

<div class="mt-5">
  <img src="/20230202_supply-chain/s2c2f-practices.png" class="rounded h-48 m-5"/>
  <img src="/20230202_supply-chain/s2c2f-maturities.png" class="rounded m-5"/>
  <div class="text-xs text-right">参考: <a href="https://www.microsoft.com/en-us/security/blog/2022/11/16/microsoft-contributes-s2c2f-to-openssf-to-improve-supply-chain-security/">Microsoft contributes S2C2F to OpenSSF to improve supply chain security
</a></div>
</div>
