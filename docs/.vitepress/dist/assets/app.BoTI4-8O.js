import{R as i}from"./chunks/theme.CP6naE_u.js";import{aM as o,aT as u,aU as l,aV as c,aW as f,aX as d,aY as m,aZ as h,a_ as g,a$ as A,b0 as b,m as w,ay as y,o as P,w as v,b1 as C,b2 as R,b3 as T,ah as E}from"./chunks/framework.BPCcY0Je.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),S=w({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{v(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),R(),T(),s.setup&&s.setup(),()=>E(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return g(S)}function V(){let e=o,a;return A(t=>{let n=b(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{_ as createApp};
