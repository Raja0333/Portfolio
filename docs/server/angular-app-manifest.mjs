
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/project"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 56625, hash: 'caed97f7bc766c2dcfa4fe02affa16544bf2b62a7f387c27e64fc1433efcad0f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '0db0a903ddd6aa4c0262c75a80f31008eaebf14e36c365317e1e080ea24d64f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 78693, hash: 'a1938da177c06ddd827a347c3639f916a860b0c64179a5f9194b49babe581644', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 85588, hash: 'c93b91c64b6f998ff549230188584f5d8c3a328a265219157106d1351e901416', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81899, hash: '1d80c281411be9eb5bf830b39f37f2a2a366ce86b98851f062516720327f5767', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77043, hash: '3b70a2afa8fd284a63dfbe2ba3c79d4cfde7644dae668e9f096f7dd89ab818e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 82248, hash: 'e504a14f9c26dfb50a8f5cf3b4eb07c7c0e3110f4cd6d81f128ce6156f619d04', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-QT24PLCF.css': {size: 136895, hash: 'jBaf6gAjE3g', text: () => import('./assets-chunks/styles-QT24PLCF_css.mjs').then(m => m.default)}
  },
};
