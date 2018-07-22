1. xhtml，html4三种稳当声名：strict严格（不包括弃用和展示性的元素，框架） transitional过度（包括弃用和展示性的元素，不能用框架） framest（允许框架使用）

2. html5：一种（不建议使用弃用和展示性的元素以及框架）

3. dtd文档的作用：是来验证，你写的html页面是否符合语法（dtd文档包含了html的使用语法可以使用属性，元素之间的关系，可以使用的符号等语法，）

4. 盒模型在标准模式下和怪异模式下的解释：

> div显示的宽度：width+padding(左右)+border

> div显示的宽度=width(padding+boeder+content)


5. 热点链接如何使用：

map的id名与img的usemap的名字一致，map与img是同级关系，在map标签里嵌套area标签，给area设置shap="circle/圆，rectangle/矩形" coords="(圆/圆心坐标，半径)(举行/对角线两个点的坐标)"

6. line-height：100%---指的是当前文字的大小；
line-height：100%
font-size*1=16px； font-size*2=32px；

7. 给margin/padding-top/right/botton/left设置百分比时，参照的时父元素的宽度

8. 属性选择符/类/伪类选择符的权重是10;

兄弟选择符的权重是0;

9. 计数器的使用：

counter-reset：count(计数器的名字) 0(重置数字);

counter-increament：count(计数器) 1(递增值)

引号的使用：

(1)q行内标签可以给引用的文本加引号

(2)用伪元素加引号

q{quotes："." "."}/{"~" "~"}

q：begore{content：open-quote}

q：after{content：close-quote}

10. Trident内核：前缀为-ms

    Gecko内核：前缀为-moz

    Presto内核：前缀为-o

    Weblit内核：前缀为-webkit

11. 层级选择符：

（1）后代选择符 

（2）子代选择符

（3）相邻兄弟选择符

（4）通用兄弟选择符

12. 属性选择符（css3）

[a^="def"] 选择a属性值以"def"开头的所有元素

[a$="def"]选择啊属性以"def"结尾的所有元素

[a*="def"]选择a属性中包含"def"的所有元素

13. 伪元素选择符

:after{}

:before{}

:first-letter{}

:first-line{}

::selection{只有background，color两个属性}

14. 伪类选择符

    ：target(目标伪类)

    : root(绑定根元素html)

    ：not（否定伪类）（除了...所有）

    ：nth-of-type(选择父元素内具有制定类型的第n个元素)

    ：nth-child（父元素中第几个元素）

    ：first/last-child

    ：first/last-of-type

15. text-shadow：x y 模糊半径 扩展半径 颜色(文本阴影);

box-shadow：x y 模糊半径 扩展半径 颜色 位置(盒子阴影)(xy正值:右下，xy负值:左上)

16. border-radius：如果要重置元素没有圆角，取值nonoe无效，需要设置0;

17. background-size：宽度、高度，规定背景图片的尺寸。如果只设置一个值，则第二个值会被设置为 "auto"

18. background-clip：content-box/padding-box / border-box 
规定背景的绘制区域（剪裁）

19. background-origin：content-box/padding-box / border-box 规定背景图片的定位区域，规定background-position属性相对于什么位置来定位。（如果背景图像的background-attachment属性为"fixed"，则该属性没有效果。）

20. rgba()背景透明

21. opacity：整个元素透明

22. 字体图标：三种方式

(1)fontclass

(2)symol(插入js文件)

(3)unicode