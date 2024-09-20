import{Z as p,p as e,q as n,t as a,S as y,U as u,u as r,aS as c,F as h,a8 as k,T as i,ai as m}from"./chunks/framework.BPCcY0Je.js";const f={style:{"font-weight":"bold"}},v=JSON.parse('{"title":"分页","description":"","frontmatter":{"title":"分页"},"headers":[],"relativePath":"component/pagination.md","filePath":"component/pagination.md"}'),F={name:"component/pagination.md"},B=Object.assign(F,{setup(b){const d=p({itemData:[{name:"Props",data:[{parameter:"pageData",describe:"分页数据",type:"Object",default:"{}",mandatory:!1},{parameter:"paginationAlign",describe:"显示分页的对齐方式",type:"String",default:"left",mandatory:!1},{parameter:"pageSizes",describe:"显示分页数据多少条的选项",type:"Array",default:"[10, 20, 30, 40]",mandatory:!1},{parameter:"size",describe:"显示分页大小",type:"String",default:"default",mandatory:!1},{parameter:"layout",describe:"显示分页样式",type:"String",default:"total, prev, pager, next, jumper",mandatory:!1},{parameter:"nextText",describe:"显示下一页文本",type:"String",default:"",mandatory:!1},{parameter:"nextIcon",describe:"显示下一页图标",type:"String",default:"ArrowRight",mandatory:!1},{parameter:"prevText",describe:"显示上一页文本",type:"String",default:"",mandatory:!1},{parameter:"prevIcon",describe:"显示上一页图标",type:"String",default:"ArrowLeft",mandatory:!1},{parameter:"background",describe:"分页带背景",type:"Boolean",default:"false",mandatory:!1}]},{name:"PageData",data:[{parameter:"total",describe:"总数目",type:"Number",default:"0",mandatory:!1},{parameter:"pageNum",describe:"页数",type:"Number",default:"1",mandatory:!1},{parameter:"pageSize",describe:"每页数",type:"Number",default:"10",mandatory:!1}]},{name:"Event",data:[{parameter:"onReloadData",describe:"分页页数变化，回调函数",type:"Function",default:"",mandatory:!1}]}]});let E=p({total:120,pageSize:10,pageNum:2}),g=()=>{};return(D,s)=>{const o=m("pagination",!0);return e(),n("div",null,[s[1]||(s[1]=a("h1",{id:"分页文档",tabindex:"-1"},[y("分页文档 "),a("a",{class:"header-anchor",href:"#分页文档","aria-label":'Permalink to "分页文档"'},"​")],-1)),u(o,{pageData:r(E),background:!0,onOnReloadData:r(g)},null,8,["pageData","onOnReloadData"]),s[2]||(s[2]=c(`<details class="details custom-block"><summary>展开代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pagination</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pageData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pageData</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onReloadData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onReloadData</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pagination</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pageData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      total:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pageSize:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pageNum:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onReloadData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2>`,2)),(e(!0),n(h,null,k(d.itemData,l=>(e(),n("div",null,[a("div",f,i(l.name||""),1),a("table",null,[s[0]||(s[0]=a("tr",null,[a("th",{style:{width:"100px"}},"属性名"),a("th",{style:{width:"400px"}},"说明"),a("th",{style:{width:"40px"}},"类型"),a("th",{style:{width:"40px"}},"必填"),a("th",{style:{width:"88px"}},"默认值")],-1)),(e(!0),n(h,null,k(l.data,t=>(e(),n("tr",null,[a("td",null,i(t.parameter),1),a("td",null,i(t.describe),1),a("td",null,i(t.type),1),a("td",null,i(t.mandatory),1),a("td",null,i(t.default),1)]))),256))])]))),256))])}}});export{v as __pageData,B as default};
