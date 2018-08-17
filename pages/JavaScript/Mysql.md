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

char(10)和VARCHAR(10)主要的区别是什么？
1．CHAR的长度是固定的，而VARCHAR2的长度是可以变化的， 比如，存储字符串“abc"，对于CHAR (10)，表示你存储的字符将占10个字节(包括7个空字符)，而同样的VARCHAR2 (10)则只占用3个字节的长度，10只是最大值，当你存储的字符小于10时，按实际长度存储。
2．CHAR的效率比VARCHAR2的效率稍高。
3．目前VARCHAR是VARCHAR2的同义词。工业标准的VARCHAR类型可以存储空字符串，但是oracle不这样做，尽管它保留以后这样做的权利。Oracle自己开发了一个数据类型VARCHAR2，这个类型不是一个标准的VARCHAR，它将在数据库中varchar列可以存储空字符串的特性改为存储NULL值。如果你想有向后兼容的能力，Oracle建议使用VARCHAR2而不是VARCHAR。
何时该用CHAR，何时该用varchar2？
CHAR与VARCHAR2是一对矛盾的统一体，两者是互补的关系.
VARCHAR2比CHAR节省空间，在效率上比CHAR会稍微差一些，即要想获得效率，就必须牺牲一定的空间，这也就是我们在数据库设计上常说的‘以空间换效率’。
VARCHAR2虽然比CHAR节省空间，但是如果一个VARCHAR2列经常被修改，而且每次被修改的数据的长度不同，这会引起‘行迁移’(Row Migration)现象，而这造成多余的I/O，是数据库设计和调整中要尽力避免的，在这种情况下用CHAR代替VARCHAR2会更好一些。