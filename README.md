# img_lazyout
### form 关于来源
	根据网上一朋友分享的代码改编，已经找不到原出处了，请谅解。  

### 关键点：  
* 0：利用data-src的自定义属性；
* 1：可视区域的计算；
* 2：文档加载完成，和滚动的时候的事件监听；
* 3：图片需要设置高度或者最低高度(可用背景图片或者占位图撑开)；
* 4：从下往上滚动时候的特殊情况处理；
* 5：图片可用默认的gif加载图，可以是1px的占位图  

### 一些坑：
如果客户端 ：安卓&ios采用html5页面的时候需要注意以下
* 0：宿主webview环境的不同  
* 1：是否能够执行 监听函数(曾遇到安卓不调用滚动监听函数)
* 2：获取的高度是否需要转换成数值(曾遇到ios获取元素的高度无法直接参与计算)
* 3：安卓是否需要考虑分辨率，以乘以分辨率倍数。(曾遇安卓获取元素高度坑) 

