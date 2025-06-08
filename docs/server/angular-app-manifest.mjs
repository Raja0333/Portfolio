
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
    'index.csr.html': {size: 57649, hash: '8bb31dd6e3ac2eece8ad8a9daa65eb3a06e9b3cf1c249ec1d0a95ee435f99d91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: 'f9bc82850f6d0d1d7a7f0dfa67faffb1f468500aa79a1569c3d50446b7c862e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 79771, hash: '17017e710f439f167116a0debfc00c28e831bb3812ce47c09c7d434b52d41587', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82977, hash: '97d23989c4fb41fdbfb59369aad4aad2752291deac62d92d0c56ef4dbd78a1e0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78121, hash: '18daccaa02175f408368f7cf663bf71ed2681ce4b6ac2b6971aaa38c3d1e5c2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 86666, hash: 'd75ba5273f3ba8ab3e7f770223a2f205ef541f6cbdde7f7f86bf70a177de96ce', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 83326, hash: 'f0826a7307ec8810f1c814813f48e15a0c12bc3cd6f82261d12b4f885a37bd3a', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-3QV4KLV3.css': {size: 139109, hash: 'qaujz0EUM8w', text: () => import('./assets-chunks/styles-3QV4KLV3_css.mjs').then(m => m.default)}
  },
};
