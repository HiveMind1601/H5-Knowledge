###JS 的编译与执行

疑问1：为什么变量不可前置(undefined);

预解析时 会给变量赋值undefined

```javascript

alert(a);//undefined
	var a=10;
	alert(a);//10

```

疑问2：为什么函数可以在代码的前后随时随地调用;

预解析时 会把函数体赋值给函数名

```javascript

a();//1
function a(){
	alert(1);
}
a();//1

```

JS的编译和执行

一.预编译:浏览器逐行执行代码之前。

1 .查找var和function关键字。

2. 找到var提前赋值undefined给变量名,如果找到function，将整个函数体赋值给函数名。

3. 如果函数名和变量名重名，函数优先。

4. 函数内部同样要做js的预解析。

5. 当函数被调用时fn();,显示函数里面的代码,例如:alert(1)之类的;当遇到alert(fn())时就是显示1 undefined,因为函数没有返回值(return)当你去alertfn()时,没有返回值就会暴露出来,如果你不去alert(输出他)他就不会显示出来,但是他时一直存在的;	

二.逐行执行:浏览器开始安装顺序逐行执行代码，普通函数定义直接跳过

```javascript

alert(num);//undefined
var num=10;
alert(num);//10
function fn(){ 
	alert(num);//undefined
	var num=100;
	alert(num);//100
}
fn();
alert(fn);//function fn(){alert(num);var num=100;alert(num);}
alert(fn());//undefined 100 /undefined(函数没有返回值(return))

```
```javascript

alert(a);//function a(){alert(5);}
 a();//5
 alert(a());//5 undefined
var a=1;
alert(a);//1
var a=function(){
	alert(2);
}
alert(a);//undefined(错了)//function(){alert(2);}(正确)/var a 啊!给a定义了/
function a(){
	alert(3);
}
alert(a);//undefined(错了)//function(){alert(2);}(正确)/var a 啊!给a定义了/
var a=4;
alert(a);//4
function a(){
    alert(5);
}
alert(a);//4

```
