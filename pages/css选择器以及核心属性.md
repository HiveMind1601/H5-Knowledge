css
"""css
外部
1.<link rel="stylesheet" type="text/css" href="text.html">
2.@import url("路径")
内部
<style type="text/css"></style>写在<head>
内联
<div style="width: 500px height:555px color:red border:1px soild#ff0 dashed#ff0 double#ff0 dotted#ffo background:blue"></div>
内联优先级最高 内部和外部看书写顺序 后书写的优先级高

1. 元素选择器
元素{
	width:333px;
	height:3333px;
}

2. id选择器
给标签设置
以页面中只有一个id属性值
属性值英文字母开头
#id的名字{width:333px;}

3. class选择器
页面内可以重复使用class的属性值
class的属性值多个
class="sa ia da"
class="a"
.class的名字{}

4. 群组选择器
div,p,span{width:2222px;}

包含选择器

5. 伪类选择符
：link{属性：属性值；}初始状态
：visited{}访问后的状态
：hover{}鼠标悬停时的状态
：active{}鼠标点击时的状态
6. 通配选择符
*&nbsp;选择符{属性：属性值}
当前范围内所有的元素

7. margin 外边距
padding 内边距
margin：0 auto       上下外边距为0，左右边距auto 设置当前元素在其父级元素水平居中（一个标签在另一个标签内水平居中）
text-align ：设置当前文本在其父级中水平居中

8. 权重
内联 1000  id 100 class/伪类 10 元素 1
通配 0  继承0 包含-所有选择符之和  群组-需要哪个就找那个
如果两个选择符权重相同，后书写的显示效果

9. font 加粗 倾斜 大小/行高 字体
font-weight：bold /600-900 加粗       normal/100-600 常规
font-style：italic/oblique  倾斜 normal 正常
font-size:大小
line-height：1.给多行文本设置行高-降低阅读困难 2.给单行文本设置行高可以是单行文本在容器内垂直居中（行高与容器同高）3.单行文本行高大于容器的高度时文字下移，反之上移
font-family：字体  当字体是汉字/多个英文单词（单词之间有空格）时，要加双引号""
当就是一个单词是不用加""

10. text-align：center left right；
vertical-align:top middle bottom；
vertical-align 只能用在select img input textarea 中（与同级元素垂直方向对其）

11. text-indent：首行缩进
设置百分比时参照盒子的父级元素；
可以设置负值；
行内元素首行缩进无效；
只对第一行起作用

12. text-transform：设置文本大小（字母大小写）

13. text-decoration：文本修饰
underline：下划线
overline：上划线
line-through：删除线

14. letter-spacing：value 设置英文字母/汉字的间距
word-spacing：value 控制英文单词词距

15. border：会用border写三角形
transpant：透明色

16. list-style/list-style-type：设置有序/无序列表的符号
最常用属性：list-style：none；

17. background-image：url（）
background-repest：no-repeat
background-position：value1 value2

18. background-attachment：fixed scorll

19. background：color img repeat position att

20. float
    （1）float：让块状元素并列显示，给所有并列显示的元素都添加浮动；
    （2）块状元素：可以设置官渡和高度，自占一行，块状元素默认继承父级元素的高度；
    （3）行内元素：是不可以设置宽度和高度，可以并列显示；
    （4）添加浮动的行内元素会变成块状元素；
    （5）给元素添加浮动会使元素脱离正常文档流如果子元素设置浮动，父元素在没有设置高度的情况下，高度为0，成为高度塌陷；
    解决方法：clear：both/left/right
    在浮动元素的下面添加一个统计的div，并设置声名clear：both；
    （6）子元素的宽度加起来超过父元素的宽度，就不会并列显示，而在下一行继续显示
    （7）文字环绕图片的效果：给图片添加浮动

21. px：像素点；
    em：当前元素的文字大小：
    ex：当前元素字母X的高度：
    line-height：如果省略单位默认执行成em：

22. outline：用在超链接，按钮等元素上，突出元素的效果 不占据空间
    border：用在所有游行元素上面，修饰性线条的左右，占据空间

23. resize：none|both|horizontal|vertical;属性规定是否可有用户调整元素的大小；
