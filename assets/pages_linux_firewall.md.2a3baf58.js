import{_ as s,c as a,o as l,Q as n}from"./chunks/framework.8dca3095.js";const h=JSON.parse('{"title":"防火墙","description":"","frontmatter":{"title":"防火墙","order":6},"headers":[],"relativePath":"pages/linux/firewall.md","lastUpdated":1681372154000}'),o={name:"pages/linux/firewall.md"},e=n(`<h2 id="centos" tabindex="-1">centos <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;centos&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=443/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#打开443/TCP端口</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=3690/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#permanent 永久</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 更新防火墙规则</span></span></code></pre></div><h2 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;Ubuntu&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port_number/protocol</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#指定开放端口和协议</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#UFW 防火墙被配置允许 SSH 远程连接</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7722</span><span style="color:#C3E88D;">/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#开放7722/tcp端口</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7100</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">7200</span><span style="color:#C3E88D;">/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#允许端口从7100到7200的tcp协议</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">64.63.62.61</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># IP 地址白名单</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">64.63.62.61</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#从 IP64.63.62.61的机器，通过22端口访问</span></span></code></pre></div>`,10),p=[e];function t(c,r,C,i,y,d){return l(),a("div",null,p)}const D=s(o,[["render",t]]);export{h as __pageData,D as default};
