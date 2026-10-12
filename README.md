# xinyuan-yu.github.io

Personal academic website of Xinyuan Yu (MIT EAPS). Plain HTML + CSS, no build step.

| Page | File |
|---|---|
| Home (bio, links, news) | `index.html` |
| Research overview | `research.html` |
| Research detail pages | `research/*.html` |
| Publications | `publications.html` |
| Styles / scripts | `assets/css/site.css`, `assets/js/site.js` |

**Editing tips**
- Add a news item: copy an `<li>` inside `.news` in `index.html`.
- Add a paper: copy an `<article class="pub">` block in `publications.html`. Add `first-author` to the class to get the blue bar; set `data-topic` to `ozone` or `aq` so the filter buttons pick it up.
- Add a research theme: copy an `<a class="rcard">` block in `research.html` and a page in `research/`.
- The nav bar is repeated in each page; update all pages if you add a nav item (e.g. a CV link).

`.nojekyll` tells GitHub Pages to serve the files as-is.
