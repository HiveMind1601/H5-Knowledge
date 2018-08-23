开始准备
1.安装 
2.进入 
mysql -u root -p 
回车输入密码(5.7 默认没有密码)

3.创建数据库 
create database lovesosoi; 
use lovesosoi

4.创建表

create table people(
    id int primary key auto_increment,
    name varchar(50),
    age int
)default charset utf8;
default charset utf8防止汉字读不出来        

数据操作
关键字
insert 插入数据
update 修改数据
delete 删除数据
select 查询数据
插入数据 
insert into people(id,name,age)values(null,'lovesosoi',18); 
insert into people(id,name,age)values(null,'lovesosoi',19); 
语句分析： 
insert into 表名(列名1,列名2,列名3)values(值1,值2,值3); 
注意： 
字符串加引号

查找数据 
全部查找 
select * from people; 
指定查找 
select * from people where age=18; 
指定多条件 
select * from people where age=18 and name ='lovesosoi'; 
选择条件 
select * from people where age=18 or name ='lovesosoi'; 
查询指定范围内数据
select * from 表名 where 字段 in（4，5，6，7，8，9）查询指定字段
select * from 表名 where 字段 between 60 and 80;
限制条数 
select * from people where age=19 limit 3; 
select * from people limit 3; 
按序查找(desc 从大到小 asc 从小到大) 
select * from people order by age desc; 
语句分析： 
order by固定词组 age 是 排序的列名 desc/asc desc 从大到小 asc 从小到大 
按序限制条数 
select * from people order by age desc limit 3; 
查找指定列 
select age,name from people; 
模糊查询 
SELECT * FROM people WHERE name LIKE '%soso%'; 
注意： 
%soso 表示代码以soso开头的, %soso% 包含soso, soso% 以soso结束的

修改数据 
update people set name='shibaba' where age =18; 
语句分析： 
update 表名 set 列名1 = 新值1 where 限定条件 
注意： 
一般修改时都会加上限定条件

删除数据 
删除所有 
delece from people; 
指定删除 
delete from people where age =18;

表其他操作
删除表 
drop table people; 
语句分析： 
drop table 表名 
注意： 
使用需谨慎
删除数据库 
drop database lovesosoi; 
语句分析： 
drop database 数据库名 
注意： 
*使用需谨慎 *
修改表结构 
增加列 
ALTER TABLE people ADD location VARCHAR(20); 
删除列 
ALTER TABLE people DROP location; 
修改字段类型 
ALTER TABLE people MODIFY location INT; 
修改字段名 
ALTER TABLE people CHANGE location num INT;
其他：
展示所有表 
show tables; 
展示所有数据库 
show databases 
使用数据库 
use lovesosoi 
查看表结构 
desc people 
聚合函数使用（初级） 
select * from people order by age desc limit 1 
分组： 
select name ,max(age) from people group by name limit 1;

注意： 
没有加聚合函数处理的字段必须放在group by 里，没在group by里的字段必须聚合函数处理 
导出数据库 

mysqldump -uroot -p lovesoso people>/Users/lovesosoi/Desktop/mys/mys.sql 
导入数据库 
mysql -uroot -p test< /Users/lovesosoi/Desktop/mys/mys.sql

MySQL 常用数据类型

每一个字段(表的每一列)都要先声明数据类型和长度。

整数型：TINYINT，SMALLINT，INT，BIGINT(带符号和无符号) 

TINYINT ： 1个字节       -128 -- 127（0-255）

INT ： 4 个字节        -2147483648 -- 2147483647（0 -4294967295）

浮点型：FLOAT，DOUBLE

	FLOAT：占4个字节。

字符型：CHAR，VARCHAR

	CHAR:定长类型，一般用于性别、密码等。

	VARCHAR：可变类型，自身长度+1，一般用于用户名、标题等。

日期型：DATETIME，DATE（  NOW（）：当前日期  ）

	DATETIME '0000-00-00 00:00:00'  日期时间

	DATE '0000-00-00'  日期

备注型：TINYTEXT，TEXT，LONGTEXT

	TINYTEXT 字符串，最大长度255个字符

	TEXT 字符串，最大长度65535个字符

	LONGTEXT 字符串，最大长度4294967295个字符