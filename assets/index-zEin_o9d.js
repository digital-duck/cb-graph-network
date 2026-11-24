(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const U={};function ne(e,t){U[e]=t}function ze(e){window.location.hash=e}function de(){var a,l;const e=window.location.hash.slice(1)||"/",t=e.match(/^\/domain\/([^?]+)/);if(t){(a=U["/domain/:id"])==null||a.call(U,{id:decodeURIComponent(t[1])});return}const[n,o]=e.split("?");(l=U[n])==null||l.call(U,Object.fromEntries(new URLSearchParams(o||"")))}function Se(){de()}function $e(){window.addEventListener("hashchange",de),de()}var T={_meta:{source:"en",languages:{en:{name:"English",status:"source"},zh:{name:"中文",status:"reviewed"}}},app:{title:{en:"ConceptBook",zh:"概念书"},tagline:{en:"Explore knowledge through concept graphs",zh:"通过概念图探索知识"}},nav:{about:{en:"About",zh:"关于"},settings:{en:"Settings",zh:"设置"},language:{en:"Language (interface and content)",zh:"语言（界面与内容）"}},loading:{en:"Loading…",zh:"加载中…"},home:{load_error:{en:"Could not load domains. {error}",zh:"无法加载领域列表。{error}"},filter:{subject:{en:"Subject",zh:"主题"},level:{en:"Level",zh:"级别"},all:{en:"All",zh:"全部"}}},tag:{},level:{intro:{en:"Intro",zh:"入门"},core:{en:"Core",zh:"核心"},college:{en:"College",zh:"大学"},research:{en:"Research",zh:"研究"}},card:{stats:{en:"{nodes} nodes · {edges} edges · {primitives} primitives",zh:"{nodes} 个节点 · {edges} 条边 · {primitives} 个基础概念"},explore:{en:"Explore Concept-Graph",zh:"探索概念图"},book_available:{en:"Book available",zh:"已有概念书"}},domain:{label:{en:"Domain",zh:"领域"},select:{en:"Select domain…",zh:"选择领域…"},load:{en:"Load",zh:"载入"},source:{en:"Source: {link} by {authors} ({license}).",zh:"来源：{link}，作者 {authors}（{license}）。"},drag_resize:{en:"Drag to resize",zh:"拖动调整大小"}},graph:{search_placeholder:{en:"Search node…",zh:"搜索节点…"},search:{en:"Search",zh:"搜索"},zoom_out:{en:"Zoom −",zh:"缩小"},zoom_out_title:{en:"Zoom out",zh:"缩小"},zoom_in:{en:"Zoom +",zh:"放大"},zoom_in_title:{en:"Zoom in",zh:"放大"},recenter:{en:"Re-Center",zh:"居中"},frame_title:{en:"{domain} concept graph",zh:"{domain} 概念图"},notes:{en:"Notes",zh:"笔记"},notes_clear:{en:"Clear",zh:"清空"},notes_export:{en:"Export",zh:"导出"},notes_placeholder:{en:`Type notes here
(auto-saved per node)`,zh:`在此输入笔记
（按节点自动保存）`},notes_none:{en:"no node selected",zh:"未选择节点"}},panel:{model:{en:"Model",zh:"模型"},level:{en:"Level",zh:"级别"},language:{en:"Content language",zh:"内容语言"},refresh:{en:"Refresh — re-check for content that just finished generating",zh:"刷新——重新检查刚生成完成的内容"},generate:{en:"Generate",zh:"生成"},generating:{en:"Generating…",zh:"生成中…"},retry:{en:"Retry",zh:"重试"},skip_cache:{en:"Skip cache",zh:"跳过缓存"},export_pdf:{en:"Export PDF",zh:"导出 PDF"},exporting:{en:"Exporting…",zh:"导出中…"},exported:{en:"Export PDF ✓",zh:"导出 PDF ✓"},export_error:{en:"Error",zh:"出错"},copy:{en:"Copy",zh:"复制"},copied:{en:"Copied!",zh:"已复制！"},hint_click:{en:"Click any node in the graph to see its details.",zh:"点击图中任意节点查看详情。"},no_path:{en:"No concepts found on this path.",zh:"此路径上没有找到概念。"},fallback_notice:{en:"{requested} not yet generated — showing {shown}",zh:"{requested}版尚未生成，正在显示{shown}版"},generate_in:{en:"Generate {lang}",zh:"生成{lang}版"},missing:{en:"⚠️ Missing content for model=<strong>{model}</strong>, level=<strong>{level}</strong>, language=<strong>{lang}</strong>. Click <strong>Generate</strong> to create it.",zh:"⚠️ 尚无内容：模型=<strong>{model}</strong>，级别=<strong>{level}</strong>，语言=<strong>{lang}</strong>。点击<strong>生成</strong>创建。"},log_done:{en:"✓ Done",zh:"✓ 完成"},log_dropped:{en:`✗ Connection to the API dropped or is unreachable.
  Check the API terminal for errors, or run: bash scripts/start-api.sh`,zh:`✗ 与 API 的连接中断或无法访问。
  请检查 API 终端的错误信息，或运行：bash scripts/start-api.sh`}},langname:{en:{en:"English",zh:"英文"},zh:{en:"Chinese",zh:"中文"},es:{en:"Spanish",zh:"西班牙文"},fr:{en:"French",zh:"法文"},de:{en:"German",zh:"德文"},ja:{en:"Japanese",zh:"日文"},ko:{en:"Korean",zh:"韩文"},pt:{en:"Portuguese",zh:"葡萄牙文"},ru:{en:"Russian",zh:"俄文"},ar:{en:"Arabic",zh:"阿拉伯文"},hi:{en:"Hindi",zh:"印地文"}},settings:{title:{en:"Settings",zh:"设置"},llm_section:{en:"SPL Adapter and Model Configuration",zh:"SPL 适配器与模型配置"},adapter:{en:"Adapter",zh:"适配器"},model:{en:"Model",zh:"模型"},api_key:{en:"API Key",zh:"API 密钥"},api_key_placeholder:{en:"Enter your API key",zh:"输入你的 API 密钥"},key_saved:{en:"A key is already saved — enter a new one to replace it, or leave blank to keep it.",zh:"已保存一个密钥——输入新密钥可替换，留空则保留原密钥。"},save:{en:"Save",zh:"保存"},current:{en:"Current: {llm}",zh:"当前：{llm}"},limits_section:{en:"SPL Execution Limits",zh:"SPL 执行限制"},while_max_iter:{en:"While Max Iterations",zh:"循环最大迭代次数"},while_max_iter_title:{en:"SPL_WHILE_MAX_ITER — max loop iterations before abort (default 15).",zh:"SPL_WHILE_MAX_ITER——中止前的最大循环迭代次数（默认 15）。"},max_llm_calls:{en:"Max LLM Calls",zh:"最大 LLM 调用次数"},max_llm_calls_title:{en:"SPL_MAX_LLM_CALLS — max LLM GENERATE calls per workflow run.",zh:"SPL_MAX_LLM_CALLS——每次工作流运行的最大 LLM GENERATE 调用次数。"},ollama_unavailable:{en:"(ollama not available)",zh:"（ollama 不可用）"},api_unreachable_hint:{en:"API not reachable — run the backend to change settings",zh:"无法连接 API——请先运行后端再修改设置"},saved:{en:"Saved",zh:"已保存"},save_failed:{en:"Save failed",zh:"保存失败"},api_unreachable:{en:"API not reachable",zh:"无法连接 API"},invalid_limits:{en:"Enter valid integers ≥ 1",zh:"请输入 ≥ 1 的整数"}},about:{body:{en:`<h1>About concept-book</h1>
<p>
  <strong>concept-book</strong> is an open portal that lets any learner explore a knowledge
  domain through its <em>concept graph</em> — a directed acyclic graph (DAG) where nodes
  are concepts (primitive, concept, application) and edges are prerequisite relationships.
</p>

<h2>How to use it</h2>
<ol>
  <li>Pick a domain from the home page</li>
  <li>Click any concept node in the interactive graph</li>
  <li>The right panel lists the concepts on that node's prerequisite path — the ones to master first</li>
  <li>Read the concept-book section for each concept in the path</li>
</ol>

<h2>The content engine</h2>
<p>
  All domain graphs and concept-book text are generated by
  <a href="https://github.com/digital-duck/SPL.py" target="_blank" rel="noopener">SPL.py</a>
  — a structured programming language for LLM-driven content generation with math verification.
  concept-book is the web-app layer that hosts and presents what SPL.py produces.
</p>

<h2>Open source</h2>
<p>
  concept-book is open source under the Apache 2.0 license.
  Source and contribution guide at
  <a href="https://github.com/digital-duck/concept-book" target="_blank" rel="noopener">github.com/digital-duck/concept-book</a>.
</p>

<h2>The founding use-case: Chinese Characters</h2>
<p>
  Chinese characters share the same structure as chemical elements — a small set of
  elemental radicals (primitives) combine to form hundreds of compound characters.
  Learning the ~12 elementals unlocks the ability to decode characters by structure alone.
  The concept graph makes that derivation visible and navigable. See
  <a href="https://github.com/digital-duck/cb-zinets" target="_blank" rel="noopener">cb-zinets</a>
  — a concept-book fully built out around this founding use-case — if you'd like to dig deeper.
</p>

<h2>Source material</h2>
<p>
  The concept graphs in this app are derived from
  <a href="https://www.distributed-systems.net/index.php/books/gtcn/" target="_blank" rel="noopener">Graph Theory and Complex Networks: An Introduction</a>
  by Maarten van Steen (freely available textbook PDF; not OpenStax / not CC BY).
  The concept graphs are a companion learning aid extracted from this material and are not a reproduction of the original text.
</p>
`,zh:`<h1>关于 concept-book</h1>
<p>
  <strong>concept-book</strong> 是一个开放的学习门户：任何学习者都可以通过<em>概念图</em>探索一个知识领域。
  概念图是一张有向无环图（DAG），节点是概念（基础概念、概念、应用），边是先修关系。
</p>

<h2>使用方法</h2>
<ol>
  <li>在首页选择一个领域</li>
  <li>点击交互式概念图中的任意节点</li>
  <li>右侧面板列出该节点先修路径上的概念——也就是需要先掌握的内容</li>
  <li>逐一阅读路径上每个概念的概念书章节</li>
</ol>

<h2>内容引擎</h2>
<p>
  所有领域概念图和概念书文本均由
  <a href="https://github.com/digital-duck/SPL.py" target="_blank" rel="noopener">SPL.py</a>
  生成——一种用于大语言模型驱动内容生成、并带有数学校验的结构化编程语言。
  concept-book 是承载和呈现 SPL.py 产出的网页应用层。
</p>

<h2>开源</h2>
<p>
  concept-book 以 Apache 2.0 许可证开源。源代码与贡献指南见
  <a href="https://github.com/digital-duck/concept-book" target="_blank" rel="noopener">github.com/digital-duck/concept-book</a>。
</p>

<h2>缘起：汉字</h2>
<p>
  汉字与化学元素结构相同——少量基本部件（基础概念）组合成数以百计的合体字。
  掌握约 12 个基本部件，就能仅凭结构拆解汉字。概念图让这种推导过程清晰可见、便于浏览。
  如想深入了解，请看
  <a href="https://github.com/digital-duck/cb-zinets" target="_blank" rel="noopener">cb-zinets</a>
  ——一个围绕这一缘起用例完整构建的概念书。
</p>

<h2>原始资料</h2>
<p>
  本应用中的概念图源自
  <a href="https://www.distributed-systems.net/index.php/books/gtcn/" target="_blank" rel="noopener">《图论与复杂网络：导论》</a>
  ，作者 Maarten van Steen（免费提供的教材 PDF；非 OpenStax / 非 CC BY 协议）。
  概念图是从原书中提炼的配套学习辅助材料，并非对原文的复制。
</p>
`}},book:{book:{en:"Concept Book",zh:"概念书"},contents:{en:"Contents",zh:"目录"},payoff:{en:"Payoff",zh:"学以致用"}}};T._meta;T.app;T.nav;T.loading;T.home;T.tag;T.level;T.card;T.domain;T.graph;T.panel;T.langname;T.settings;T.about;T.book;const Ne={showMachineLocales:!1};var ve;const ae=((ve=T._meta)==null?void 0:ve.source)||"en";function ye(e,t,n){for(const[o,a]of Object.entries(e)){const l=t?`${t}.${o}`:o;Object.values(a).every(s=>typeof s=="string")?n[l]=a:ye(a,l,n)}return n}const Me=new Set(["machine","draft"]),J={},V=[];function Ie(e){const{_meta:t={},...n}=e;for(const o of Object.keys(J))delete J[o];ye(n,"",J),V.splice(0,V.length,...Object.entries(t.languages||{en:{name:"English"}}).filter(([,{status:o}])=>!Me.has(o)||Ne.showMachineLocales).map(([o,{name:a}])=>({code:o,label:a})))}Ie(T);function be(){try{return localStorage.getItem("cb-lang")}catch{return null}}let F=/^[a-z]{2,3}(-[A-Za-z0-9]+)?$/.test(be()||"")?be():ae;document.documentElement.lang=F;function Ae(){return V.some(e=>e.code===F)?F:ae}function m(e,t){const n=J[e],o=(n==null?void 0:n[Ae()])??(n==null?void 0:n[ae])??e;return t?o.replace(/\{(\w+)\}/g,(a,l)=>l in t?t[l]:a):o}function ke(e,t=""){if(e){const n=e[F]||e[ae]||Object.values(e).find(Boolean);if(n)return n}return t}function Pe(e){if(e!==F){F=e;try{localStorage.setItem("cb-lang",e)}catch{}document.documentElement.lang=e,window.dispatchEvent(new CustomEvent("cb:localeChanged",{detail:{lang:e}}))}}function pe(){return F}function Ce(e){return J[`tag.${e}`]?m(`tag.${e}`):e}function u(e,t,{attr:n="textContent",vars:o}={}){const a=e._i18n||(e._i18n={});return a[n]={key:t,vars:o},e.setAttribute("data-i18n",""),Ee(e,n,t,o),e}function Ee(e,t,n,o){const a=typeof n=="function"?n():m(n,o);t==="textContent"?e.textContent=a:t==="innerHTML"?e.innerHTML=a:e.setAttribute(t,a)}function Te(e){for(const t of["","title","placeholder"]){const n=t?`data-t-${t}`:"data-t";e.querySelectorAll(`[${n}]`).forEach(o=>u(o,o.getAttribute(n),t?{attr:t}:{}))}return e}function Oe(e=document){e.querySelectorAll("[data-i18n]").forEach(t=>{for(const[n,{key:o,vars:a}]of Object.entries(t._i18n||{}))Ee(t,n,o,a)})}let Z=null;function Re(){Z=null}async function ue(){if(Z)return Z;const e=await fetch("/cb-graph-network/domains/catalog.json");if(!e.ok)throw new Error(`Failed to load catalog: ${e.status}`);return Z=await e.json(),Z}function ee(e,t){const n={en:e==null?void 0:e[t]};for(const[o,a]of Object.entries((e==null?void 0:e.i18n)||{}))a!=null&&a[t]&&(n[o]=a[t]);return ke(n,(e==null?void 0:e[t])||(e==null?void 0:e.id)||"")}function Y(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function qe(e){const t=document.createElement("article");t.className="cb-card";const n=(e.tags||[]).map(o=>`<span class="cb-tag" data-tag="${Y(o)}">${Y(Ce(o))}</span>`).join("");return t.innerHTML=`
    <div class="cb-card__header">
      <h2 class="cb-card__title">${Y(ee(e,"name"))}</h2>
      <div class="cb-card__tags">${n}</div>
    </div>
    <p class="cb-card__stats">${m("card.stats",{nodes:e.nodes,edges:e.edges,primitives:e.primitives})}</p>
    <p class="cb-card__desc">${Y(ee(e,"description"))}</p>
    <div class="cb-card__actions">
      <button class="cb-btn cb-btn--primary js-explore" ${e.has_navigator?"":"disabled"}>
        ${m("card.explore")}
      </button>
      <span class="cb-book-indicator" title="${e.has_book?m("card.book_available"):""}">${e.has_book?"📖":""}</span>
    </div>
  `,t.querySelector(".js-explore").addEventListener("click",()=>{ze(`/domain/${e.id}`)}),t}const Q=[{code:"en",label:"English"},{code:"zh",label:"中文 (Chinese)"},{code:"es",label:"Español (Spanish)"},{code:"fr",label:"Français (French)"},{code:"de",label:"Deutsch (German)"},{code:"ja",label:"日本語 (Japanese)"},{code:"ko",label:"한국어 (Korean)"},{code:"pt",label:"Português (Portuguese)"},{code:"ru",label:"Русский (Russian)"},{code:"ar",label:"العربية (Arabic)"},{code:"hi",label:"हिन्दी (Hindi)"}];function je(){const e=V.filter(t=>!Q.some(n=>n.code===t.code));return[...Q,...e]}function He(){const e=document.createElement("select");e.className="cb-lang-picker",u(e,"nav.language",{attr:"title"});const t=pe();return je().forEach(({code:n,label:o})=>{const a=document.createElement("option");a.value=n,a.textContent=o,n===t&&(a.selected=!0),e.appendChild(a)}),e.addEventListener("change",()=>Pe(e.value)),e}function oe({domainName:e=""}={}){const t=document.createElement("header");t.className="cb-header";const n=document.createElement("div");n.className="cb-header__top";const o=document.createElement("a");if(o.className="cb-header__logo",o.href="#/",u(o,"app.title"),n.appendChild(o),e){const p=document.createElement("span");p.className="cb-header__sep",p.textContent="›",n.appendChild(p);const g=document.createElement("span");g.className="cb-header__domain",typeof e=="function"?u(g,e):g.textContent=e,n.appendChild(g)}const a=document.createElement("span");a.className="cb-header__spacer",n.appendChild(a);const l=document.createElement("nav");l.className="cb-header__nav";const d=document.createElement("a");d.href="#/settings",u(d,"nav.settings"),l.appendChild(d),l.appendChild(He());const s=document.createElement("a");return s.href="#/about",u(s,"nav.about"),l.appendChild(s),n.appendChild(l),t.appendChild(n),t}async function Ge(e){e.innerHTML="",e.appendChild(oe());const t=document.createElement("main");t.className="cb-home",t.innerHTML=`<p class="cb-loading">${m("loading")}</p>`,e.appendChild(t);let n;try{n=await ue()}catch(p){t.innerHTML=`<p class="cb-error">${m("home.load_error",{error:p.message})}</p>`;return}const o=[...new Set(n.flatMap(p=>p.tags))].sort(),a=["intro","core","college","research"];let l="all",d="all";function s(){let p=n;l!=="all"&&(p=p.filter(i=>i.tags.includes(l))),d!=="all"&&(p=p.filter(i=>i.default_level===d)),t.innerHTML=`
      <div class="cb-home__filters">
        <span class="cb-filter-group">
          <span class="cb-filter-label">${m("home.filter.subject")}</span>
          <button class="cb-filter-btn ${l==="all"?"active":""}" data-tag="all">${m("home.filter.all")}</button>
          ${o.map(i=>`<button class="cb-filter-btn ${l===i?"active":""}" data-tag="${i}">${Ce(i)}</button>`).join("")}
        </span>
        <span class="cb-filter-right">
          <span class="cb-filter-label">${m("home.filter.level")}</span>
          <select class="cb-level-select" id="cb-level-filter">
            <option value="all" ${d==="all"?"selected":""}>${m("home.filter.all")}</option>
            ${a.map(i=>`<option value="${i}" ${d===i?"selected":""}>${m(`level.${i}`)}</option>`).join("")}
          </select>
        </span>
      </div>
      <div class="cb-card-grid"></div>
    `;const g=t.querySelector(".cb-card-grid");p.forEach(i=>g.appendChild(qe(i))),t.querySelectorAll(".cb-filter-btn[data-tag]").forEach(i=>{i.addEventListener("click",()=>{l=i.dataset.tag,s()})}),t.querySelector("#cb-level-filter").addEventListener("change",i=>{d=i.target.value,s()})}s()}function De(e,{level:t="intro",lang:n="en",signal:o}={}){const{id:a}=e,l=document.createElement("div");l.className="cb-graph-viewer";const d=document.createElement("div");d.className="cb-graph-topbar";const s=document.createElement("div");s.className="cb-graph-topbar__search";const p=document.createElement("input");p.type="text",u(p,"graph.search_placeholder",{attr:"placeholder"}),p.className="cb-graph-topbar__input";const g=document.createElement("button");g.type="button",u(g,"graph.search"),g.className="cb-btn cb-graph-topbar__search-btn",s.append(p,g);const i=document.createElement("div");i.className="cb-graph-topbar__view-controls";const w=document.createElement("button");w.type="button",u(w,"graph.zoom_out"),u(w,"graph.zoom_out_title",{attr:"title"}),w.className="cb-btn cb-graph-topbar__zoom";const P=document.createElement("button");P.type="button",u(P,"graph.zoom_in"),u(P,"graph.zoom_in_title",{attr:"title"}),P.className="cb-btn cb-graph-topbar__zoom";const O=document.createElement("button");O.type="button",u(O,"graph.recenter"),O.className="cb-btn cb-graph-topbar__recenter",i.append(w,P,O),d.append(s,i),l.appendChild(d);const C=document.createElement("iframe");C.className="cb-graph-viewer__frame",C.src=`/cb-graph-network/domains/${a}/output/graph.html`,u(C,"graph.frame_title",{attr:"title",vars:{domain:a}}),C.setAttribute("allowfullscreen","");function x(){var k,R,q,z;const h=p.value.trim().toLowerCase();if(!h)return;const c=C.contentWindow,f=(((k=c==null?void 0:c.__cb_RAW)==null?void 0:k.nodes)||[]).find(j=>[j.id,j.label,...Object.values(j.labels||{})].some(E=>E.toLowerCase().includes(h)));p.classList.remove("cb-graph-topbar__input--notfound"),f?((R=c.selectNode)==null||R.call(c,f.id),(z=(q=c.__cb_network)==null?void 0:q.focus)==null||z.call(q,f.id,{scale:1,animation:{duration:400,easingFunction:"easeInOutQuad"}})):(p.classList.add("cb-graph-topbar__input--notfound"),setTimeout(()=>p.classList.remove("cb-graph-topbar__input--notfound"),1200))}g.addEventListener("click",x),p.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),x())}),O.addEventListener("click",()=>{var h,c;try{(c=(h=C.contentWindow)==null?void 0:h.reCenterGraph)==null||c.call(h)}catch{}});const y=.1,_=4;function $(h){var c;try{const r=(c=C.contentWindow)==null?void 0:c.__cb_network;if(!r)return;const f=Math.min(_,Math.max(y,r.getScale()*h));r.moveTo({scale:f,animation:{duration:150,easingFunction:"easeInOutQuad"}})}catch{}}P.addEventListener("click",()=>$(1.25));function M(){var h,c,r,f;try{const k=C.contentWindow,R=(h=k==null?void 0:k.__cb_RAW)==null?void 0:h.nodes;if(!R)return;R.forEach(E=>{E._label0??(E._label0=E.label),E.label=ke(E.labels,E._label0)});const q=k.wrapLabel||(E=>E.replace(/ /g,`
`)),z=k.__cb_network,j=z==null?void 0:z.getPositions();(c=k.__cb_visNodes)==null||c.update(R.map(E=>({id:E.id,label:q(E.label)}))),j&&Object.entries(j).forEach(([E,{x:D,y:B}])=>z.moveNode(E,D,B)),Be(C.contentDocument,(f=k.__cb_nodeIndex)==null?void 0:f[(r=z==null?void 0:z.getSelectedNodes)==null?void 0:r.call(z)[0]])}catch{}}return window.addEventListener("cb:localeChanged",M,{signal:o}),w.addEventListener("click",()=>$(.8)),C.addEventListener("load",()=>{var h;try{const c=C.contentWindow;if(!c)return;c.eval("window.__cb_RAW = RAW; window.__cb_nodeIndex = nodeIndex; window.__cb_network = network; window.__cb_visNodes = typeof visNodes !== 'undefined' ? visNodes : null"),M();const r=(((h=c.__cb_RAW)==null?void 0:h.nodes)||[]).map(k=>({id:k.id,label:k.label,kind:k.kind,tier:k.tier??0}));window.dispatchEvent(new CustomEvent("cb:graphLoaded",{detail:{concepts:r}}));const f=c.handleSelect;c.handleSelect=function(k){var q;f.call(c,k);const R=(q=c.__cb_nodeIndex)==null?void 0:q[k];R&&window.dispatchEvent(new CustomEvent("cb:nodeSelected",{detail:{nodeId:k,node:R}}))},Ue(C.contentDocument)}catch{}}),l.appendChild(C),l.selectNode=h=>{var c,r;try{(r=(c=C.contentWindow)==null?void 0:c.selectNode)==null||r.call(c,h)}catch{}},l.getPath=h=>{var c;try{const r=C.contentWindow,f=(c=r==null?void 0:r.__cb_nodeIndex)==null?void 0:c[h];if(!f)return null;const R=(r.getAncestors?[...r.getAncestors(h)]:[]).map(q=>r.__cb_nodeIndex[q]).filter(Boolean);return{nodeId:h,node:f,path:R}}catch{return null}},l}function Be(e,t){var a;if(!e)return;const n=l=>e.querySelector(l),o=(l,d)=>{l&&(l.textContent=d)};o(n("#notes-header-top h2"),m("graph.notes")),o(n("#nb-clear-btn"),m("graph.notes_clear")),o(n("#nb-clear-btn + .nb-btn"),m("graph.notes_export")),(a=n("#notes-textarea"))==null||a.setAttribute("placeholder",m("graph.notes_placeholder")),o(n("#notes-node-label"),t?t.label:m("graph.notes_none"))}function Ue(e){if(e.querySelector("#cb-ide-layout"))return;const t=e.createElement("style");t.id="cb-ide-layout",t.textContent=`
    #path-sidebar, #explain-panel, .graph-recenter-btn { display: none !important; }
    .app {
      display: flex !important;
      flex-direction: column !important;
      height: 100vh !important;
    }
    #graph-panel { flex: 0 0 80%; min-height: 0; }
    #notes-sidebar {
      flex: 1;
      min-height: 0;
      width: 100% !important;
      border-left: none !important;
      border-top: 1px solid rgba(0,0,0,0.12) !important;
      overflow-y: auto !important;
      display: flex;
      flex-direction: column;
    }
    /* graph.html's own #notes-textarea is a fixed 100px tall, sized for the
       standalone page's roomy right-column layout — inside this bottom
       drawer (now a much shorter horizontal strip) that alone ate most of
       the available height, squeezing the notes history list below it down
       to one or two visible rows. Shrink the entry box to a single line so
       the history list gets the space instead. */
    #notes-textarea {
      flex: 0 0 auto !important;
      height: 32px !important;
      padding: 6px 12px !important;
    }
    .cb-notes-gutter {
      height: 6px; flex-shrink: 0; cursor: row-resize;
      background: rgba(0,0,0,0.1); touch-action: none;
      transition: background 0.15s;
    }
    .cb-notes-gutter:hover, .cb-notes-gutter:active { background: #60a5fa; }
  `,e.head.appendChild(t);const n=e.querySelector("#graph-panel"),o=e.querySelector("#notes-sidebar"),a=e.querySelector(".app");if(n&&o&&a&&!e.querySelector(".cb-notes-gutter")){const l=e.createElement("div");l.className="cb-notes-gutter",u(l,"domain.drag_resize",{attr:"title"}),n.insertAdjacentElement("afterend",l),Fe(l,n,a)}}function Fe(e,t,n){e.addEventListener("pointerdown",l=>{l.preventDefault(),e.setPointerCapture(l.pointerId);const d=p=>{const g=n.getBoundingClientRect(),i=Math.min(.92,Math.max(.3,(p.clientY-g.top)/g.height));t.style.flex=`0 0 ${(i*100).toFixed(2)}%`},s=p=>{e.releasePointerCapture(p.pointerId),e.removeEventListener("pointermove",d),e.removeEventListener("pointerup",s),e.removeEventListener("pointercancel",s)};e.addEventListener("pointermove",d),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s)})}function We(e,t,n,o){const a=o?`${o}/`:"";return`/cb-graph-network/domains/${e}/output/${t}.${n}/${a}html/`}function Ke(e){return e&&e!=="en"?`_${e}`:""}function Xe(e,t,n,o,a){return`${We(e,t,n,o)}concept_${encodeURIComponent(a)}${Ke(n)}.html`}function Ze(e){const t=e.match(/output\/([^.]+)\.([^/]+)\//),n=t?t[1]:"college",o=t?t[2]:"en",a=e.match(/output\/[^/]+\/([^/]+)\/html\//),l=a?a[1]:"";return{level:n,lang:o,model:l}}const X=new Map;async function Je(e){if(X.has(e))return X.get(e);try{const t=await fetch(e);if(!t.ok)return X.set(e,!1),!1;const n=await t.text(),o=n.includes("spl-credit")||n.includes("Generated by");return X.set(e,o),o}catch{return X.set(e,!1),!1}}function ge(){X.clear()}const Qe=["intro","core","college","research"],Ye={application:"🌸",primitive:"🌱"},Ve=[{value:"gemma3",label:"gemma3 (Ollama)"},{value:"gemma4",label:"gemma4 (Ollama)"},{value:"sonnet",label:"sonnet (Claude)"},{value:"haiku",label:"haiku (Claude)"},{value:"opus",label:"opus (Claude)"}];function ce(e,t,n,o){const a=document.createElement("select");return a.className=n,o&&u(a,o,{attr:"title"}),e.forEach(({value:l,label:d})=>{const s=document.createElement("option");s.value=l,s.textContent=d,l===t&&(s.selected=!0),a.appendChild(s)}),a}function _e(e,t){e.clear(),(t.generated_concepts||[]).forEach(n=>{if(!n.name||!n.file)return;const{level:o,lang:a,model:l}=Ze(n.file),d=e.get(n.name)||[];d.push({file:n.file,level:o,lang:a,model:n.model??l}),e.set(n.name,d)})}function ie(e){var n;const t=m(`langname.${e}`);return t!==`langname.${e}`?t:((n=Q.find(o=>o.code===e))==null?void 0:n.label)||e}function et(e,{level:t="intro",lang:n="en",graphViewer:o,signal:a}={}){const l=document.createElement("aside");l.className="cb-content-panel";const d=new Map;_e(d,e);const s={model:"sonnet",level:t,lang:n};let p=null,g=null,i=null,w=null,P=0,O=!1,C=s.lang,x=s.model;function y(b,L=s.lang){const I=(d.get(b)||[]).filter(N=>N.level===s.level&&N.lang===L);if(!I.length)return null;const S=I.find(N=>N.model===s.model);return S||O?S||null:I.find(N=>!N.model)||I[0]}const _=document.createElement("div");_.className="cb-book-pane__controls";const $=ce(Ve,s.model,"cb-book-pane__select","panel.model"),M=ce(Qe.map(b=>({value:b,label:b})),s.level,"cb-book-pane__select","panel.level");M.querySelectorAll("option").forEach(b=>u(b,`level.${b.value}`));const h=ce(Q.map(b=>({value:b.code,label:b.label})),s.lang,"cb-book-pane__select","panel.language"),c=document.createElement("button");c.type="button",c.className="cb-book-pane__refresh",u(c,"panel.refresh",{attr:"title"}),c.textContent="🔄";const r=document.createElement("button");r.type="button",r.className="cb-btn cb-btn--primary cb-ide-gen-btn",u(r,"panel.generate"),r.disabled=!0;const f=document.createElement("button");f.type="button",f.className="cb-btn cb-ide-pdf-btn",u(f,"panel.export_pdf"),f.disabled=!0;const k=document.createElement("label");k.className="cb-ide-skip-cache";const R=document.createElement("input");R.type="checkbox",k.appendChild(R),k.appendChild(u(document.createElement("span"),"panel.skip_cache")),_.append($,M,h,c,r,k,f),l.appendChild(_);const q=document.createElement("div");q.className="cb-ide-body";const z=document.createElement("nav");z.className="cb-ide-toc",z.innerHTML=`<p class="cb-panel__hint">${m("panel.hint_click")}</p>`;const j=document.createElement("div");j.className="cb-ide-content",j.innerHTML=`<p class="cb-panel__hint">${m("panel.hint_click")}</p>`,q.append(z,j),l.appendChild(q);const E=document.createElement("div");E.className="cb-ide-log-wrap",E.style.display="none";const D=document.createElement("pre");D.className="cb-ide-log";const B=document.createElement("button");B.type="button",B.className="cb-ide-log-copy",u(B,"panel.copy"),B.addEventListener("click",()=>{navigator.clipboard.writeText(D.textContent).then(()=>{u(B,"panel.copied"),setTimeout(()=>{u(B,"panel.copy")},1500)})}),E.append(D,B),l.appendChild(E);function se(){s.model=$.value,s.level=M.value,s.lang=h.value,W()}$.addEventListener("change",()=>{O=!0,se()}),M.addEventListener("change",se),h.addEventListener("change",se),c.addEventListener("click",()=>{ge(),W()}),window.addEventListener("cb:localeChanged",b=>{const{lang:L}=b.detail;Q.some(I=>I.code===L)&&(h.value=L,s.lang=L),he(g),W()},{signal:a});function he(b){var A;if(!p){z.innerHTML=`<p class="cb-panel__hint">${m("panel.hint_click")}</p>`;return}const L=(A=o==null?void 0:o.getPath)==null?void 0:A.call(o,p),I=[...(L==null?void 0:L.path)||[],b].filter(Boolean),S=new Set,N=I.filter(v=>!S.has(v.id)&&S.add(v.id)).sort((v,G)=>v.label.localeCompare(G.label,pe()));if(!N.length){z.innerHTML=`<p class="cb-panel__hint">${m("panel.no_path")}</p>`;return}z.innerHTML="";const H=document.createElement("ul");H.className="cb-ide-toc__list",N.forEach(v=>{const G=document.createElement("li"),K=document.createElement("a");K.href="#";const me=Ye[v.kind];K.textContent=me?`${me} ${v.label}`:v.label,K.dataset.nodeId=v.id,v.id===i&&(K.className="cb-ide-toc__current"),K.addEventListener("click",xe=>{xe.preventDefault(),i=v.id,w=v,E.style.display="none",we(),W()}),G.appendChild(K),H.appendChild(G)}),z.appendChild(H)}function we(){z.querySelectorAll(".cb-ide-toc__list a").forEach(b=>{b.classList.toggle("cb-ide-toc__current",b.dataset.nodeId===i)})}async function Le(b){const L=y(i,b);if(L)return{url:`/cb-graph-network/domains/${e.id}/${L.file}`,model:L.model};const I=Xe(e.id,s.level,b,s.model,i);return await Je(I)?{url:I,model:s.model}:null}async function W(){if(!i||!w)return;const b=++P;j.innerHTML=`<p class="cb-panel__hint">${m("loading")}</p>`;const L=(d.get(i)||[]).filter(H=>H.level===s.level).map(H=>H.lang),I=[...new Set([s.lang,"en",...L])];let S=null,N=null;for(N of I){if(S=await Le(N),b!==P)return;if(S)break}if(r.disabled=!1,u(r,"panel.generate"),S){if(C=N,x=S.model||s.model,N===s.lang&&!O&&S.model&&S.model!==s.model&&(s.model=S.model,$.value=S.model),f.disabled=!1,j.innerHTML="",N!==s.lang){const A=document.createElement("div");A.className="cb-ide-fallback-notice";const v=document.createElement("span");v.textContent=m("panel.fallback_notice",{requested:ie(s.lang),shown:ie(N)});const G=document.createElement("button");G.type="button",G.className="cb-btn cb-ide-fallback-notice__gen",G.textContent=m("panel.generate_in",{lang:ie(s.lang)}),G.addEventListener("click",()=>r.click()),A.append(v,G),j.appendChild(A)}const H=document.createElement("iframe");H.className="cb-ide-content__frame",H.src=S.url,H.addEventListener("load",()=>{try{const A=H.contentDocument;if(!A)return;const v=A.createElement("style");v.textContent="nav.toc{display:none!important} .page{display:block!important}",A.head.appendChild(v)}catch{}}),j.appendChild(H)}else C=s.lang,f.disabled=!0,j.innerHTML=`
        <div class="cb-ide-empty">
          <h3>${w.label}</h3>
          ${w.defines?`<p>${w.defines}</p>`:""}
          <p>${m("panel.missing",{model:s.model,level:s.level,lang:s.lang})}</p>
        </div>
      `}return r.addEventListener("click",()=>{if(!i)return;const b=i,L=s.model,I=s.level,S=s.lang,N=R.checked;r.disabled=!0,u(r,"panel.generating"),E.style.display="block",D.textContent=`▶ target: ${b}  model: ${L||"default"}  level: ${I}  language: ${S}
`;const H=`/api/generate?domain=${encodeURIComponent(e.id)}&target=${encodeURIComponent(b)}&level=${encodeURIComponent(I)}&language=${encodeURIComponent(S)}&model=${encodeURIComponent(L)}${N?"&skip_cache=true":""}`,A=new EventSource(H);A.addEventListener("log",v=>{const{message:G}=JSON.parse(v.data);D.textContent+=G+`
`,D.scrollTop=D.scrollHeight}),A.addEventListener("done",async()=>{A.close(),D.textContent+=`
`+m("panel.log_done"),ge(),r.disabled=!1,u(r,"panel.generate");try{Re();const v=(await ue()).find(G=>G.id===e.id);v&&(e.generated_concepts=v.generated_concepts,e.books=v.books,e.has_book=v.has_book,_e(d,e))}catch{}W()}),A.addEventListener("gen_error",v=>{A.close(),D.textContent+=`
✗ ${JSON.parse(v.data).message}`,r.disabled=!1,u(r,"panel.retry")}),A.onerror=()=>{A.close(),D.textContent+=`
`+m("panel.log_dropped"),r.disabled=!1,u(r,"panel.retry")}}),f.addEventListener("click",async()=>{if(!i)return;const b=i;f.disabled=!0,u(f,"panel.exporting");try{const L=`/api/pdf?domain=${encodeURIComponent(e.id)}&target=${encodeURIComponent(b)}&level=${encodeURIComponent(s.level)}&language=${encodeURIComponent(C)}&model=${encodeURIComponent(x)}`,I=await fetch(L),S=await I.json();if(!I.ok)throw new Error(S.detail||"PDF generation failed");const N=`/cb-graph-network/domains/${e.id}/${S.file}`;u(f,"panel.exported"),f.disabled=!1,window.open(N,"_blank","noopener")}catch(L){u(f,"panel.export_error"),f.title=L.message,setTimeout(()=>{u(f,"panel.export_pdf"),f.disabled=!1},3e3)}}),window.addEventListener("cb:nodeSelected",b=>{p=b.detail.nodeId,g=b.detail.node,i=b.detail.nodeId,w=b.detail.node,E.style.display="none",he(b.detail.node),W()},{signal:a}),l}async function tt(e,{id:t}={}){var h;(h=e._abortController)==null||h.abort();const n=new AbortController;e._abortController=n,e.innerHTML="";const o=Symbol();e._renderKey=o;let a=null,l=[];try{l=await ue(),t&&(a=l.find(c=>c.id===t)??{id:t,name:t,has_book:!1,books:[],generated_concepts:[],capstone:null})}catch{}if(e._renderKey!==o)return;const d=document.createElement("div");d.style.cssText="display:flex;flex-direction:column;height:100vh;overflow:hidden",e.appendChild(d),d.appendChild(oe({domainName:a?()=>ee(a,"name"):""}));const s=document.createElement("div");s.className="cb-domain-picker-bar";const p=document.createElement("span");p.className="cb-domain-picker-bar__label",u(p,"domain.label"),s.appendChild(p);const g=document.createElement("select");g.className="cb-domain-picker-bar__select";const i=document.createElement("option");i.value="",u(i,"domain.select"),g.appendChild(i),[...l].sort((c,r)=>c.id.localeCompare(r.id,"zh")).forEach(c=>{const r=document.createElement("option");r.value=c.id,u(r,()=>ee(c,"name")),c.id===t&&(r.selected=!0),g.appendChild(r)});function w(){g.value&&(window.location.hash=`/domain/${encodeURIComponent(g.value)}`)}g.addEventListener("change",w),s.appendChild(g);const P=document.createElement("button");if(P.type="button",P.className="cb-btn cb-btn--primary cb-domain-picker-bar__load",u(P,"domain.load"),P.addEventListener("click",w),s.appendChild(P),d.appendChild(s),!t||!a)return;const O=a.default_level||"intro",C=pe(),x=document.createElement("main");x.className="cb-ide-layout";const y=document.createElement("div");y.className="cb-ide-left";const _=De(a,{level:O,lang:C,signal:n.signal});y.appendChild(_);const $=document.createElement("div");$.className="cb-ide-gutter",u($,"domain.drag_resize",{attr:"title"});const M=document.createElement("div");M.className="cb-ide-right",M.appendChild(et(a,{level:O,lang:C,graphViewer:_,signal:n.signal})),x.append(y,$,M),d.appendChild(x),nt($,y,x,n.signal)}function nt(e,t,n,o){e.addEventListener("pointerdown",d=>{d.preventDefault(),e.setPointerCapture(d.pointerId),document.body.style.cursor="col-resize",document.body.style.userSelect="none";const s=g=>{const i=n.getBoundingClientRect(),w=Math.min(.82,Math.max(.18,(g.clientX-i.left)/i.width));t.style.flex=`0 0 ${(w*100).toFixed(2)}%`},p=g=>{e.releasePointerCapture(g.pointerId),document.body.style.cursor="",document.body.style.userSelect="",e.removeEventListener("pointermove",s),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",p)};e.addEventListener("pointermove",s,{signal:o}),e.addEventListener("pointerup",p,{signal:o}),e.addEventListener("pointercancel",p,{signal:o})},{signal:o})}function at(e){e.innerHTML="",e.appendChild(oe());const t=document.createElement("main");t.className="cb-about",t.innerHTML=m("about.body"),e.appendChild(t)}const fe=new Set(["anthropic","openai","google","openrouter"]),te={claude_cli:{label:"Claude CLI",models:[{value:"claude-sonnet-5",label:"Sonnet 5"},{value:"claude-haiku-4-5-20251001",label:"Haiku 4.5"},{value:"claude-opus-4-8",label:"Opus 4.8"}]},anthropic:{label:"Anthropic",models:[{value:"claude-sonnet-5",label:"Claude Sonnet 5"},{value:"claude-haiku-4-5-20251001",label:"Claude Haiku 4.5"},{value:"claude-opus-4-8",label:"Claude Opus 4.8"}]},openai:{label:"OpenAI",models:[{value:"gpt-4.1",label:"GPT-4.1"},{value:"gpt-5.4-mini",label:"GPT 5.4 Mini"},{value:"o3-mini",label:"o3-mini"}]},google:{label:"Gemini",models:[{value:"gemini-2.5-pro",label:"Gemini 2.5 Pro"},{value:"gemini-2.5-flash",label:"Gemini 2.5 Flash"},{value:"gemini-3.5-flash",label:"Gemini 3.5 Flash"}]},openrouter:{label:"OpenRouter",models:[{value:"anthropic/claude-sonnet-5",label:"Claude Sonnet 5"},{value:"anthropic/claude-haiku-4-5-20251001",label:"Claude Haiku 4.5"},{value:"anthropic/claude-opus-4-8",label:"Claude Opus 4.8"},{value:"google/gemini-2.5-pro",label:"Gemini 2.5 Pro"},{value:"google/gemini-2.5-flash",label:"Gemini 2.5 Flash"},{value:"google/gemini-3.5-flash",label:"Gemini 3.5 Flash"},{value:"openai/gpt-4.1",label:"GPT-4.1"},{value:"openai/gpt-5.4-mini",label:"GPT 5.4 Mini"},{value:"openai/o3-mini",label:"o3-mini"},{value:"deepseek/deepseek-r1",label:"DeepSeek R1"},{value:"meta-llama/llama-4-maverick",label:"Llama 4 Maverick"},{value:"z-ai/glm-5.2",label:"GLM 5.2"},{value:"qwen/qwen3.5-35b-a3b",label:"Qwen 3.5 35B"},{value:"qwen/qwen3.6-35b-a3b",label:"Qwen 3.6 35B"},{value:"nvidia/nemotron-3-ultra-550b-a55b:free",label:"Nemotron 3 Ultra 550B"},{value:"moonshotai/kimi-k2.6",label:"Kimi 2.6"}]},ollama:{label:"Ollama (local)",models:null}};async function re(e,t){const n=te[e.value];if(t.innerHTML="",!n)return;let o=n.models;if(e.value==="ollama"&&!o){try{const a=await fetch("/api/settings/ollama-models");a.ok&&(o=await a.json())}catch{}if(!o||o.length===0){const a=document.createElement("option");a.value="",u(a,"settings.ollama_unavailable"),t.appendChild(a);return}te.ollama.models=o}for(const a of o){const l=document.createElement("option");l.value=a.value,l.textContent=a.label,t.appendChild(l)}}async function ot(e){e.innerHTML="",e.appendChild(oe());const t=document.createElement("main");t.className="cb-settings",t.innerHTML=`
    <h2 data-t="settings.title"></h2>
    <section class="cb-settings__section">
      <div class="cb-settings__section-title" data-t="settings.llm_section"></div>
      <div class="cb-settings__pair">
        <div class="cb-settings__field">
          <label class="cb-settings__label" data-t="settings.adapter"></label>
          <select id="cb-adapter" class="cb-settings__select">
            ${Object.entries(te).map(([y,_])=>`<option value="${y}">${_.label}</option>`).join("")}
          </select>
        </div>
        <div class="cb-settings__field cb-settings__field--grow">
          <label class="cb-settings__label" data-t="settings.model"></label>
          <select id="cb-model" class="cb-settings__select"></select>
        </div>
      </div>
      <div class="cb-settings__pair" id="cb-api-key-row" style="margin-top:12px">
        <div class="cb-settings__field cb-settings__field--grow">
          <label class="cb-settings__label" data-t="settings.api_key"></label>
          <input id="cb-api-key" type="password" class="cb-settings__select"
            data-t-placeholder="settings.api_key_placeholder" autocomplete="off" style="width:100%">
          <span id="cb-api-key-hint" style="font-size:0.78rem;color:#6b7280"></span>
        </div>
      </div>
      <div class="cb-settings__row" style="margin-top:16px">
        <button id="cb-settings-save" class="cb-btn" data-t="settings.save"></button>
        <span id="cb-settings-status" class="cb-settings__status"></span>
      </div>
      <div class="cb-settings__current" id="cb-current-llm"></div>
    </section>
    <section class="cb-settings__section">
      <div class="cb-settings__section-title" data-t="settings.limits_section"></div>
      <div class="cb-settings__pair">
        <div class="cb-settings__field">
          <label class="cb-settings__label" data-t="settings.while_max_iter"></label>
          <input id="cb-while-max-iter" type="number" min="1" step="1" value="50"
            class="cb-settings__select" style="width:100px"
            data-t-title="settings.while_max_iter_title">
        </div>
        <div class="cb-settings__field">
          <label class="cb-settings__label" data-t="settings.max_llm_calls"></label>
          <input id="cb-max-llm-calls" type="number" min="1" step="1" value="50"
            class="cb-settings__select" style="width:100px"
            data-t-title="settings.max_llm_calls_title">
        </div>
      </div>
      <div class="cb-settings__row" style="margin-top:16px">
        <button id="cb-spl-limits-save" class="cb-btn" data-t="settings.save"></button>
        <span id="cb-spl-limits-status" class="cb-settings__status"></span>
      </div>
    </section>
  `,Te(t),e.appendChild(t);const n=t.querySelector("#cb-adapter"),o=t.querySelector("#cb-model"),a=t.querySelector("#cb-settings-save"),l=t.querySelector("#cb-settings-status"),d=t.querySelector("#cb-current-llm"),s=t.querySelector("#cb-api-key-row"),p=t.querySelector("#cb-api-key"),g=t.querySelector("#cb-api-key-hint");let i={};function w(){const y=n.value,_=fe.has(y);s.style.display=_?"":"none",p.value="",u(g,()=>_&&i[y]?m("settings.key_saved"):"")}n.addEventListener("change",()=>{re(n,o),w()}),await re(n,o),w();const P=t.querySelector("#cb-while-max-iter"),O=t.querySelector("#cb-max-llm-calls"),C=t.querySelector("#cb-spl-limits-save"),x=t.querySelector("#cb-spl-limits-status");try{const y=await fetch("/api/settings");if(y.ok){const _=await y.json();u(d,"settings.current",{vars:{llm:_.llm}});const[$,...M]=_.llm.split(":"),h=M.join(":");te[$]&&(n.value=$,await re(n,o),[...o.options].some(c=>c.value===h)&&(o.value=h)),i={anthropic:_.anthropic_api_key_set,google:_.gemini_api_key_set,openai:_.openai_api_key_set,openrouter:_.openrouter_api_key_set},w(),_.spl_while_max_iter&&(P.value=_.spl_while_max_iter),_.spl_max_llm_calls&&(O.value=_.spl_max_llm_calls)}}catch{u(l,"settings.api_unreachable_hint"),l.style.color="#dc2626"}a.addEventListener("click",async()=>{const y=n.value,_=`${y}:${o.value}`,$={llm:_};if(fe.has(y)&&p.value.trim()){const M=y==="google"?"gemini_api_key":`${y}_api_key`;$[M]=p.value.trim()}try{const M=await fetch("/api/settings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(M.ok){const h=await M.json();i={anthropic:h.anthropic_api_key_set,google:h.gemini_api_key_set,openai:h.openai_api_key_set,openrouter:h.openrouter_api_key_set},w(),u(d,"settings.current",{vars:{llm:_}}),l.textContent=m("settings.saved"),l.style.color="#16a34a"}else l.textContent=m("settings.save_failed"),l.style.color="#dc2626"}catch{l.textContent=m("settings.api_unreachable"),l.style.color="#dc2626"}setTimeout(()=>{l.textContent=""},3e3)}),C.addEventListener("click",async()=>{const y=Number(P.value),_=Number(O.value);if(!Number.isInteger(y)||y<1||!Number.isInteger(_)||_<1){x.textContent=m("settings.invalid_limits"),x.style.color="#dc2626",setTimeout(()=>{x.textContent=""},3e3);return}try{(await fetch("/api/settings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({spl_while_max_iter:y,spl_max_llm_calls:_})})).ok?(x.textContent=m("settings.saved"),x.style.color="#16a34a"):(x.textContent=m("settings.save_failed"),x.style.color="#dc2626")}catch{x.textContent=m("settings.api_unreachable"),x.style.color="#dc2626"}setTimeout(()=>{x.textContent=""},3e3)})}const le=document.getElementById("app");ne("/",()=>Ge(le));ne("/about",()=>at(le));ne("/settings",()=>ot(le));ne("/domain/:id",e=>tt(le,e));const lt=/^#\/(domain\/|settings\b)/;window.addEventListener("cb:localeChanged",()=>{lt.test(window.location.hash)?Oe(document):Se()});$e();
