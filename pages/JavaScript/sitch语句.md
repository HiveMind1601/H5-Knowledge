###switch语句

1. 程序的多分支结构 switch语句\break语句

switch 语句与 if 语句的关系最为密切，而且也是在其他语言中普遍使用的一种流程控制语句。
		
2. switch适合多分支。

switch基本控制结构
		
		/*switch(value){
			case 值1: 语句块1;  break;
			case 值2: 语句块2;  break;
			case 值3: 语句块3;  break;
			case 值4: 语句块4;  break;
			case 值5: 语句块5;  break;
			......
			default:语句块;
		}

3. 利用switch括号里面的value和case后面的值进行比较，恒等的比较(值和类型都相等)，如果值相等，执行此case后面的语句块。

4. berak:终止switch语句(case具有穿透力)，没有break，代码继续往下执行。

5. default:等同于else语句，代表其他的情况，和else一样也可以省略不写。

6. 注意case向下的穿透力，switch语句case穿透力影响输出。