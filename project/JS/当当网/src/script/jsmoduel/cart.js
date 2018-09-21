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
		cart:!function(){
			if ($.cookie('cartsid') && $.cookie('cartnum')) {
				var $s=$.cookie('cartsid').split(',');
				var $n=$.cookie('cartnum').split(',');
				$.each($s,function(index,value){
					createcart(value,$n[index]);
				});
			}
			function createcart(sid,num){
				$.ajax({
					url:'http://10.31.156.178/JS-1804/dangdang/php/cart.php',
					data:{
						id:sid
					},
					dataType:"json"
				})
				.done(function(data){
					$.each(data,function(index,value){
						if (sid==data[index].sid) {
							var $clone=$('.cart-list:hidden').clone(true);
							$clone.find('img').attr('src',data[index].url.split(',')[0]);
							$clone.find('.dis').attr('sid', data[index].sid);
							$clone.find('.name').find('a').html(data[index].title);
							$clone.find('.price').find('span').html(data[index].price);
							$clone.find('.num').find('input').val(num);
							var $dj1=parseFloat($clone.find('.price').find('span').html());//单价
							$clone.find('.sumprice span').html(($dj1 * num).toFixed(2)); //num：数量
			                $clone.css('display', 'block'); //克隆的模块是隐藏，显示出来。
			                $('.cartmain').append($clone);
			                kong();
			                totalprice();
						}
					});
				})
			}
			//空
			function kong() {
			    if ($.cookie('cartsid')) { //cookie存在，有商品，购物车不再为空
			        $('.empty').hide();
			    } else {
			        $('.empty').show();
			    }
			}
			kong();
			//删除
			$('.cartmain').on('click','.del',function(){
				var $id=$(this).parent().attr('sid');
				$.each($s,function(index,value){
					if ($s[index]==$id) {
						$s.splice(index, 1);
						console.log($s);
					}
				})
				$.cookie('cartsid',$s.toString(),{expires:7});
				$(this).parentsUntil('.cartmain').css({"display":"none"});
				kong();
				totalprice();
			});
			$('.del').hover(function(){
				$(this).css({"color":"red","text-decoration":"underline"});
			},function(){
				$(this).css({"color":"#646464","text-decoration":"none"});
			})


			//取cookie
			var sidarr = [];
			var numarr = [];
			function cookieToArray(){
			    if($.cookie('cartsid')){
			        sidarr=$.cookie('cartsid').split(',');
			    }
			    
			    if($.cookie('cartnum')){
			        numarr=$.cookie('cartnum').split(',');
			    }
			}
			
			//修改数量的操作
			//改变商品数量++
			$('.add').on('click', function() {
			    var $count = $(this).parents('.cart-list').find('#buynum').val();
			    $count++;
			    if ($count >= 99) {
			        $count = 99;
			    }
			    $(this).parents('.cart-list').find('#buynum').val($count);
			    $(this).parents('.cart-list').find('.sumprice span').html(singlegoodsprice($(this)));//改变后的价格
			    totalprice();
			    setcookie($(this));
			});


			//改变商品数量--
			$('.disable').on('click', function() {
			    var $count = $(this).parents('.cart-list').find('#buynum').val();
			    $count--;
			    if ($count <= 1) {
			        $count = 1;
			    }
			    $(this).parents('.cart-list').find('#buynum').val($count);
			    $(this).parents('.cart-list').find('.sumprice span').html(singlegoodsprice($(this)));//改变后的价格
			    totalprice();
			    setcookie($(this));
			});


			//直接输入改变数量
			$('#buynum').on('input', function() {
			    var $reg = /^\d+$/g; //只能输入数字
			    var $value = parseInt($(this).val());
			    if ($reg.test($value)) {
			        if ($value >= 99) {//限定范围
			            $(this).val(99);
			        } else if ($value <= 0) {
			            $(this).val(1);
			        } else {
			            $(this).val($value);
			        }
			    } else {
			        $(this).val(1);
			    }
			    $(this).parents('.cart-list').find('.sumprice span').html(singlegoodsprice($(this)));//改变后的价格
			    totalprice();
			    setcookie($(this));
			});

			//计算数量改变后单个商品的价格
			function singlegoodsprice(row) { //row:当前元素
			    var $dj = parseFloat(row.parents('.cart-list').find('.djprice').find('span').html());
			    var $cnum = parseInt(row.parents('.cart-list').find('#buynum').val());
			    return ($dj * $cnum).toFixed(2);
			}

			//将改变后的数量的值存放到cookie
			function setcookie(obj) { //obj:当前操作的对象
			    cookieToArray();
			    var $index = obj.parents('.cart-list').find('.dis').attr('sid');
			    numarr[sidarr.indexOf($index)] = obj.parents('.cart-list').find('#buynum').val();
			    $.cookie('cartnum', numarr.toString(), {expires:7});
			}

			//求和
			function totalprice() {//计算总价
			    var total = 0;//总的价格
		    	var countnum = 0;//总的数量
			    $('.cart-list:visible').each(function() {//可视的商品列表进行遍历，循环叠加
			        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
			            total += parseFloat($(this).find('.sumprice').find('span').html());
			            countnum += parseInt($(this).find('#buynum').val());
			        }
			    });
			    //赋值
			    $('.price-balance .price').html('￥' + total.toFixed(2));
			    $('.chose-num span').html(countnum);
			    $('.top-r .num').html(countnum);
			}

			//全选结算
			$('.all').on('change', function() {
			    $('.cart-list:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
			    $('.all').prop('checked', $(this).prop('checked'));
			    totalprice();//求和
			});

			var $inputchecked = $('.cart-list:visible').find('input:checkbox')//获取委托元素
			$('.cartmain').on('change', $inputchecked, function() {
			    var $inputs = $('.cart-list:visible').find('input:checkbox'); //放内部
			    if ($('.cart-list:visible').find('input:checked').length == $inputs.size()) {
			        $('.all').prop('checked', true);
			    } else {
			        $('.all').prop('checked', false);
			    }
			    totalprice();
			});
		}()
	}
})