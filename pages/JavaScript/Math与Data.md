###Math内置对象的常见API

1. Math.round( ):四舍五入取整

2. Math.random( ):随机取0-1内的数字,包括0不包括1

```javascript
Math.random()>0.5 会经常使用,叫两极分化
Math.random()>0.5实现乱序	
var arr=[0,1,2,3,4,5,6,7,8,9];
	console.log(arr.sort(function(){
	return Math.random()>0.5? 1 : -1;
}));
```
~

3. Math.ceil()/Math.floor():向上向下取整。

```javascript
随机数如何设定范围（封装函数）
function ranNum(min,max){
	//return Math.round(Math.random()*(max-min)) + min;
	return Math.floor(Math.random()*(max-min+1)) + min;
}
for(var i=0;i<10000;i++){
	document.write(ranNum(2,6));//随机产生2-6的随机数。
}
*document.onclick=function(){
	document.body.style.background='rgb('+ranNum(0,255)+','+ranNum(0,255)+','+ranNum(0,255)+')';
}
setInterval(function(){
	document.body.style.background='rgb('+ranNum(0,255)+','+ranNum(0,255)+','+ranNum(0,255)+')';
},1000);
```
~

4. Math.max()/Math.min():求括号里面的数值的最大值和最小值，参数是一个一个的数字。

```javascript
如果数组想用这个方法：
var arr=[25,86,5,789,4];
console.log(Math.max(...arr));//...运算符：将数组转换成一个一个的值
```
~
5. Math.sqrt():开根号/Math.pow()：求幂 /Math.abs()：求绝对值

~
6. Math.PI : 代表π

7. 三角函数

1.js没有角度的概念，有弧度的概念。

2.数学公式：x,y代表的是盒子的位置。

3.Math三角函数：Math.sin()/Math.cos()

4.角度和弧度的转换。2π==360deg

1弧度=Math.PI/180

```javascript
alert(Math.sin(30*Math.PI/180));//0.49999999999999994
```

圆的方程：(a,b圆心的位置)
top1=b+Math.sin(deg*Math.PI/180)*r;  
left1=a+Math.cos(deg*Math.PI/180)*r;  

8. 勾股定理
1.勾股定理：c=Math.sqrt(a*a+b*b);

9. 日期对象
```javascript
var d=new Date();
console.log(d);//自动获取当前的系统时间。
Thu Jul 26 2018 15:24:24 GMT+0800 (中国标准时间)
console.log(d.toLocaleString())//将时间用本地字符串的方式显示   
2018/7/26 下午3:26:52
alert(d.getTime());//1970-1-1   1532591067889
			
日期对象下面的方法

1.获取年月日时分秒
getYear():获取的是1900年到当前年份的差值   118
getFullYear():获取四位年份
getMonth():0-11 获取的月份+1
getDate():获取日期
			
getDay():获取星期，数字展示 0-6     星期日-星期六
getHours():时
getMinutes():分
getSeconds():秒
			
getTime():获取1970年1月1日午夜离当前时间的毫秒数。
			
将上面的get改成set全部变成设置时间。
setFullYear/setMonth/setDate/setDay/setHours/setMinutes/setSeconds
```

1.通过字符串设置日期
```javascript
var d=new Date();
console.log(d);
利用数字设置，月份自动+1
var d1=new Date(2018,10,1,12,12,12);
	console.log(d1);
	console.log(d1.toLocaleString());//2018/11/1 下午12:12:12
			
数字设置日期，自动进位
var d1=new Date(2018,14,1,12,12,12);
	console.log(d1);
	console.log(d1.toLocaleString());//2019/3/1 下午12:12:12
			
利用字符串设置日期。
var d2=new Date('2018/10/1 13:24:56');
	console.log(d2);
	console.log(d2.toLocaleString());//2018/10/1 下午1:24:56
			
var d3=new Date('2018-10-1 13:24:56');
	console.log(d3);
	console.log(d3.toLocaleString());//2018/10/1 下午1:24:56
			
var d4=new Date('2018/14/1 13:24:56');
	console.log(d4);
	console.log(d4.toLocaleString());//Invalid Date  月份=14*/
			
日期转为毫秒数--getTime()
var d=new Date('2018/10/1 13:24:56');
	console.log(d.getTime());*///1538371496000
			
日期相减得到的结果也是毫秒数。
```