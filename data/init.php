<?php
//$db_host = 'qdm114262560.my3w.com';
//$db_user = 'qdm114262560';
//$db_password = '77585210zzj';
//$db_database = 'qdm114262560_db';
//$db_port = 3306;
//$db_charset = 'UTF8';
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'qdm114262560_db';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect(
  $db_host, $db_user, $db_password, $db_database, $db_port);
  mysqli_query($conn, "SET NAMES $db_charset");
function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);

  if(!$result){
    return  "查询执行失败！请检查SQL语法：$sql";
 }else {
 	$posts = array();
	while($row = mysqli_fetch_array($result)) {
    $posts[] = $row;
}
    return $posts;
  }
}