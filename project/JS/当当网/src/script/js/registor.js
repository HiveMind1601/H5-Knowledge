;!function(){
	$(function(){
		$('.commentForm').validate({
			rules:{
				username:{
					required:true,
					minlength:11,
					maxlength:11,
				},
				password:{
					required:true,
					minlength:6,
					maxlength:12
				},
				confirm:{
					required:true,
					minlength:6,
					maxlength:12,
					equalTo: "#password"
				}
			},
			messages:{
				username:{
					required:"账号不能为空",
					minlength:'手机号不符合标准',
					maxlength:'手机号不符合标准'
				},
				password:{
					required:"密码不能为空",
					minlength:'密码长度过短',
					maxlength:'密码长度过长'
				},
				confirm:{
					required:'密码重复不能为空',
					minlength:'密码长度过短',
					maxlength:'密码长度过长',
					equalTo:"密码错误"
				}
			}
		});
	});
	
	$.validator.setDefaults({
	    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
	    success: function(label){
	    	label.text('√').css({'color':'green','fontWeight':600}).addClass('valid');
	        submitfrom(); 
	    },
	    error:function(label){
	    	label.css({'color':'red','fontWeight':600}).addClass('valid');
	    }

	});

	function submitfrom(){
		$.ajax({
			type:"post",
			url:"http://10.31.156.178/JS-1804/dangdang/php/registor.php",
			data:{
				name: $("#username").val(),
				password:$("#password").val()
			},
			success:function(d){
				if (!d) {
					$('#username').next('span').html('√').css('color','green');	
					$(".ts-1").html("");
						
				}else{
					$('#username').next('span').html('X').css('color','red');
					$(".ts-1").html("该手机号用户已存在").css('color','red');
					
				}
			}
		})
	}
}();