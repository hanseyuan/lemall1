<?php
header("Content-Type:application/json;charset=UTF-8");
require_once("../init.php");
$output=[
	"recordCount"=>0, //条件的结果总数
	"pageSize"=>15, //每页显示条数
	"pageCount"=>0, //总页数=ceil(recordCount/pageSize)
	"pno"=>1, //页码
	"data"=>null //实际查找结果的数据
];
@$kw=$_REQUEST["kw"];
$cond="";
if($kw){
	$kws=explode(" ",$kw);
	for($i=0;$i<count($kws);$i++){
		$kws[$i]="title like '%".$kws[$i]."%'";
	}
	$cond=" where ".join("and",$kws)." order by sold_count DESC";
}
$sql="select count(*) from le_search ".$cond;
$output["recordCount"]=sql_execute($sql)[0]["count(*)"];
$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
$sql="SELECT * FROM le_search ".$cond;
@$pno=$_REQUEST["pno"];
if($pno){
	$output["pno"]=$pno;
	$start=$output["pageSize"]*($pno-1);
	$sql=$sql." limit $start,".$output["pageSize"];
}
$output["data"]=sql_execute($sql);

echo json_encode($output);