##BOM
1. Browser Object Model 浏览器对象模型，用来描述与浏览器进行交互的方法和接口。
2. BOM提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关
3. window对象下面子对象的属性和方法或者说直接的window下面的属性和方法
```javascript
window下面的子对象：
1. location对象
(window.)location.href:读写地址栏里面的内容
reload(true)方法   刷新页面,如果参数为true,通过缓存刷新
search:获取地址栏的？后面的数据，包括？
地址栏传输数据内容的,利用？号加上&将数据拼接到地址栏后面方便获取或者传输
2. navigator对象
userAgent  用户代理信息，通过该属性可以获取浏览器及操作系统信息
```
~
4. window事件
>1. window.onload:页面内容加载完成（DOM结构，图片.....）
2. window.onscroll:拖动浏览器的滚动条触发此事件,注意触发频率
3. window.onresize:浏览器窗口缩放所触发的事件.触发频率比onscroll少一些

~
5. 可视区
文档所见的区域。document文档你所见的范围
```javascript
可视区宽高：
document：文档
document.body:body元素
document.docuemntElement:html元素
alert(document.documentElement)
document.documentElement.clientWidth:宽
document.docuemntElement.clientHeight:高
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.body.clientWidth);//body的区域
```

6. 滚动条的距离
```javascript
window.onscroll=function(){
    console.log(document.documentElement.scrollTop);//chrome firefox  IE9
    console.log(document.body.scrollTop);//IE。
    console.log(document.documentElement.scrollTop||document.body.scrollTop);//最全的兼容
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;	
}

IE6/7/8/9/10：
对于没有doctype声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop高度 ；
对于有doctype声明的页面则可以使用 document.documentElement.scrollTop  ；
Safari:
safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ；
Firefox:
火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop 
```
~
7. 定时器
定时器：模拟异步
同步(阻塞)：代码按照一定的顺序执行。
异步(非阻塞)：代码各自执行
```javascript
setInterval(函数名称，时间)；间隔定时器(反复调用)
clearInterval( 定时器的返回值 );  停止定时器

setTimeout(函数名称，时间); 延时定时器，只触发一次
clearTimeout( 定时器的返回值 ); 停止定时器

0和1时间不做比较，按照顺序。
console.log(4);

setTimeout(function(){
	console.log(2);
},1)

setTimeout(function(){
	console.log(1);
},0)

console.log(3);
		
4,3,2,1
```

