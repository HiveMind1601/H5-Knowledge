1. PHP（外文名:PHP: HypertextPreprocessor，中文名：“超文本预处理器”）是一种免费开源的服务器端脚本程序。利于学习，使用广泛，主要适用于Web开发领域
2. php设置编码
```PHP
	header('content-type:text/html;charset=utf-8');
```
~
3. php的变量和常量(松散类型)
定义变量：$
定义常量--第一个参数尽量大写,第二个参数常量值
```PHP
define('USERNAME', 'shary');
echo USERNAME;
```
~
4. 变量的八大数据类型
```PHP
四种标量类型
1.integer整型
2.float（double)浮点型
3.string
(1).变量在双引号里面可以解析
    $num=10;
    echo "数字是:$num";//数字是:10
(2).连接符号采用点来实现
    $str='hi';
    $str1='he';
    echo $str.$str1;//hihe
4.boolean
    true   是 1
    false  是  空白啥都没有

两种复合类型
1.array:数组类型
(1).array创建的两种写法
	$arr=array('apple',true,100,'orange');
	$arr1=Array('name'=>'zhangsan','age'=>'100','sex'=>'男');//自定义下标
(2).range()：建立一个包含指定范围单元的数组
(3).数组遍历
	默认下标的可以用 for / foreach 遍历数组
	for($i=0;$i<sizeof($arr);$i++){
	    echo $arr[$i].'--';
    }
	自定义下标用 foreach对数组遍历
    foreach() 提供了遍历数组的简单方式,仅能够应用于数组和对象
	foreach ($arr1 as $key => $value) {//$key:数组的下标    $value:数组项的值
	    echo $key .'---'.$value.'<br>';
    }
(4).数组方法
	count()和 sizeof()（别名） 统计数组下标的个数，数组的长度
	array_count_values() 统计数组中所有的值出现的次数
	array_push() 函数将每个新元素添加到数组的末尾。
	array_unshift() 函数将新元素添加到数组头
	array_shift()删除数组头第一个元素，与其相反的函数是
	array_pop(),删除并返回数组末尾的一个元素
	sort() 数组排序
	第一个参数是变量，第二个参数是根据数字/字母升序排序     sort($arr,SORT_NUMERIC);
	array_unique()  移除数组中重复的值(生成新数组)
	
2.object:对象

两种特殊类型
1.resource（资源）：资源是由专门的函数来建立和使用的，例如打开文件、数据连接、图形画布
    $fp=fopen('php.txt','r');//打开文件，r:read  w:write
    $fr=fread($fp, 30);
    echo gettype($fp);//resource
    echo $fr;
2.NULL:相当于js里面undefined
	$hehe;
    echo @gettype($hehe);//null    @:忽略警告。
    $hehe1=null;
    echo gettype($hehe1);//null
```
~
5. 检查变量
```PHP
settype( )  可以改变变量的类型
	$n=1;
    settype($n,'string');
    echo gettype($n);//string
	第一个参数是变量，第二个是要变成的类型
	
gettype( )  检查变量的类型

isset( )	检测括号里面的变量是否存在，返回布尔值
```

~
6. php输出
```PHP
四种：echo、print、print_r、var_dump

echo:等同于js里面的document.write();

echo 和 print意义基本一致，但是print有返回值，两个函数后面的括号都可以省略
echo('hello,php');
echo print('hello,php');  //返回值1

print_r:输出变量易于理解的信息,数组最好的输出方式

var_dump:输出变量详细的信息
```
~
7. php的函数
```PHP
1.函数无法获取函数外部的变量，同时函数内部的变量函数外面也无法获取。函数形成一个独立的块作用域
2.设置全局变量。 变量的前面添加global关键字，而且全局变量的声明和赋值分开进行
	当你在函数内部设置全局变量时，函数外部是可以获取到的
	当你在函数外部设置全局变量时，函数内部时无法获取这个全局变量的
3.设置超级全局变量-采用数组的方式
	$GLOBALS['num1']=10;
    function fn(){
    	echo $GLOBALS['num1'];//10
    }
    fn();
    echo $GLOBALS['num1'];//10
4.php常用的超级全局变量
	$_GET['name']:获取通过get方式提交的数据
	$_POST['name']:获取通过post方式提交的数据
	$_REQUEST['name']:get和post都可以
```
~
8. 对比get与post
```PHP
get提交方式：
将数据通过?和&拼接到地址栏后面。
安全性不好，长度大小有限制。
还可以直接通过地址栏进行更改。

post提交方式：
不会泄露信息在地址栏中,更安全一些
大小在4M左右

必须通过表单，通过name值将表单的结果给后端
```