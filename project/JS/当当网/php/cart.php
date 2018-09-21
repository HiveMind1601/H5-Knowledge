<?php  
	require "conn.php";
	$id=$_GET['id'];
	$result=mysql_query("select * from detail where sid=$id");
	$cartarr=array();	
	for($i=0;$i<mysql_num_rows($result);$i++){
		$cartarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($cartarr);
?>