# domNode
## 业务需求
- 分析网站的DOM结构，检测网站的DOM结构变化，好让通过`xpath`进行爬虫的工具可以提前知道网站结构的变化。

## 功能实现
- 输入一个网站，点击确定之后分析此网站，输出此网站的DOM树结构(html -> body), render树结构，渲染树结构(先从DOM结构入手)。