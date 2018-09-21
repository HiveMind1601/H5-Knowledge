define(["jquery","jquery.cookie"],function(){
	return{
		getcookie:!function(){
			var $cookie=$.cookie('username'); 
			$('.top-m b').html($cookie).css({"color":"red"});
			$('.top-m .del').on('click',function(){
				$.cookie('username', '', { expires: -1 });
				$('.top-m b').html('');
				$('.top-m .del').html('请登录');
			})
		}(),
		data:!function(){
			var $href=location.search;
			var $id=$href.split("=")[1];
			$.ajax({
				url:"http://10.31.156.178/JS-1804/dangdang/php/detail.php",
				dataType:'json',
				data:{
					id:$id
				}
			})
			.done(function(d){
				var $d=d[0];
				var $titlestr='';
				$titlestr+=`
					<h1><img src="http://product.dangdang.com/images/icon_ddzy.png">${$d.title}</h1>
					<h2><p>${$d.dec}</p><p><a href="#">文艺书每100减50，更多促销点击这里</a></p></h2>
				`;
				$('.title').html($titlestr);

				var $pricestr='';
				$pricestr+=`
					<div class="bprice"><p>当当价</p>
						<p><span class="prices">¥${$d.price}</span><span class="prices">(6.91折)</span></p>
					</div>
					<div class="eprice"><p>电子书价</p><p><span>¥${$d.eprice}</span></p></div>
				`;
				$('.bookprice').html($pricestr);

				var $src=$d.url.split(",");
				$("#spic").children('img').attr({src:$src[0]});
				$("#bpic").attr({src:$src[0]});
				var $srcstr='';
				$.each($src,function(index,value){
					$srcstr+=`
						<li><img src=${$src[index]}></li>
					`;
				})
				$('#list ul').html($srcstr);
			});
		}(),
		scale:!function(){
			$('#sf').outerWidth($('#spic').outerWidth()*$('#bf').outerWidth()/ $('#bpic').outerWidth());
			$('#sf').outerHeight($('#spic').outerHeight()*$('#bf').outerHeight()/ $('#bpic').outerHeight());
			$('#spic').hover(function(){
				$('#sf').css({"visibility":"visible"});
				$('#bf').css({"visibility":"visible"});
				var bili=$('#bpic').outerHeight()/$('#spic').outerHeight();
				$('#spic').on('mousemove',function(ev){
					var $l=ev.clientX-$('#spic').offset().left-$('#sf').outerWidth()/2;
					var $t=ev.clientY-$('#spic').offset().top-$('#sf').outerHeight()/2;
					if ($l>$('#spic').outerWidth()-$('#sf').outerWidth()) {
						$l=$('#spic').outerWidth()-$('#sf').outerWidth()-2;
					}else if ($l<=0) {
						$l=0;
					}
					if ($t>$('#spic').outerHeight()-$('#sf').outerHeight()) {
						$t=$('#spic').outerHeight()-$('#sf').outerHeight()-2;
					}else if ($t<=0) {
						$t=0;
					}
					$('#sf').css({"left":$l,"top":$t});
					$('#bpic').css({"left":-$l*bili,"top":-$t*bili});
				})
			},function(){
				$('#sf').css({"visibility":"hidden"});
				$('#bf').css({"visibility":"hidden"});
			});
			
			var $num=5;
			$('#left').on('click',function(){
				if ($('#list ul li').length<=5) {
					$('#left').hide();
					$('#right').hide();
				}else{
					$('#left').show();
					$('#right').show();	
					$('#list ul').stop().animate({left:-$('#list li').outerWidth()});
				}
			});
			
			$('#right').on('click',function(){
				if($('#list ul').offset().left<0){
					$('#list ul').stop().animate({left:$('#list li').outerWidth()});
				}else{
					$('#list ul').stop().animate({left:0});
				}
				
			});
			
			$('#list ul').on('click','li',function(){
				var $src1=$(this).find('img').attr("src");
				$('#spic img').attr({src:$src1});
				$('#bpic').attr({src:$src1});
			})
		}(),
		num:!function(){
			var $num=$('#buy-num').val();
			$('.add').on('click',function(){
				$num++;
				$('#buy-num').val($num);
			});
			$('.disable').on('click',function(){
				if ($num<=1) {
					$num=1;
				}else{
					$num--;
					$('#buy-num').val($num);
				}
			});
		}(),
		addcookie:!function(){
			var $sidarr=[];
			var $numarr=[];
			function getcookievalue() {
		        if ($.cookie('cartsid') && $.cookie('cartnum')) {
		            $sidarr = $.cookie('cartsid').split(','); 
		            $numarr = $.cookie('cartnum').split(','); 
		        }
		    }
			$('.btn-1').on('click',function(){
				var $sid=location.search.split("=")[1];
				getcookievalue();
				if ($.inArray($sid,$sidarr) != -1) {
					//走这里代码已经存在cookie,数量累加，取出cookie的数量+当前的输入的数量
					var $num=parseInt($numarr[$.inArray($sid,$sidarr)])+parseInt($('#buy-num').val());
		            $numarr[$.inArray($sid,$sidarr)]=$num;
		            $.cookie('cartnum',$numarr,{expires:7});
				}else{
					$sidarr.push($sid);
					$numarr.push($('#buy-num').val());
					$.cookie('cartsid',$sidarr.toString(),{expires:7});
					$.cookie('cartnum',$numarr.toString(),{expires:7});
				}	
			});
		}()
	}
})