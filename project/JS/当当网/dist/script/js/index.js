//顶部获取cookie
!function($){
	if ($.cookie('username')) {
		var $cookie=$.cookie('username'); 
		$('.top-m b').html($cookie).css({"color":"red"});
		$('.top-m .span1').html('Hi,').css({"color":"red"});
		$('.top-m .span2').html('');
		$('.del').html('[退出]');
		$('.top-m .del').on('click',function(){
			$.cookie('username', '', { expires: -1 });
			$('.top-m b').html('');
			$('.top-m .del').html('请登录');
		})
	}
}(jQuery);

//banner,tab,lunbo,数据
;!function($){
	//banner数据
	$.ajax({
		url:'http://10.31.156.178/JS-1804/dangdang/php/getdata.php',
		dataType:'json'
	}).done(function(d){
		var $bannert=d.bannertdata;
		var $bannerstr="";
		$.each($bannert,function(index,value){
			if (index==0) {
				$bannerstr+='<li class="opacity">'
				$bannerstr+=`<a href="#">
					<img src=${$bannert[index].url}>
				</a>`;
			$bannerstr+="</li>";
			}else {
				$bannerstr+='<li>'
				$bannerstr+=`<a href="#">
					<img src=${$bannert[index].url}>
				</a>`;
				$bannerstr+="</li>";
			}
		});
		$('.banner-pic-t ul').html($bannerstr);

		var $bannerb1=d.bannerb1data;
		var $bannerb1str='<li>';
		$.each($bannerb1,function(index,value){
			$bannerb1str+=`<a href="#"><img src=${$bannerb1[index].url}></a>`;
		})
		$bannerb1str+='</li>';
		$('.banner-pic-b ul:first').html($bannerb1str);

		var $bannerb2=d.bannerb2data;
		var $bannerb2str='<li>';
		$.each($bannerb2,function(index,value){
			$bannerb2str+=`<a href="#"><img src=${$bannerb2[index].url}></a>`;
		})
		$bannerb2str+='</li>';
		$('.banner-pic-b ul:last').html($bannerb2str);
	});
	//lunbo数据
	$.ajax({
		url:'http://10.31.156.178/JS-1804/dangdang/php/getdata.php',
		dataType:'json'
	}).done(function(d){
		var $slunbo=d.slunbodata;
		var $slunbostr='';
		$.each($slunbo,function(index,value){
			$slunbostr+=`<li><a href="#" ><img src=${$slunbo[index].url}></a></li>`;
		});
		$('.banner-right-lunbo ul').html($slunbostr);
	});

	//小tab切换数据
	$.ajax({
		url:'http://10.31.156.178/JS-1804/dangdang/php/getdata.php',
		dataType:'json'
	}).done(function(d){
		var $smalltab=d.smalltabdata;
		var $smalltabstr='';
		$.each($smalltab,function(index,value){
			$smalltabstr+='<li>';
			$smalltabstr+=`<a href="#">${$smalltab[index].title}</a>`;
			$smalltabstr+='</li>';
		});
		$('.tabswitch-1').html($smalltabstr);


		var $smalltab1=d.smalltab1data;
		var $smalltab1str='';
		$.each($smalltab1,function(index,value){
			$smalltab1str+='<li>';
			$smalltab1str+=`<a href="#">${$smalltab1[index].title}</a>`;
			$smalltab1str+='</li>';
		});
		$('.tabswitch-2').html($smalltab1str);
	});
	//大tab切换数据
	function tabswitch(data,attr){
		var a=attr.toString();
		$.ajax({
			url:'http://10.31.156.178/JS-1804/dangdang/php/getdata.php',
			dataType:'json'
		}).done(function(d){
			var $bigtab=d[data];
			var $bigtabstr='';
			$.each($bigtab,function(index,value){
				if(index<=3){
					$bigtabstr+=`<div>
						<a href="#">
							<img src=${$bigtab[index].url}>
						</a>
						<p class="name"><a href="#">${$bigtab[index].title}</a></p>
					</div>`;
				}	
			});
			var b="."+a;
			$(b +' .right').html($bigtabstr);

			var $bigtab=d[data];
			var $big1tabstr='';
			$.each($bigtab,function(index,value){
				if(index>3){
					$big1tabstr+=`<div>
						<a href="#">
							<img src=${$bigtab[index].url}>
						</a>
						<p class="name"><a href="#">${$bigtab[index].title}</a></p>
					</div>`;
				}	
			});
			$(b +' .bottom').html($big1tabstr);
		});
	}
	tabswitch("bigtabdata","c-1");
	tabswitch("bigtab2data","c-2");
	tabswitch("bigtab3data","c-3");
	tabswitch("bigtab4data","c-4");
	tabswitch("bigtab5data","c-5");
}(jQuery);