##DOM
1. 对元素的默认属性进行读写操作
```javascript
1.获取元素的默认属性(点操作符)
var oA=document.querySelector('a');
alert(oA.title);
alert(oA.target);
alert(oA.name);
2.修改元素的默认属性
var oA=document.querySelector('a');
oA.title='我是新的标题';
oA.name='新的name值';
```
~
2. 元素的自定义的属性进行操作
```javascript
1.我们无法利用点操作符获取元素的自定义属性，除非自定义属性也是通过点操作符设置。但是标准浏览器无法查看，通过ie8浏览器查看

2. 利用getAttribute等方法获取写在元素里面的自定义属性，同时也能够获取默认的属性
var oA=document.querySelector('a');
获取
alert(oA.getAttribute('title'));
alert(oA.getAttribute('xxx'));

设置
oA.setAttribute('aaa','bbb');

删除
oA.removeAttribute('aaa');

应用：同时给8个li添加自定义的编号。(自定义的索引)
第一种方法：利用js的点操作符 
var aLi=document.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
	aLi[i].a=i;
}
alert(aLi[5].a);//5
第二种方法：setAttribute
var aLi=document.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
	aLi[i].setAttribute('a',i);
}
alert(aLi[5].getAttribute('a'));//5
```
~
3. 获取元素
查询（获取元素）--常用的方式获取元素
```javascript
1.document.getElementById(id的名称):在当前的文档下面，通过id获取元素

2.getElementsByTagName(标签的名称):通过标签名获取元素，获取的是多个，类数组

3.getElementsByClassName();  iE8不支持，不常用

元素的类名是通过className进行获取，不是class,因为class在js里面代表类。（有其他的用途
）
4.getElementsByName()：通过name值获取元素,适用于表单

5.最佳的获取元素的方式。类似于通过css选择器获取元素

querySelector()： 通过选择器获取元素，如果获取多个只返回第一个。

querySelectorAll()： 通过选择器获取元素，可同时获取多个元素。

单个元素--元素对象

getElementById() 最好的

document.querySelector()  使用最多√

多个元素--类数组的形式同时获取多个元素对象

getElementsByTagName()

document.querySelectorAll()
```
~
4. 创建元素，追加元素，插入元素，删除元素
```javascript
1.创建元素--createElement('元素名')
2.追加元素--appendChild(子元素):将当前的元素放置在父元素的内部的下面
3.document.createTextNode()  创建一个文本节点
var oBox=document.querySelector('div');
oBox.innerHTML='<em>111111111111111</em>';
4.obj.cloneNode() 克隆(复制)obj节点，可以传一个布尔值为参数，如果参数为true，连同obj子元素一起克隆
5.obj.replaceChild(新添加的节点 , 被替换的节点)  替换子节点  obj指代的是父元素
```
~
5. 
innerHTML：读写元素节点里的内容，从节点的起始位置到终止位置的全部内容,包括内部的元素
outerHTML：除了包含innerHTML的全部内容外, 还包含元素节点本身
innerText：获取某个元素节点的文本内容
~
6. 读写元素对象的css属性及值
点操作符是无法获取选择器里面的属性值,能够获取内联样式的属性值
```javascript
1.通过系统提供的属性词，读取css属性及值(没有单位)
offsetWidth/offsetHeight:盒模型的宽高,没有单位的。  width+padding+border
offsetLeft/offsetTop:获取元素对象的偏移值,绝对的位置，没有单位的。
offsetParent:获取定位父级

offsetLeft/offsetTop:获取元素对象的偏移值,绝对的位置。
如果存在定位父级，就是离定位父级的距离，否则就是到body的距离。

2.获取任意的css属性(带单位)
标准浏览器：getComputedStyle(元素对象)['属性名'];  带单位
IE8及以下：元素对象.currentStyle['属性名']

封装兼容
function getstyle(obj,attr){
	/*if(window.getComputedStyle){//window.getComputedStyle在标准浏览器下是true的
		return getComputedStyle(obj)[attr];
	}else{//window.getComputedStyle在IE8下是undefined,变成布尔值是false
		return obj.currentStyle[attr];
	}*/
	return window.getComputedStyle?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}

3. 写入css属性及值---元素对象.style[css属性]=值
oBox.style['width']=1000+'px';
oBox.style.fontSize=100+'px';
```
~
7. 文档碎片（优化）
```javascript
创建100个li
var oUl=document.querySelector('ul');
var fragment=document.createDocumentFragment();//创建文档碎片
for(var i=0;i<100;i++){
	var cLi=document.createElement('li');//创建一个
	cLi.innerHTML=(i+1);
	fragment.appendChild(cLi);//将创建的li追加到文档碎片中
}
oUl.appendChild(fragment);//追加一次

最好的方式：拼接
var str='';
var oUl=document.querySelector('ul');
for(var i=0;i<100;i++){
	str+='<li>'+(i+1)+'</li>';
}
oUl.innerHTML=str;
```
~
8. DOM元素类型
1.节点可以分为元素节点、属性节点和文本节点...，他们分别用不同的数字代表类型
例如：元素(1) 属性(2) 文本(3)
每个元素节点又有三个非常有用的属性，分别为：nodeName、nodeType、nodeValue
```javascript
var oBox=document.querySelector('.box');
alert(oBox.nodeName);//节点名称：DIV
alert(oBox.nodeType);//节点的类型：1
alert(oBox.nodeValue);//节点的值：null
```
 2.childNodes节点的集合--类数组
childNodes 获取当前元素节点的所有子节点,这里面包含空白节点，但在IE9之前，IE浏览器会自动忽略空白节点
firstChild/firstElementChild 获取当前元素节点的第一个子节点
lastChild/lastElementChild 获取当前元素节点的最后一个子节点
previousSibling/previousElementSibling 获取当前节点的前一个兄弟节点
nextSibling/nextElementSibling获取当前节点的后一个兄弟节点
ownerDocument 获取该节点的文档根节点（document）
```javascript
var oUl=document.querySelector('ul');
alert(oUl.ownerDocument);//[object HTMLDocument]
alert(document.body.ownerDocument);//[object HTMLDocument]
alert(document.documentElement.ownerDocument);//[object HTMLDocument]
```


