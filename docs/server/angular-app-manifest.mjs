
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
    'index.csr.html': {size: 57658, hash: '5251a54c095386f6de24c04d695744dc5706fd026c42e13fc0b9e47f2fcc82de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: 'c4d40755dc097bdb5eb3621262442a50a364c97a1747c246bb6a20e6fabd0d98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 79870, hash: '0713cfd6905e2313cd401d624dab405efc1e071b3ae1cde372a36b75985300b5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 86765, hash: '67771d109160a6b7473d30c0ea0de62e73b0c0255e1a69831c56161144922cb4', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78220, hash: '8059e90842bf1b3476c4f0019076956997d1d5ab11686fb96eedc0984f1cc591', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 83425, hash: 'bcc5fa8695c3a983a83f244dd302224d23a56c3eaffd5388b6ff4c405ee25e16', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 83076, hash: 'd33e0eb7c269cd65fcdd05001cb85c83d1988232df790ef8fc7cd57ff640f493', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-3QV4KLV3.css': {size: 139109, hash: 'qaujz0EUM8w', text: () => import('./assets-chunks/styles-3QV4KLV3_css.mjs').then(m => m.default)}
  },
};
