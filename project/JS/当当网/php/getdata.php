<?php  
	require "conn.php";
	//banner
	$result=mysql_query("select * from bannert");
	$bannertarr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$bannertarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	$result1=mysql_query("select * from bannerb1");
	$bannerb1arr=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$bannerb1arr[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}

	$result2=mysql_query("select * from bannerb2");
	$bannerb2arr=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$bannerb2arr[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}

	//小tab
	$resulttab=mysql_query("select * from smalltab");
	$smalltabarr=array();
	for($i=0;$i<mysql_num_rows($resulttab);$i++){
		$smalltabarr[$i]=mysql_fetch_array($resulttab,MYSQL_ASSOC);
	}

	$resulttab1=mysql_query("select * from smalltab1");
	$smalltab1arr=array();
	for($i=0;$i<mysql_num_rows($resulttab1);$i++){
		$smalltab1arr[$i]=mysql_fetch_array($resulttab1,MYSQL_ASSOC);
	}

	//小轮播
	$resultslunbo=mysql_query("select * from slunbo");
	$slunboarr=array();
	for($i=0;$i<mysql_num_rows($resultslunbo);$i++){
		$slunboarr[$i]=mysql_fetch_array($resultslunbo,MYSQL_ASSOC);
	}
	
	//秒杀
	$ms=mysql_query("select * from mstime");
	$msarr=array();
	for($i=0;$i<mysql_num_rows($ms);$i++){
		$msarr[$i]=mysql_fetch_array($ms,MYSQL_ASSOC);
	}

	//尾品汇
	$ql=mysql_query("select * from quicklyl");
	$qlarr=array();
	for($i=0;$i<mysql_num_rows($ql);$i++){
		$qlarr[$i]=mysql_fetch_array($ql,MYSQL_ASSOC);
	}
	$qr=mysql_query("select * from quicklyr");
	$qrarr=array();
	for($i=0;$i<mysql_num_rows($qr);$i++){
		$qrarr[$i]=mysql_fetch_array($qr,MYSQL_ASSOC);
	}

	//大tab
	$resultbtab=mysql_query("select * from bigtab");
	$bigtabarr=array();
	for($i=0;$i<mysql_num_rows($resultbtab);$i++){
		$bigtabarr[$i]=mysql_fetch_array($resultbtab,MYSQL_ASSOC);
	}

	$resultb2tab=mysql_query("select * from bigtab2");
	$bigtab2arr=array();
	for($i=0;$i<mysql_num_rows($resultb2tab);$i++){
		$bigtab2arr[$i]=mysql_fetch_array($resultb2tab,MYSQL_ASSOC);
	}

	$resultb3tab=mysql_query("select * from bigtab3");
	$bigtab3arr=array();
	for($i=0;$i<mysql_num_rows($resultb3tab);$i++){
		$bigtab3arr[$i]=mysql_fetch_array($resultb3tab,MYSQL_ASSOC);
	}

	$resultb4tab=mysql_query("select * from bigtab4");
	$bigtab4arr=array();
	for($i=0;$i<mysql_num_rows($resultb4tab);$i++){
		$bigtab4arr[$i]=mysql_fetch_array($resultb4tab,MYSQL_ASSOC);
	}

	$resultb5tab=mysql_query("select * from bigtab5");
	$bigtab5arr=array();
	for($i=0;$i<mysql_num_rows($resultb5tab);$i++){
		$bigtab5arr[$i]=mysql_fetch_array($resultb5tab,MYSQL_ASSOC);
	}

	//推荐
	$resultcommend=mysql_query("select * from commend");
	$commendarr=array();
	for($i=0;$i<mysql_num_rows($resultcommend);$i++){
		$commendarr[$i]=mysql_fetch_array($resultcommend,MYSQL_ASSOC);
	}

	class indexdata{

	}
	$index=new indexdata();
	$index->bannertdata=$bannertarr;
	$index->bannerb1data=$bannerb1arr;
	$index->bannerb2data=$bannerb2arr;
	$index->smalltabdata=$smalltabarr;
	$index->smalltab1data=$smalltab1arr;
	$index->slunbodata=$slunboarr;
	$index->ms=$msarr;
	$index->ql=$qlarr;
	$index->qr=$qrarr;
	$index->bigtabdata=$bigtabarr;
	$index->bigtab2data=$bigtab2arr;
	$index->bigtab3data=$bigtab3arr;
	$index->bigtab4data=$bigtab4arr;
	$index->bigtab5data=$bigtab5arr;
	$index->commenddata=$commendarr;

	echo json_encode($index);	
		
?>