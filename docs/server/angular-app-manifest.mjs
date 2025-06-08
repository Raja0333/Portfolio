
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/project"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 56634, hash: '6d78efbc0190b480332d0f43119010361fafc0ff1210ff54d04956ecf7a3a8d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '25f16c2eaa4b6293fb05bca8c54c4cfa01223449622dab4e918d11faa7dec3a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 77154, hash: '5100308c00099120c4b63e12147d9682d4d7d8b19ae1d365cc8cf06d48da21c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 78804, hash: '6980f50619a54fecd6d80828639a98838aedcbe34e55761b5143192c2fe34b08', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82009, hash: '0b78a76aa366e3001a0d91aed9e68fa46c610d271f7fb0277a524db2484d8210', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 82367, hash: 'b76ecd34fffe92beab873cf1e000ed9e32738bc0edc61d22cd114bd8217135c7', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 85775, hash: 'a7a3c6b93f03a521afbf99c8c30bdb18b748998c0a5dfa7c38928b284cb51ef7', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-QT24PLCF.css': {size: 136895, hash: 'jBaf6gAjE3g', text: () => import('./assets-chunks/styles-QT24PLCF_css.mjs').then(m => m.default)}
  },
};
