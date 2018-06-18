1. padding 盒子的位置不变，内容进行移动（内边距）
2. margin 内容与盒子一起移动 （外边距）(围绕在元素边框的空白区域是外边距。设置外边距会在元素外创建额外的“空白”)
   margin:0 auto; ，这个就表示上下的距离值是0，而左右就是自动适应，也就是我们常说的自动居中。
   margin:auto; ， 就表示上下左右都自动适应	
3. 去除ul/li的圆点：list-style:none
4. background-color:rgb( , , )
5. text-align :使div中的文字居中 
6. position：position 属性把元素放置到一个静态的、相对的、绝对的、或固定的位置中。

   |值|描述|
   |-----|
   |static|默认。位置设置为 static 的元素，它始终会处于页面流给予的位置（static 元素会忽略任何 top、bottom、left 或 right 声明）。|
   |relative|位置被设置为 relative 的元素，可将其移至相对于其正常位置的地方，因此 "left:20" 会将元素移至元素正常位置左边 20 个像素的位置。|
   |absolute|位置设置为 absolute 的元素，可定位于相对于包含它的元素的指定坐标。此元素的位置可通过 "left"、"top"、"right" 以及 "bottom" 属性来规定。|
   |fixed|位置被设置为 fixed 的元素，可定位于相对于浏览器窗口的指定坐标。此元素的位置可通过 "left"、"top"、"right" 以及"bottom" 属性来规定。不论窗口滚动与否，元素都会留在那个位置。工作于 IE7（strict 模式）。|