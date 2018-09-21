<?php  
	require "conn.php";
	if (isset($_POST['name']) || isset($_POST['submit'])) {
		$name=$_POST['name'];
	}else{
		exit('非法操作');
	}
	$result=mysql_query("select * from login where username='$name'");
	if (mysql_fetch_array($result)) {
		echo true;
	}else{
		echo false;
	}
	if (isset($_POST['submit'])) {
		$username=$_POST['username'];
		$password=md5($_POST['password']);
		mysql_query("insert login values(null,'$username','$password')");
		header("location:http://10.31.156.178/JS-1804/dangdang/src/login.html");
	}
?>