//banner效果
!function($){
	var timer=null;
	$('.banner-pic-t').hover(function(){
		$('.t-left').show();
		$('.t-right').show();
	},function(){
		$('.t-left').hide();
		$('.t-right').hide();
	})
	$('.banner-pic-b').hover(function(){
		$('.b-left').show();
		$('.b-right').show();
	},function(){
		$('.b-left').hide();
		$('.b-right').hide();
	});
	$('.banner-pic').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			$('.t-right').click();
		},2000);
	});
	$('.banner-pic-t').on('click','.btn li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.pic li').eq($(this).index()).stop().animate({opacity:1}).siblings().animate({opacity:0});
	});
	var $i=0;
	$('.banner-pic-t').on('click','.t-right',function(){
		var $pic=$('.pic li');
		$('.btn li').each(function(index,ele){
			$i+=1;
			$('.btn li').eq($i).stop().addClass('active').siblings().removeClass('active');
			$pic.eq($i).stop().animate({opacity:1}).siblings().animate({opacity:0});
			if ($i%2!=0) {
				$('.banner-pic-b ul:last').animate({opacity:0.8}).siblings('ul').animate({opacity:0});
			}else{
				$('.banner-pic-b ul:first').animate({opacity:0.8}).siblings('ul').animate({opacity:0});
			}
			return false;
		})
		if($i>=7){
			$i=-1;
		}
	})

	$('.b-right').on('click',function(){
		$('.t-right').click();
	})

	$('.banner-pic-t').on('click','.t-left',function(){
		var $pic=$('.pic li');
		$('.btn li').each(function(index,ele){
			$i-=1;
			$('.btn li').eq($i).stop().addClass('active').siblings().removeClass('active');
			$pic.eq($i).animate({opacity:1}).siblings().animate({opacity:0});
			if ($i%2!=0) {
				$('.banner-pic-b ul:last').animate({opacity:0.8}).siblings('ul').animate({opacity:0});
			}else{
				$('.banner-pic-b ul:first').animate({opacity:0.8}).siblings('ul').animate({opacity:0});
			}
			return false;
		})
		if($i<=-1){
			$i=7;
		}
	})

	$('.b-left').on('click',function(){
		$('.t-left').click();
	})

	timer=setInterval(function(){
		$('.t-right').click();
	},2000);	
}(jQuery);

//lunbo效果
!function($){
	$('.banner-right-lunbo').hover(function(){
		$('.r-left').show();
		$('.r-right').show();
	},function(){
		$('.r-left').hide();
		$('.r-right').hide();
	})
	var $index=0;
	$('.banner-right-lunbo .r-right').on('click',function(){
		$index++;
		if($index==3){
			$index=0;
		}
		$picwidth=$('.banner-right-lunbo li').eq(0).width();
		$('.lunbo').css({width:$picwidth*$('.banner-right-lunbo li').length});
		$('.lunbo').animate({
			left:-$picwidth*$index
		},500);
	});
	$('.banner-right-lunbo .r-left').on('click',function(){
		$index--;
		if($index==-1){
			$index=2;
		}
		$picwidth=$('.banner-right-lunbo li').eq(0).width();
		$('.lunbo').css({width:$picwidth*$('.banner-right-lunbo li').length});					
		$('.lunbo').stop().animate({
			left:-$picwidth*$index
		},500)
	});
	var $timer=null;
	function settimer(){
		$timer=setInterval(function(){
			$('.banner-right-lunbo .r-right').click();
		},2000)
	}
	settimer();

	$('.banner-right-lunbo').hover(function(){
		clearInterval($timer);
	},function(){
		settimer();
	})
}(jQuery);

