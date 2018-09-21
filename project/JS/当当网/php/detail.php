<?php  
	require "conn.php";
	$id=$_GET['id'];
	$detail=mysql_query("select * from detail where sid=$id");
	$detailarr=array();	
	for($i=0;$i<mysql_num_rows($detail);$i++){
		$detailarr[$i]=mysql_fetch_array($detail,MYSQL_ASSOC);
	}
	echo json_encode($detailarr);
?>