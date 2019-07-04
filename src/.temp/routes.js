export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/venkatasubash/Documents/GitHub/new/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/venkatasubash/Documents/GitHub/new/src/pages/Index.vue")
  },
  {
    path: "/blog",
    component: () => import(/* webpackChunkName: "page--src--pages--blog--index-vue" */ "/Users/venkatasubash/Documents/GitHub/new/src/pages/blog/index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/venkatasubash/Documents/GitHub/new/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/venkatasubash/Documents/GitHub/new/node_modules/gridsome/app/pages/404.vue")
  }
]