//头部小tab切换
!function($){
	$('.abtn a').on('mouseover',function(){
		$(this).parent().css({"background":"#fff"}).siblings().css({"background":"#f0f0f0"});
		$('.tabcontent ul').eq($(this).parent().index()).show().siblings('.tabcontent ul').hide();
	})
}(jQuery);

//头部小效果
!function($){
	//我的当当的效果
	$('.subnav-btn-1').parent().hover(function(){
		$('.subnav').show();
	},function(){
		$('.subnav').hide();
	});

	$('.subnav-btn').parent().hover(function(){
		$('.top-r ul').show();
		$('.top-r .subnav-btn-1').css({"color":"red","background-position":"right -322px"});
	},function(){
		$('.top-r ul').hide();
		$('.top-r .subnav-btn-1').css({"color":"#646464","background-position":"right -307px"});
	});

	$('.subnav li').hover(function(){
		$(this).css({"background-color":"#f2f2f2"});
	},function(){
		$(this).css({"background-color":"#fff"});
	})

	//地址效果
	$('.top-l').hover(function(){
		$('.top-l ul').show();
		$('.top-l .address').css({"border":"1px solid #e6e6e6","border-bottom":"0","background":"#fff"});
		$('.top-l .address span').css({"color":"red","background-position":"right -320px"});
	},function(){
		$('.top-l ul').hide();
		$('.top-l .address').css({"border":"0","background":"#f9f9f9"});
		$('.top-l .address').css({"color":"#646464","background-position":"right -304px"});
	});

	$('.top-l li').hover(function(){
		$(this).find('a').css({"color":"red"});
	},function(){
		$(this).find('a').css({"color":"#646464"});
	})

	$('.top-l li').on('click',function(){
		$('.top-l .address span').html($(this).html());
		$('.top-l span a').css({"color":"#646464"});
	})
	//搜索框全部分类
	$('.subnav-btn-all').hover(function(){
		$('.subnav-btn-all ul').show();
	},function(){
		$('.subnav-btn-all ul').hide();
	});

	$('.subnav-btn-all li').on('click',function(){
		$('.subnav-btn-all span').html($(this).html());
		$('.subnav-btn-all span a').css({"font-size":"16","color":"#646464"});
	})

	$(".subnav-btn-all li").hover(function(){
		$(this).css({"background-color":"#c8c8c8","text-decoration":"underline"});
		$(this).find('a').css({"color":"#fff"});
	},function(){
		$(this).css({"background-color":"#fff","text-decoration":"none"});
		$(this).find('a').css({"color":"#646464"});
	})
	//购物车
	$('.cart').hover(function(){
		$(this).css({"background":"url(http://img62.ddimg.cn/upload_img/00459/home/icon_cart.png) no-repeat 0 -36px"});
		$(this).css({"background-color":"#fff"}).children('a').css({"color":"red"});
		$(this).css({"background-color":"#fff"}).children('span').css({"color":"red"});
	},function(){
		$(this).css({"background":"red"}).children('a').css({"color":"#fff"});
		$(this).css({"background":"red"}).children('span').css({"color":"#fff"});
		$(this).css({"background":"url(http://img62.ddimg.cn/upload_img/00459/home/icon_cart.png) 5px 0 no-repeat #ff2832"});
	});

	//导航
	$('.nav li a').not('.all a').hover(function(){
		$(this).css({"color":"red"});
	},function(){
		$(this).css({"color":"#323232"});
	});

	//二级导航
	$('.banner-subnav').parent().hover(function(){
		$(this).addClass('on');
		$(this).children('a').css({"font-size":"18","color":"#ff2832"});	
		$('.banner-subnav').show();
		$('.zd').css({"display":"block"});
	},function(){
		$('.banner-subnav').hide();
		$(this).removeClass('on');
		$(this).children('a').css({"font-size":"12","color":"#646464"});
		$('.zd').css({"display":"none"});
	});

	$('.banner-subnav a').hover(function(){
		$(this).css({"color":"red","text-decoration":"underline"});
	},function(){
		$(this).css({"color":"#646464","text-decoration":"none"});
	})
	//banner划过
	$('.banner-pic-b').hover(function(){
		$(this).css({"opacity":1});
	},function(){
		$(this).css({"opacity":0.8});
	})
}(jQuery);

