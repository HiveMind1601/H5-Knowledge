1. 获取事件对象
标准浏览器:事件处理函数的第一个参数
IE8:默认的事件对象  window.event
IE8:默认的事件对象  window.event
```javascript
document.onclick=function(ev){
	var ev=ev||window.event;
	console.log(ev);
}
```
~
2. event下面的属性与方法
```javascript
1.button属性介绍:标准浏览器的鼠标事件，会有一个button属性，它是一个数字，代表鼠标按键
2.which属性：获取鼠标和键盘对应的unicode编码。IE8不支持
3.获取鼠标的位置属性
clientX,clientY：鼠标相对于可视区的位置
pageX,pageY：鼠标相对于文档的位置
screenX,screenY：鼠标相对于显示屏的位置.
offsetX,offsetY：鼠标相对于操作元素(鼠标点击元素)到元素边缘(左上)的位置.
4.键盘编码
keyCode、which都能够获取键盘按键对应的unicode编码
```
~
3. 事件冒泡
两大浏览器公司：netscape网景      microsoft微软
网景：事件捕获
微软：事件冒泡
事件流：事件流描述的是从页面中接收事件的顺序
产生事件冒泡：事件类型一致。而且从子元素往父元素上面进行传递。从最具体的到最不具体的,冒泡是一直存在的
取消冒泡：让当前操作的具体元素对象（冒泡元素）的事件不会冒泡到父级（外层）
```javascript
if(ev.stopPropagation){
	ev.stopPropagation();//标准
}else{
	ev.cancelBubble=true;//非标准
}
```
~
4. 事件绑定
普通事件(DOM 0级事件):一个元素对象上面只能绑定一个函数，绑定多个会出现覆盖
事件绑定(DOM 2级事件,事件侦听,事件监听):一个元素对象上面只能绑定多个函数
>标准-----元素对象.addEventListener(事件类型,函数名,是否捕获);
非标准IE--元素对象.attachEvent(事件类型,函数名);
```javascript
封装函数实现事件绑定的兼容
function addEvent(obj,etype,fn,bool){
	if(obj.addEventListener){
		obj.addEventListener(etype,fn,bool);//false:冒泡
	}else{
		obj.attachEvent('on'+etype,fn);
	}
}
```
重点：
IE和DOM(标准浏览器)事件的区别。
1.参数不一致。
2.执行顺序不一致，IE是反向输出。
3.事件类型标准浏览器无需添加on，IE要求添加on
4.内部的this指向不一样。  标准下面指向当前的元素，非标准指向window

所有的普通事件都可以使用事件监听来完成，但是反之不行

事件的取消
DOM 0级事件取消   document.onclick=null;
DOM 2级事件取消：
标准：removeEventListener
非标准：detachEvent
注意：移除事件监听的参数和添加事件监听的参数是一致的
```javascript
function removeEvent(obj,etype,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(etype,fn,false);
	}else{
		obj.detachEvent('on'+etype,fn);
	}
}
```
~
5. 事件捕获
事件流的顺序：捕获阶段--目标阶段--冒泡阶段

6. 事件委托
利用冒泡原理,子元素的事件委托给父元素
ev.target || ev.srcElement;//通过兼容的方式获取当前操作的元素