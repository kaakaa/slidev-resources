---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Write E2E Test for Mattermost Plugin

With Modern E2E Testing Framework **Cypress**

<Footer class="abs-br"/>

---
layout: image-right
image: /20210605_cypress/slidev.png
---

# はじめに

* 本日の資料は[Slidev](https://sli.dev/)で作成しています
  * Vue コアチームの [Anthony Fu](https://github.com/antfu) が開発
  * Markdown to Slide
  * カスタムVue コンポーネントを使える
  * SPA としてビルド可能

**Q: 本日のスライドのどこにカスタムVueコンポーネントが使われているでしょう？**

<Footer class="abs-br"/>

---
layout: center
class: text-center
---

# Why E2E Testing?

<Footer class="abs-br" />

---

## Why E2E Testing?

### Background

- Mattermost でプラグインを書いている
- Mattermostプラグインは、Mattermost上でのユーザーのアクションに応じて実行される処理を記述できる
  - [**MessageWillBePosted**](https://developers.mattermost.com/extend/plugins/server/reference/#Hooks.MessageWillBePosted): 投稿されたメッセージがDBに保存される前に実行される処理
  - [**UserHasJoinedChannel**](https://developers.mattermost.com/extend/plugins/server/reference/#Hooks.UserHasJoinedChannel): ユーザーがチャンネルに参加した時に実行される処理
  - => <span style="color: #dc2626">**ユーザーが多いインスタンスでの負荷が気になる**</span>
- Mattermost Webapp 側のプラグインでは、処理をミスると画面全体がホワイトアウトする
  - => <span style="color: #dc2626">**ユーザーへの影響が大きいため、導入を躊躇する**</span>
- ユニットテストでは Mattermost と組み合わせたときの動作を確認できない

## E2E テストを書きたい
- Mattermostと組み合わせた場合の自動テストを書いておきたい
  - リグレッションを避けるため
  - パフォーマンスへの影響を計測するため

<Footer class="abs-br" />

---

## Why?

### Target Plugin

* [kaakaa/mattermost-plugin-unreads](https://github.com/kaakaa/mattermost-plugin-unreads)
  * Slackで言う `All unreads` の機能

![](/20210605_cypress/mattermost-plugin-unreads.gif)

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/mattermost-plugin-unreads-arch.dio.png
---

## Why E2E Testing?

### Target Plugin

* [kaakaa/mattermost-plugin-unreads](https://github.com/kaakaa/mattermost-plugin-unreads)
  * Slackで言う `All unreads` の機能
  * [mattermost-redux](https://github.com/mattermost/mattermost-redux)を使ってStoreのPostにアクセス
  * Mattermost Plugin WebApp API の [registerRightHandSidebarComponent](https://developers.mattermost.com/extend/plugins/webapp/reference/#registerRightHandSidebarComponent)でレンダリング
* JestでSnapshot Testはできるが、**Mattermostと組み合わせて**テストしたい

<Footer class="abs-br" />

---

## Why E2E Testing?

### Cypress in Mattermot project

<div grid="~ cols-2 gap-4">
<div>

* Mattermostでは**Cypress**でE2Eテストを書いている
  * たまに **E2E Test Automation Hackfest** と題して Cypress のテストのコントリビューションを集めている

* いくつかのプラグインでは、Cypress を使った E2E テストを書いている
  * [mattermost/mattermost-incident-collaboration](https://github.com/mattermost/mattermost-incident-collaboration)
  * [mattermost/mattermost-plugin-apps](https://github.com/mattermost/mattermost-plugin-apps)

</div>

<div>
<img src="/20210605_cypress/mm-e2e-hackfest.png"/>
</div>
</div>

<div style="margin-top:40px"></div>

## Cypress で Mattermost プラグインのテストはどう書く？

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# What is Cypress?

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress.png
---

## Cypress

- Web アプリ向け? の E2E Testing Framework
  - Selenium的なモノ? 
- 最近のデファクトスタンダートな雰囲気

<Footer class="abs-br" />

---

## Cypress

### Compare - NPM Trends

<img src='/20210605_cypress/npm-trends.png' style="width: 70%;"/>

- 2021 年から`Cypress`, `Puppeteer` > `Selenium`
- `Playwright`は`Puppeteer`の牙城を崩せておらず

<Footer class="abs-br" />

---

## Cypress

### Compare - GitHub

![](/20210605_cypress/github-compare.png)

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# How to run Cypress?

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-app.png
---

## Cypress

### Setup

```bash
# Install
$ npm i cypress

# Open DesktopApp
$ node_modules/.bin/cypress open
```

* **cypress open** でテスト管理用デスクトップアプリが開く
* spec ファイルをクリックするとテスト実行
* specファイル追加・修正を自動で反映
* 右上メニューから起動ブラウザを選択可能

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-runner.png
---

## Cypress

### Test Runner

* specファイルをクリックすると、テスト用のブラウザが起動しテストが実行される
* **`cy`** オブジェクト
```js
/// <reference types="cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  it('github finds https://github.com/', () => {
    cy.get('input.gLFyf.gsfi')
      .type('github{enter}');

    cy.get('a[href="https://github.com/"]')
      .should(($anchor) => {
        expect($anchor).to.have.length(1);
      });
  });
});
```

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-testcode-1.png
---

## Cypress

### Test Code

```js {4-6}
/// <reference types="cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  it('github finds https://github.com/', () => {
    cy.get('input.gLFyf.gsfi')
      .type('github{enter}');

    cy.get('a[href="https://github.com/"]')
      .should(($anchor) => {
        expect($anchor).to.have.length(1);
      });
  });
});
```

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-testcode-2.png
---

## Cypress

### Test Code

```js {9-10}
/// <reference types="cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  it('github finds https://github.com/', () => {
    cy.get('input.gLFyf.gsfi')
      .type('github{enter}');

    cy.get('a[href="https://github.com/"]')
      .should(($anchor) => {
        expect($anchor).to.have.length(1);
      });
  });
});
```

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-testcode-3.png
---

## Cypress

### Test Code

```js {9-10}
/// <reference types="cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  it('github finds https://github.com/', () => {
    cy.get('input.gLFyf.gsfi')
      .type('github{enter}');

    cy.get('a[href="https://github.com/"]')
      .should(($anchor) => {
        expect($anchor).to.have.length(1);
      });
  });
});
```

<Footer class="abs-br" />

---
layout: image-right
image: /20210605_cypress/cypress-testcode-4.png
---

## Cypress

### Test Code

```js {12-15}
/// <reference types="cypress" />

context('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });

  it('github finds https://github.com/', () => {
    cy.get('input.gLFyf.gsfi')
      .type('github{enter}');

    cy.get('a[href="https://github.com/"]')
      .should(($anchor) => {
        expect($anchor).to.have.length(1);
      });
  });
});
```

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# Cypress with Mattermost

<Footer class="abs-br" />

---

## Cypress with Mattermost

### Reference Project

- すでに Cypress でテストが書かれているプロジェクトがあるので、それらを真似っこ
  - [mattermost/mattermost-webapp](https://github.com/mattermost/mattermost-webapp)
    - Mattermost Webapp 側本体 (React/Redux)
  - [mattermost/mattermost-incident-collaboration](https://github.com/mattermost/mattermost-incident-collaboration)
    - Mattermost プラグイン
  - [mattermost/mattermost-plugin-apps](https://github.com/mattermost/mattermost-plugin-apps)
    - Mattermost プラグイン

<Footer class="abs-br" />

---

## Cypress with Mattermost

### Important files

- Mattermost のテストを書く上で重要な要素

```bash {7,9,13,15}
e2e/
├── cypress/
│   ├── fixtures/
│   │   └── example.json
│   ├── integration/
│   │   └── unread_spec.ts
│   ├── plugins/
│   │   └── index.ts
│   ├── support/
│   │   ├── index.d.ts
│   │   └── index.ts
│   └── tsconfig.json
├── cypress.json
├── package-lock.json
└── package.json
```

<Footer class="abs-br" />

---

## Cypress with Mattermost

### [Plugins file](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Plugins-file)

- ブラウザテストの裏で Node プロセスを実行可能に
  - 例: ブラウザテスト中、別のチャンネルへの投稿を REST API 経由で実行

```ts {2,5-9}
// mattermost-webapp/e2e/cypress/plugins/post_message_as.js
const axios = require('axios');
module.exports = async ({sender, message, channelId, rootId, createAt = 0, baseUrl}) => {
    try {
        response = await axios({
          url: `${baseUrl}/api/v4/posts`, method: 'post',
          headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', Cookie: cookieString},
          data: { channel_id: channelId, message, type: '', create_at: createAt, parent_id: rootId, root_id: rootId},
        });
    ...
```

```ts {2,5}
// mattermost-webapp/e2e/cypress/plugins/index.js
const postMessageAs = require('./post_message_as');
...
module.exports = (on, config) => {
  on('task', {..., postMessageAs, ...});  // cy.task('postMessageAs', ...)
  ...
}
```

- その他にも Hooks 的な処理を記述することもできる

<Footer class="abs-br" />

---

## Cypress with Mattermost

### [Support file](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file)

- Spec 実行前に実行されるファイル

```ts {2,5-7}
// mattermost-webapp/e2e/cypress/support/task_command.js
Cypress.Commands.add('postMessageAs', ({sender, message, channelId, rootId, createAt}) => {
    const baseUrl = Cypress.config('baseUrl');

    return cy.task(
      'postMessageAs',
      {sender, message, channelId, rootId, createAt, baseUrl}
    ).then(({status, data}) => {
      ...
});
```

```ts
// 使用例
cy.postMessageAs({
  sender: user,
  message: `test`,
  channelId: townsquareChannelId,
});
```

- 共通処理などを、各 Spec ファイルで`import`しなくても良くなる

<Footer class="abs-br" />

---

## Cypress with Mattermost

### [Support file](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file)

いくつかのAPI呼び出しをまとめた便利メソッドも用意できる
```ts
// mattermost-webapp/e2e/cypress/support/api/setup.js
Cypress.Commands.add(
  'apiInitSetup',
  ({
    teamPrefix = { name: 'team', displayName: 'Team' },
    channelPrefix = { name: 'channel', displayName: 'Channel' },
    ...
  } = {}) => {
    return cy.apiCreateTeam(teamPrefix.name, teamPrefix.displayName)
      .then(({ team }) => {
        // # Add public channel
        return cy.apiCreateChannel(team.id,　channelPrefix.name,　channelPrefix.displayName)
          .then(({ channel }) => {
            return cy.apiCreateUser({prefix:　userPrefix || (promoteNewUserAsAdmin ? 'admin' : 'user')})
              .then(({ user }) => {
                if (promoteNewUserAsAdmin) {
                  cy.apiPatchUserRoles(user.id, ['system_admin', 'system_user']);
                }
                return cy.apiAddUserToTeam(team.id, user.id).then(() => {
                  return cy.apiAddUserToChannel(channel.id, user.id)
                  ...
```

<Footer class="abs-br" />

---

## Cypress with Mattermost
### Depends on plugins/supports of mattermost-webapp
Mattermost WebAppの Plugins / Supports をimportして使うこともできそう

```ts
// e2e/cypress/plugins/index.ts
module.exports = require('mattermost-webapp/e2e/cypress/plugins');
```

```ts
// e2e/cypress/supports/index.ts
import 'mattermost-webapp/e2e/cypress/support'
```

ただし、mattermost-webappはNPM化されていないため...
* 依存ライブラリに何が必要なのかわからない
* supportsで読み込まれるconfig項目が分からない

```json
// package.json
...
  "devDependencies": {
    ...
    "mattermost-webapp": "github:mattermost/mattermost-webapp#76c6005c24f1cfa5a761912ebf60e41ae058b8c3",
    ...
  }
```

<Footer class="abs-br" />

---

## Cypress with Mattermost

### cypress.json | package.json

```json
// cypress.json
{
    "baseUrl": "http://localhost:8065",
    "viewportWidth": 1300,
    "defaultCommandTimeout": 20000,
    "taskTimeout": 20000,
    "pluginID": "com.mattermost.apps",
    "pluginFile": "com.mattermost.apps-0.1.0.tar.gz",
    "video": false,
    "ignoreTestFiles": "**/node_modules/**/*",
    "integrationFolder": "..",
    "testFiles": "**/*_spec.{js,ts}",
    "env": {
        "adminUsername": "admin",
        "adminPassword": "admin%%123",
        "ciBaseUrl": "",
        "dbClient": "mysql",
        "dbConnection": "mmuser:mostest@tcp(localhost:3306)/mattermost_test?charset...",
        "enableApplitools": false,
        ...
```

- 指定しないと動かない要素がいっぱいあるけど、どれが必須か分からない...

<Footer class="abs-br" />

---

## Cypress with Mattermost

### cypress.json | package.json

```json
// package.json
  ...
  "devDependencies": {
    "@testing-library/cypress": "^7.0.6",
    "@types/node": "^15.0.2",
    "@types/testing-library__cypress": "^5.0.8",
    "axios": "0.20.0",
    "cypress": "^7.2.0",
    "cypress-file-upload": "4.1.1",
    "cypress-plugin-tab": "1.0.5",
    "cypress-wait-until": "1.7.1",
    "deepmerge": "4.2.2",
    "lodash.mapkeys": "4.6.0",
    "lodash.xor": "4.5.0",
    "mattermost-redux": "5.33.1",
    "mattermost-webapp": "github:mattermost/mattermost-webapp#76c6005c24f1cfa5a761912ebf60e41ae058b8c3",
    "mochawesome": "6.1.1"
  }
  ...
```

- 依存に追加しないと動かないモジュールがいっぱいあるけど、どれが必須か分からない...

<Footer class="abs-br" />

---

## Cypress with Mattermost

### cypress.json | package.json

https://github.com/mattermost/mattermost-redux
> Mattermost Redux is now located at mattermost/mattermost-webapp
> This repository is being left open for the time being while _**we set up proper monorepo infrastructure to be able to release mattermost-redux from there**_, but it will be archived once that has been set up.
>
> New releases of mattermost-redux will be on hold while that is done, but feel free to continue using existing versions.

monorepo構成になってcypress周りのコードも利用しやすくなることを期待  
(モジュールとして利用可能になるのはreduxだけかも...)

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# Testing Mattermost Plugin

<Footer class="abs-br" />

---

## Testing Mattermost Plugin

```ts {4,26|5-14|15-20|3,21-25}
// e2e/cypress/integration/unread_spec.ts
describe('subscribe unreads post', () => {
    let testTeam, testChannel, testUser;
    before(() => {
        const newSettings = {
            PluginSettings: {
                Enable: true,
            },
            ServiceSettings: {
                EnableTesting: true,
                EnableDeveloper: true,
            },
        };
        cy.apiUpdateConfig(newSettings);
        cy.apiUploadAndEnablePlugin({
          id: 'com.github.kaakaa.mattermost-plugin-unreads',
          version: '0.1.0',
          // e2e/cypress/fixtures/com.github.kaakaa.mattermost-plugin-unreads-0.1.0.tar.gz
          filename: 'com.github.kaakaa.mattermost-plugin-unreads-0.1.0.tar.gz'
        });
        cy.apiInitSetup().then(({team, channel, user}) => {
            testTeam = team;
            testChannel = channel;
            testUser = user;
        })
    });
    ...
```

<Footer class="abs-br" />

---

## Testing Mattermost Plugin

```ts {2,9|3-4|5-6|7-8|12-13|14-17}
    ...
    beforeEach(() => {
        cy.apiAdminLogin();
        cy.visit(`/${testTeam.name}/channels/town-square`);
        // wait to render
        cy.get('#postListContent').should('be.visible');
        // Open RHS
        cy.get('.row.main i.icon__plugin-unreads').should('be.visible').and('exist').click();
    });

    it('show an unread message', () => {
        const message = '1: test message';
        cy.postMessageAs({sender: testUser, message: message, channelId: testChannel.id})
            .then(({id}) => {
                cy.get(`.plugin-unreads-channel__${testChannel.id}`).should('have.length', 1);
                cy.get(`.plugin-unreads-post__${id} .plugin-unreads-post__content p`).should('have.text', message);
            });
    });
    ...
```

<Footer class="abs-br" />

---
layout: image
image: /20210605_cypress/plugin-e2e-test.gif
---

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# Performance Monitoring

<Footer class="abs-br" />

---

## Performance Monitoring

Mattermost Pluginのパフォーマンスを測れそうなもの
* **pprof** (server)
* **cAdvisor** (container)
* **Chrome DevTools Protocol** (browser)

<Footer class="abs-br" />

---

## Performance Monitoring

### Server profile

* pprof
  * Goプロセス (HTTPサーバー含む) のプロファイリングをするGo言語の機能
  * v5.34 (2021-04-14リリース)から、Team Editionでも利用できるようになった
    * https://docs.mattermost.com/administration/changelog.html#release-v5-34-feature-release
  * **今回のプラグインはServer側の機能追加をしないので使用しない**
  * また、動的に推移を見れないのでpprof単体だと計測は難しい？

<div grid="~ cols-3 gap-4">
<div>
<img src="/20210605_cypress/pprof-graph.png"/>
</div>
<div>
<img src="/20210605_cypress/pprof-framegraph.png"/>
</div>
</div>

<Footer class="abs-br" />

----

## Performance Monitoring

### Container profile

* cAdvisor?
  * Mattermost開発環境は、コンテナを使って環境を構築する
  * ただ、Cypressテストで**使われるコンテナはMySQLだけ**で、さらにcAdvisorでは**Disk I/Oは取れなさそう**なので、あまり意味はないかも
    * Mattermost ServerプロセスはただのGoプロセスとして実行されている


<div grid="~ cols-3 gap-4" style="height: 300px">
<div style="height: 250px;">
<img src="/20210605_cypress/cadvisor.png" style="height: 250px; object-fit: cover; object-position: 0% 0%;"/>
</div>
<div style="height: 250px;">
<img src="/20210605_cypress/cadvisor-mysql.png" style="height: 250px; object-fit: cover; object-position: 0% 0%;"/>
</div>
</div>

<Footer class="abs-br" />

---

## Performance Monitoring
### Browser profile
* [Using Cypress and Google Lighthouse for Performance Testing \| Applitools](https://applitools.com/blog/using-cypress-google-lighthouse-performance-testing/) ?
  * > Lighthouseとはウェブページの品質改善の指針を「パフォーマンス」、「PWA」、「アクセシビリティ」、「ベストプラクティス」、「SEO」点でチェックしてくれるツール。
    * [Lighthouseの計測結果を見ていく \- Qiita](https://qiita.com/nightyknite/items/22d9f818dbab9bf171a3)
  * **Mattermost本体に対して使うようなツール？**
* [Cypress \- Chrome dev tools profiling stats\. · Issue \#7894 · cypress\-io/cypress](https://github.com/cypress-io/cypress/issues/7894)
  * > You can access the **Chrome DevTools Protocol** like below if you need something more specific.
  * ```ts
    Cypress.automation("remote:debugger:protocol", {
    })
    ```
  * **Devtools Protocol ?🤔**

<Footer class="abs-br" />

---

[DevTools Protocolを使ってChromeを操作＆CSSカバレッジを取得する \- Qiita](https://qiita.com/kozy4324/items/aa38a41685399fc330f7)

<div grid="~ cols-1fr">
<img src="/20210605_cypress/about-devtools-protocol.png" style="height:480px"/>
</div>

<Footer class="abs-br" />

---

## Performance Monitoring
### Cypress with Chrome DevTools Protocol

* [Chrome DevTools Protocol \- Performance domain](https://chromedevtools.github.io/devtools-protocol/tot/Performance/#method-getMetrics)
  * > Performance.getMetrics: Retrieve current values of run-time metrics.

```ts
describe('metrics', () => {
    it('test', () => {
        Cypress.automation('remote:debugger:protocol', {
            command: 'Performance.getMetrics'
        }).then((val) => cy.log(val));
    })
})
```

```json
{
  "metrics": [
    ...
    {"name": "JSHeapUsedSize", "value": 62996760},
    {"name": "JSHeapTotalSize","value": 91262976}
  ]
}
```

* Chromeのメモリとか取れるけど、スナップショットなので**推移を見る仕組み**を作る必要がありそう
  * やってない

<Footer class="abs-br" />

---

# おまけ

## [GitHub Actions \| Cypress Documentation](https://docs.cypress.io/guides/continuous-integration/github-actions#Worker-Jobs)

* > Basic Setup
  * > Run the Cypress tests within our GitHub repository within Electron.
* > Testing in Chrome and Firefox with Cypress Docker Images
* > Using the Cypress Dashboard with GitHub Actions

## Cypress with Mattermost in GitHub Actions?
* [サービスコンテナについて \- GitHub Docs](https://docs.github.com/ja/actions/guides/about-service-containers)
  * > サービスコンテナは、ワークフロー中でアプリケーションをテストもしくは運用するのに必要になるかもしれないサービスをホストするための、シンプルでポータブルな方法を提供するDockerコンテナです。 たとえば、ワークフローでデータベースやメモリキャッシュへのアクセスを必要とする結合テストを実行する必要があるかもしれません。
* [mattermost/mattermost\-preview](https://hub.docker.com/r/mattermost/mattermost-preview)
  * mattermost-previewのイメージが更新されなくなってきてる気がするので微妙かも

<Footer class="abs-br" />

---

# Wrap up

- ✏ Mattermostでも採用されているE2E Testing frameworkである **Cypress** について調べた
- 📈 DL数は**Seleniumを超えており**、WebアプリのE2Eテストフレームワークとしてはデファクト
- 🆒 Mattermost本体ではCypressの **Plugin / Support** を利用してテストを簡潔(?)に記述している、
  - Mattermost本体のPlugin/Supportは(一応)ライブラリとして使用することもできる
- 〽 Mattermost Plugin のパフォーマンスは **pprof(server)** と **Chrome Devtools Protocol** で測定可能？
  - どちらもスナップショットを取得するツールなので、推移を見る仕組みが必要

# Impression

- Cypress デスクトップアプリが使いやすかった
  - ファイルを更新すると自動で再読み込み・テスト再実行される
- Mattermost Pluginのテストも、一度書き方を覚えればあとは数増やすだけの作業
  - mattermost-webappのcypressコードがモジュール化されると最高
- **HTMLのclass/id設計超重要**
  - これがないとテストできない

<Footer class="abs-br" />

---
layout: center
class: text-center
---

# 終

<div class="abs-br bottom-1rem animate-bounce">↓ 正解: Vue Component ↓</div>

<Footer class="abs-br" />