//秒杀数据
!function($){
	$.ajax({
		url:"http://10.31.156.178/JS-1804/dangdang/php/getdata.php",
		dataType:"json"
	})
	.done(function(d){
		var $msdata=d.ms;
		var $ms="<ul class"+ "=" +"'clear bottom'"+">";
		$.each($msdata,function(index,value){
			$ms+=`<li>
				<a href="#">
				<img data-original=${$msdata[index].url} src="https://file.digitaling.com/eImg/uimages/20160802/1470137290773494.gif">
				</a>
				<div class="name">
					<span>
						${$msdata[index].title}
					</span>
				</div>
				<div class="price">
					秒杀价：¥
					<span>${$msdata[index].scaleprice}</span>
					<span class="del">${$msdata[index].price}</span>
				</div>
			</li>`;
		})
		$ms+="</ul>"
		$('.ms-goods').html($ms);
	})
}(jQuery);

//秒杀效果
!function($){
	var $second=$('.ms .span3').html();
	var $minute=$('.ms .span2').html();
	var $hour=$('.ms .span1').html();
	var $timer=null;
	function double(num1){
		return num1 < 10 ? "0"+num1 : num1;
	}
	$timer=setInterval(function(){
		$second--;
		$second=double($second);
		if (double($second)==00) {
			$minute-=1;
			$second=60;
		}
		if(double($minute)==00){
			$hour-=1;
			$minute=60;
		}
		$('.ms .span3').html($second);
		$('.ms .span2').html($minute);
		$('.ms .span1').html($hour);
	},1000);
	
	var date=new Date();
	var $hours=date.getHours();
	$('.top ul a').css({"color":"red"});
	$('.top ul a').each(function(index,value){
		if ($('.top ul a').eq(index).html()==$hours || $('.top ul a').eq(index).html()==$hours+1 || $('.top ul a').eq(index).html()==$hours-1) {
			$(this).css({"color":"red"});
		}
	});

	$('.ms-goods').on('mouseover','li',function(){
		$(this).addClass('hover').css({"margin":-1});
	})
	$('.ms-goods').on('mouseout','li',function(){
		$(this).removeClass('hover').css({"margin":0});
	})
}(jQuery);

//尾品汇数据
!function($){
	$.ajax({
		url:"http://10.31.156.178/JS-1804/dangdang/php/getdata.php",
		dataType:"json"
	})
	.done(function(d){
		var $qldata=d.ql;
		var $qlstr='';
		$.each($qldata,function(index,value){
			if (index==0) {
				$qlstr+=`<a href="#"><img data-original=${$qldata[index].url} src="https://file.digitaling.com/eImg/uimages/20160802/1470137290773494.gif"></a>`;
			}else{
				$qlstr+=`<ul>`;
				$qlstr+=`
						<li>
							<a href="#">
								<img data-original=${$qldata[index].url} src="https://file.digitaling.com/eImg/uimages/20160802/1470137290773494.gif">
							</a>
						</li>
				`;
				$qlstr+=`</ul>`;
			}
		});
		$(".img-l").html($qlstr);
	});

	$.ajax({
		url:"http://10.31.156.178/JS-1804/dangdang/php/getdata.php",
		dataType:"json"
	})
	.done(function(d){
		var $qrdata=d.qr;
		var $qrstr=`<ul>`;;
		$.each($qrdata,function(index,value){
			$qrstr+=`
					<li sid=${$qrdata[index].sid}>
						<a href="#"><img data-original=${$qrdata[index].url} src="https://file.digitaling.com/eImg/uimages/20160802/1470137290773494.gif"></a>
					</li>
			`;
		});
		$qrstr+=`</ul>`;
		$(".img-r").html($qrstr);
	});
}(jQuery);

