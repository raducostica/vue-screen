import{o as n,c as s,d as a}from"./app.c044a21d.js";const t='{"title":"Bootstrap","description":"","frontmatter":{"editLink":true},"relativePath":"guide/frameworks/bootstrap.md","lastUpdated":1615750035269}',o={},p=a('<h1 id="bootstrap"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> Bootstrap</h1><p>To use Bootstrap as your UI framework, simply pass it to the configuration</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-screen&#39;</span>\n<span class="token keyword">const</span> grid <span class="token operator">=</span> <span class="token function">useGrid</span><span class="token punctuation">(</span><span class="token string">&#39;bootstrap&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> VueScreen <span class="token keyword">from</span> <span class="token string">&#39;vue-screen&#39;</span>\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueScreen<span class="token punctuation">,</span> <span class="token string">&#39;bootstrap&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>Your grid object will contain the following properties:</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  xs<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  sm<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  md<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  lg<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  xl<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  xxl<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  breakpoint<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// the current breakpoint</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The actual values of the properties depend on the screen size.</p></div>',7);o.render=function(a,t,o,e,c,l){return n(),s("div",null,[p])};export default o;export{t as __pageData};