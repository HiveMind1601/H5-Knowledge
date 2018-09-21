;!function($){
	$('#submit').on('click',function(){
		var $username=$('#username').val();
		var $password=$('#password').val();
		if ($username.length==11) {
			if ($password.length>=6 && $password.length<=20) {
				$.ajax({
				type:'post',
				url:'http://10.31.156.178/JS-1804/dangdang/php/login.php',
				data:{
					username:$username,
					password:$password
				}
				})
				.done(function(d){
					if (!d) {
						console.log(d);
						$('.login-ts span').html('用户名或者密码错误');
						$('#password').val('');
					}else{
						if($('.login-gx input').prop('checked')){
							$.cookie('username', $username, { expires: 7 });
						}
						location.href='index.html';
					}
				});
			}else{
				$(".pass span").html("密码长度不符合标准").css("color","red");
			}
		}else{
			$(".ts-1 span").html("用户名长度错误").css("color","red");
		}	
	});
}(jQuery);