//尾品汇效果
!function(){
	$('.img-r').on('mouseover','li',function(){
		if ($(this).attr("sid")<=5) {
			$(this).addClass('border');
		}else{
			$(this).addClass('border1');
		}
	});
	$('.img-r').on('mouseout','li',function(){
		if ($(this).attr("sid")<=5) {
			$(this).removeClass('border');
		}else{
			$(this).removeClass('border1');
		}
	});
}();

//大tab切换
!function($){
	$('.tabswitch .head li').on('mouseover',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.tabswitch .content').eq($(this).index()).show().siblings('.content').hide();
	})
}(jQuery);

//日用百货效果
!function(){
	$('.depart-top li a').hover(function(){
		$(this).css({"color":"red"});
	},function(){
		$(this).css({"color":"#323232"});
	});
}();

//为你推荐
!function($){
	$.ajax({
		url:'http://10.31.156.178/JS-1804/dangdang/php/getdata.php',
		dataType:'json'
	}).done(function(d){
		var $commend=d.commenddata;
		var $commendstr='';
		$.each($commend,function(index,value){
			var $id=$commend[index].sid;
			$commendstr+=`<li>
							<a href="http://10.31.156.178/JS-1804/dangdang/src/details.html?sid=${$id}" class="img">
								<img data-original=${$commend[index].url} src="https://file.digitaling.com/eImg/uimages/20160802/1470137309210928.gif">
							</a>
							<p class="name">
								<a href="http://10.31.156.178/JS-1804/dangdang/src/details.html?sid=${$id}">${$commend[index].title}</a>
							</p>
							<p class="price">
								<span>
									¥
									<span>${$commend[index].bigprice}</span>
								</span>
								<span class="dprice">
									电子书
									<span class="sign">¥</span>
									<span class="num">${$commend[index].smallprice}</span>
								</span>
							</p>
						</li>`;
		});
		$('.recommend ul').html($commendstr);
	});
}(jQuery);

//推荐效果
!function(){
	$('.content ul').on('mouseover','li',function(){
		$(this).find('a').css({"text-decoration":"underline","color":"red"});
		$(this).css({"border-color":"#ddd"});
	});
	$('.content ul').on('mouseout','li',function(){
		$(this).find('a').css({"text-decoration":"none","color":"#666"});
		$(this).css({"border-color":"#EFEFEF"});
	});
}();

//隐藏搜索
!function($){
	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();
		if ($scrolltop>500) {
			$('#search').show();
		}else{
			$('#search').hide();
		}
	});
}(jQuery);

//楼梯效果
!function($){
	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();
		if ($scrolltop>600) {
			$('#doc-left').show();
		}else{
			$('#doc-left').hide();
		}
		$('#main .louti').each(function(index,ele){
             var $top = $('#main .louti').eq(index).offset().top+100;
             if($top>$scrolltop){
                $('#doc-left li').removeClass('docactive');
                $('#doc-left li').eq(index).addClass('docactive');
                return false;
             }
        });
	});
	$('#doc-left ul li').on('click', function() {
        $(this).addClass('docactive').siblings().removeClass('docactive');
        var $top = $('#main .louti').eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop: $top
        });
    });
}(jQuery);

//回到顶部
!function($){
	$('.small-btn-2').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		})
	})
}(jQuery);

//懒加载
!function($){
	$(window).on('scroll',function(){
		$("img").lazyload({
			threshold : 200
		});
	})
}(jQuery);