import {copyFileSync, readFileSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {globSync} from 'glob';
import Handlebars from 'handlebars';

// tsx scripts/update-index-pages.ts [gh-pages.dir]
const args = process.argv.slice(2);
let dir = args[0] || 'gh-pages/';
dir = dir.endsWith('/') ? dir : dir + '/';

/*
. (main branch)
├ gh-pages/ (gh-pages branch)
│ ├ example-slidev/
│ │ ├ index.html
│ │ ...
│ ├ 2024mmdd_slide/
│ │ ├ index.html
│ │ ...
│ ├ 404.png
│ └ index.html  <- this script will update this
├ pages.json/
...
*/

const slidePaths = globSync(`${dir}*/index.html`);
const entries = slidePaths
    .map(path => {
        // dir が何階層でも壊れないよう、dir からの相対で名前を取る
        const rel = path.slice(dir.length);   // '<name>/index.html'
        const name = rel.split('/')[0];

        // リリース時はビルド成果物を gh-pages にコピーしてから index を作り直すので、
        // 今回公開するスライドはまだ gh-pages の履歴に無い。その場合は現在時刻を使う。
        let gitDate = '';
        try {
            gitDate = execSync(`git -C ${dir} log -1 --format=%cI -- ${rel}`).toString().trim();
        } catch {
            /* not tracked yet */
        }
        const iso = gitDate || new Date().toISOString();
        const ret = { path, name, date: iso.split('T')[0], dateObj: new Date(iso)};
        console.log(ret); // debug
        return ret;
    })
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

/* update index.html */
let indexHtml = readFileSync('scripts/templates/tmpl_index.html', 'utf8');
const template = Handlebars.compile(indexHtml)
writeFileSync(
    `${dir}/index.html`,
    template({
        entries,
        'analyticsId': 'G-Q2M0L76QSW', // FIXME: parameterize
    }),
    'utf-8'
);

/* copy 404.png */
copyFileSync('scripts/templates/404.png', `${dir}/404.png`);
