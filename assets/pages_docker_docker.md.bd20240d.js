import{_ as s,c as a,o as l,Q as o}from"./chunks/framework.8dca3095.js";const A=JSON.parse('{"title":"容器","description":"","frontmatter":{"title":"容器","order":3},"headers":[],"relativePath":"pages/docker/docker.md","lastUpdated":1681372154000}'),n={name:"pages/docker/docker.md"},e=o(`<h2 id="容器命令" tabindex="-1">容器命令 <a class="header-anchor" href="#容器命令" aria-label="Permalink to &quot;容器命令&quot;">​</a></h2><h3 id="docker-run" tabindex="-1">docker run <a class="header-anchor" href="#docker-run" aria-label="Permalink to &quot;docker run&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IMAGES</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">command</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ARG...</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>options说明（常用）：有些是一个减号，有些是两个减号</p><table><thead><tr><th>--name=&quot;容器新名字&quot;</th><th>为容器指定一个名称</th></tr></thead><tbody><tr><td>-d</td><td>后台运行容器并返回容器ID，也即启动守护式容器（后台运行）</td></tr><tr><td>-i</td><td>以交互模式运行容器，通常与-t同时使用</td></tr><tr><td>-t</td><td>为容器重新分配一个伪输入终端，通常与-i同时使用</td></tr><tr><td>-P</td><td>随机端口映射，大写P</td></tr><tr><td>-p</td><td>指定端口映射，小写p</td></tr></tbody></table><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/bash</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#用ubuntu镜像运行一个docker容器</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name=myubuntu</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#用ubuntu镜像运行一个docker容器，并命名为myubuntu</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#查看运行的容器</span></span>
<span class="line"><span style="color:#FFCB6B;">CONTAINER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ID</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">IMAGE</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">COMMAND</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">CREATED</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">STATUS</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">PORTS</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">NAMES</span></span>
<span class="line"><span style="color:#FFCB6B;">db539c10ea38</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">ubuntu</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">29</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seconds</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Up</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seconds</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">myubuntu</span></span>
<span class="line"><span style="color:#A6ACCD;">371c4c119465   ubuntu</span><span style="color:#89DDFF;">    &quot;</span><span style="color:#C3E88D;">/bin/bash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> minutes ago    Up </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> minutes              gifted_kare</span></span></code></pre></div><p>参数说明：</p><p>-i：交互式操作</p><p>-t：终端</p><p>ubuntu：ubuntu镜像</p><p>/bin/bash：放在镜像后的是命令，这里我们希望有个交互式shell，因此用的是 /bin/bash</p><p>要退出终端，直接输入exit</p><h3 id="docker-ps" tabindex="-1">docker ps <a class="header-anchor" href="#docker-ps" aria-label="Permalink to &quot;docker ps&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>options说明（常用）：</p><table><thead><tr><th>-a</th><th>列出当前所有正在运行的容器+历史上运行过的</th></tr></thead><tbody><tr><td>-l</td><td>显示最近创建的容器</td></tr><tr><td>-n i</td><td>显示最近创建的i个容器</td></tr><tr><td>-q</td><td>静默模式，只显示容器编号</td></tr></tbody></table><h3 id="退出容器" tabindex="-1">退出容器 <a class="header-anchor" href="#退出容器" aria-label="Permalink to &quot;退出容器&quot;">​</a></h3><table><thead><tr><th>exit</th><th>run进去容器，exit退出，容器停止</th></tr></thead><tbody><tr><td>ctrl+p+q</td><td>run进去容器，ctrl+p+q退出，容器不停止</td></tr></tbody></table><h3 id="docker-start" tabindex="-1">docker start <a class="header-anchor" href="#docker-start" aria-label="Permalink to &quot;docker start&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID或者容器名</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#启动已停止运行的容器</span></span></code></pre></div><h3 id="docker-restart" tabindex="-1">docker restart <a class="header-anchor" href="#docker-restart" aria-label="Permalink to &quot;docker restart&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID或者容器名</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#重启容器</span></span></code></pre></div><h3 id="docker-stop" tabindex="-1">docker stop <a class="header-anchor" href="#docker-stop" aria-label="Permalink to &quot;docker stop&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID或者容器名</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#停止容器</span></span></code></pre></div><h3 id="docker-kill" tabindex="-1">docker kill <a class="header-anchor" href="#docker-kill" aria-label="Permalink to &quot;docker kill&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID或者容器名</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#强制停止容器</span></span></code></pre></div><h3 id="docker-rm" tabindex="-1">docker rm <a class="header-anchor" href="#docker-rm" aria-label="Permalink to &quot;docker rm&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#删除已停止的容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps -aq</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#删除所有已停止的容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#强制删除容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps -aq</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#强制删除所有容器，慎用</span></span></code></pre></div><h3 id="docker-logs" tabindex="-1">docker logs <a class="header-anchor" href="#docker-logs" aria-label="Permalink to &quot;docker logs&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#查看容器日志</span></span></code></pre></div><h3 id="docker-top" tabindex="-1">docker top <a class="header-anchor" href="#docker-top" aria-label="Permalink to &quot;docker top&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">top</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#查看容器内运行的进程</span></span></code></pre></div><h3 id="docker-inspect" tabindex="-1">docker inspect <a class="header-anchor" href="#docker-inspect" aria-label="Permalink to &quot;docker inspect&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inspect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#查看容器内部细节</span></span></code></pre></div><h3 id="进入正在运行的容器" tabindex="-1">进入正在运行的容器 <a class="header-anchor" href="#进入正在运行的容器" aria-label="Permalink to &quot;进入正在运行的容器&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it 容器ID bashShell #</span></span>
<span class="line"><span style="color:#A6ACCD;">docker attach 容器ID #</span></span></code></pre></div><p>attach直接进入容器启动命令的终端，不会启动新的进程。用exit退出，会导致容器的停止。</p><p>exec是在容器中打开新的终端，并且可以启动新的进程。用exit退出，不会导致容器的停止。</p><p>推荐使用docker exec 命令，因为退出终端，不会导致容器停止</p><h3 id="docker-cp" tabindex="-1">docker cp <a class="header-anchor" href="#docker-cp" aria-label="Permalink to &quot;docker cp&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker cp 容器ID:容器内路径 目的主机路径</span></span></code></pre></div><h3 id="容器的备份和还原" tabindex="-1">容器的备份和还原 <a class="header-anchor" href="#容器的备份和还原" aria-label="Permalink to &quot;容器的备份和还原&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器ID</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件名.tar</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#导出容器的内容留作为一个tar归档文件[对于import命令]</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">文件名.tar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">镜像用户/镜像名:镜像版本号</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#从tar包中的内容创建一个新的文件系统再导入问镜像[对应export]</span></span></code></pre></div><h2 id="docker镜像" tabindex="-1">docker镜像 <a class="header-anchor" href="#docker镜像" aria-label="Permalink to &quot;docker镜像&quot;">​</a></h2>`,47),t=[e];function p(c,r,C,i,d,y){return l(),a("div",null,t)}const h=s(n,[["render",p]]);export{A as __pageData,h as default};
