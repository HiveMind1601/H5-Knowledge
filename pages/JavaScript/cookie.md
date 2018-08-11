##cookie
1. 服务器的介绍
如何访问服务器里面的内容--通过下面的两种方式都可以访问服务器里面的内容
1.域名--网址--localhost本地主机，本地域名
2.ip地址访问--127.0.0.1本地的ip地址

2. cookie的添加,获取,删除
概念:Cookie又叫会话跟踪技术是由Web服务器保存在用户浏览器上的小文本文件，它可以包含相关用户的信息
cookie是字符串
存储cookie,自定义key和value
Cookie名称和值可以由服务器端开发自己定义
如果cookie不存在，输出undefined
ocument.cookie规定必须用这个把cookie写入控制台
```javascript
封装添加cookie（expires=过期时间）
function addcookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+'='+encodeURI(value)+';expires='+d;
}

封装获取cookie
function getcookie(key){
	var arr=decodeURI(document.cookie).split('; ');//将cookie拆分成数组
	for(var i=0;i<arr.length;i++){//遍历数组
		var newarr=arr[i].split('=');//继续拆分数组的每一项
		if(newarr[0]==key){
			return newarr[1];
		}
	}
}

封装删除cookie
删除cookie:设置cookie，然后将过期时间设置成过去了的时间。
function delcookie(key){
	addcookie(key,'',-1);
}
```

3. 特殊情况：数组和对象
```javascript
var arr=['zhangsan','wangwu','lisi'];
addcookie('name',arr.toString(),1);//最好加上toString,进去是string,出来也是string
addcookie('name',arr,1);//强行把数组转化成字符串
console.log(typeof getcookie('name'));//string

var obj={
		username:'张学友',
		password:'123456789',
		tel:'13945678945'
	}
addcookie('message',obj.toString(),1);
console.log(getcookie('message'));//[object Object]//toString对对象无效

1.JSON.stringify():将json格式的对象转化成字符串
addcookie('message',JSON.stringify(obj),1);
console.log(typeof getcookie('message'));//string
2.JSON.parse();将json格式的字符串转化成对象,具有json检测功能,字符串必须是json格式,否则报错
var obj1=JSON.parse(getcookie('message'));
alert(obj1.password);//123456789
```