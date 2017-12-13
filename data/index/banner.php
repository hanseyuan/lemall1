<?php
header("Content-Type:application/json;charset=UTF-8");
    include("../init.php");
	$query = <<<'sql'
SELECT * FROM le_index_carousel;
sql;
$result1 = mysqli_query($conn, $query);
$posts = array();
while($row = mysqli_fetch_array($result1)) {
    $posts[] = $row;
}
echo json_encode($posts);
?>