<?php
$con = mysqli_connect("localhost", "root", "", "farmerPortal");


//getting the categories
function getcats() {

	global $con;

	$get_cats = "select * from categories";

	$run_cats = mysqli_query($con, $get_cats);

	while ($row_cats = mysqli_fetch_array($run_cats)) {

		$cat_id = $row_cats['cat_id'];
		$cat_title = $row_cats['cat_title'];

	echo "<li><a href = '#'>$cat_title</a></li>";
	}

}

function getseeds() {

	global $con;

	$get_seeds = "select * from Seeds";

	$run_seeds = mysqli_query($con, $get_seeds);

	while ($row_seeds = mysqli_fetch_array($run_seeds)) {

		$seed_id = $row_seeds['seed_id'];
		$seed_title = $row_seeds['seed_title'];

	echo "<li><a href = '#'>$seed_title</a></li>";
	}

}


?>






