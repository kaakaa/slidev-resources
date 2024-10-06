import {copyFileSync, readFileSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {globSync} from 'glob';
import Handlebars from 'handlebars';

// tsx scripts/update-index-pages.ts [gh-pages.dir]
const args = process.argv.slice(2);
let dir = args[0] || 'gh-pages/';
dir[dir.length - 1] === '/' ? dir : dir + '/';

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

const slidePaths = globSync(`${dir}/*/index.html`);
const entries = slidePaths
    .map(path => {
        const elems = path.split('/');
        const name = elems[1];
        const rel = `${name}/${elems[2]}`

        const gitDate = execSync(`git -C ${dir} log -1 --format=%cI ${rel}`).toString().trim();
        const ret = { path, name, date: gitDate.split('T')[0], dateObj: new Date(gitDate)};
        console.log(ret); // debug
        return ret;
    })
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

/* update index.html */
let indexHtml = readFileSync('scripts/templates/tmpl_index.html', 'utf8');
const template = Handlebars.compile(indexHtml)
writeFileSync(`${dir}/index.html`, template({entries}), 'utf-8');

/* copy 404.png */
copyFileSync('scripts/templates/404.png', `${dir}/404.png`);
