import{_ as s,c as a,o as n,Q as p}from"./chunks/framework.8dca3095.js";const F=JSON.parse('{"title":"linux面试","description":"","frontmatter":{"title":"linux面试","order":1},"headers":[],"relativePath":"pages/interview/interview.md","lastUpdated":1681372154000}'),l={name:"pages/interview/interview.md"},o=p(`<h1 id="linux-面试" tabindex="-1">Linux 面试 <a class="header-anchor" href="#linux-面试" aria-label="Permalink to &quot;Linux 面试&quot;">​</a></h1><p>1.分析日志 t.log(访问量)，将各个 ip 地址截取，并统计出现次数，并按从大到小排序</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http://192.168.200.10/index1.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.10/index2.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.20/index1.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.30/index1.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.40/index1.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.30/order.html</span></span>
<span class="line"><span style="color:#A6ACCD;">http://192.168.200.10/order.html</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">t.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cut</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uniq</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-nr</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">3 192.168.200.10</span></span>
<span class="line"><span style="color:#A6ACCD;">2 192.168.200.30</span></span>
<span class="line"><span style="color:#A6ACCD;">1 192.168.200.40</span></span>
<span class="line"><span style="color:#A6ACCD;">1 192.168.200.20</span></span></code></pre></div><p>2.统计连接到服务器的各个 ip 情况，并按连接数从大到小排序</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ESTAB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $5}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $1}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uniq</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sort</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-nr</span></span></code></pre></div><p>3.如果忘记了 mysql 数据库的 root 用户的密码，如何找回？</p><p>MySQL8.0：在配置文件中加上 skip-grant-tables。登录 mysql</p><div class="language-mysql"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">use mysql;</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;123&#39;;</span></span></code></pre></div><p>4.写出指令：统计 IP 访问情况，要求分析 nginx 访问日志（accesss.log），找出访问页面数量在前两位的 ip</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat access.log | awk -F &quot; &quot; &#39;{print $1}&#39; | sort | uniq -c | sort -nr | head -2</span></span></code></pre></div><p>5.使用 tcpdump 监听本机，将来着 ip x.x.x.x，tcp 端口为 22 的数据，保存输出到 tcpdump.log</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tcpdump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ens33</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">192.168.88.8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/path/tcpdump.log</span></span></code></pre></div><p>6.常用的 nginx 模块，用来做什么</p><p>​ rewrite 模块：实现路径重写</p><p>​ access 模块：来源控制</p><p>​ ssl 模块：安全加密</p><p>​ ngx_http_gzip_module：网络传输压缩模块</p><p>​ ngx_http_proxy_module：代理实现模块</p><p>​ ngx_http_upstream_module：定义后端服务器列表模块</p><p>​ ngx_cache_purge：清楚缓存功能模块</p><p>7.如果你是系统管理员，在 Linux 系统权限划分时，应考虑哪些因素？</p><p>​ 首先阐述 Linux 权限的主要对象</p>`,24),t=[o];function e(c,r,C,y,D,A){return n(),a("div",null,t)}const d=s(l,[["render",e]]);export{F as __pageData,d as default};
