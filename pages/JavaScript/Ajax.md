##Ajax

1. ajax：异步的JavaScript和XML
```javascript
常用数据接口：
1.json格式
2.xml格式

第三方接口具有两种数据类型：json格式，xml格式

本地后端接口：json格式

```
~
2. 为什么学习ajax
```javascript
1. 通过后端与服务器进行少量的数据交换，Ajax可以使网页实现异步刷新
2. 可以把以前由服务器负担的工作转移到客户端，利用客户端的闲置资源进行处理，减轻服务器·和带宽的负担，节约空间和成本
```
~
3. ajax的优势与弊端
```javascript
优势：
1. 最大的一点是页面无刷新（定时器异步不断请求），在页面内与服务器通信，给用户体验非常好
2. 使用异步方式与服务器通信，不需要打断客户的操作，具有更加迅速的响应能力
3. 可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担
4. 基于标准化的并被广泛支持的技术，不需要下载插件或小程序

弊端：
1. ajax干掉了back按钮，即对浏览器后退机制的破坏
2. 安全问题
3. 对搜索引擎的支持比较弱
4. 破坏了程序的异常机制
5. 另外，像其他方面的一些问题，比如说违背了url和资源定位的初衷。例如，有一个url地址，如果采用了ajax技术，也许在该url地址下面看到的和别人在这个url地址下看到的内容是不同的。这个和资源定位的初衷是相背离的
6. 一些手持设备（如手机、PDA等）现在还不能很好的支持ajax，如手机的浏览器上打开采用ajax技术的网站时，它目前是不支持的
```
~
4. ajax编写步骤
```javascript
1.创建ajax对象
var ajax=new XMLHttpRequest();
var ajax = new ActiveXObject("Microsoft.XMLHTTP");    ---IE6一下的兼容写法
兼容写法
var ajax=null;
try{
    ajax=new XMLHttpRequest();
}catch(e){
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
}

2.ajax对象下面的open方法
	参数1：请求方式 ：get / post / （put / delete （不常用了））
	参数2：接口地址 -- 完整的路径
	参数3：是否异步 --- false 同步 / true 异步
3.ajax对象下面的send方法（解析和发送）
	解析的核心：readyState：就绪状态码
		0 （初始化）
		1 （请求建立）
		2 （发送完成）
		3 （解析）
		4 （完成）
	就绪状态码解析
		0 ：请求初始化（还没调用 open（））
		1：请求已建立但还没有发送（还没调用 send（））
		2：请求已发送，正在处理中（通常现在可以从响应中获取内容）
		3：请求在处理中，通常响应中以有部分数据可用，但服务器还没有完成响应的生成
		4：响应已完成，你可以获取并使用服务器的响应
4.事件，监听ajax.send下面的就绪状态码
```
~
5. 容错
```javascript
try...catch...finally
	如果try有错误，执行catch，catch的参数就是错误信息，finally一定会执行
try{
	alert(a);
}catch(e){
	alert('b');
	alert(e);//referenceError: a is not defined
}finally{
	alert('finally反正都会执行');
}
```
~
6. 错误解读
```javascript
错误解读--JSON.parse()方法具有数据格式检测功能造成的，数据不是json格式的。
Uncaught SyntaxError: Unexpected token < in JSON at position 0
```
~
7. get与post的区别
```javascript
安全和长度
get方式(和安全无关,长度符号要求)    通过地址栏?key1=value1&key2=value2...
	
post传输数据，将数据放到send里面。
    POST：直接传送数值，但需要申明发送的数据类型（请求头）
    ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
```
~
8. http状态码
```javascript
HTTP状态码（HTTP Status Code）是用以表示网页服务器HTTP响应状态的3位数字代码
	200 OK ：代表成功
	304 ：Not Modified 没有修改，缓存里面获取
	404 ：Not found 没有找到
	5开头的 服务器错误
```
~
9. 请求地址成功后
```javascript
字符串请求
	ajax.responseText  字符串
xml请求
	var xmldoc=ajax.responseXML;//xml文档
```