<?php

	$img = $_GET['img'];

?>

<!DOCTYPE HTML>
<html>
	<head>
		<title>Image Crop</title>
		<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/crop-style.css">
		<script src="js/jquery.js"></script>
		<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	</head>
	<body>

		<div class="image-full-div">
			<img src="<?php echo $img; ?>" />
			<div id="crop_tool"></div>
			<button id="crop_btn" img_name="<?php echo $img; ?>">CROP IMAGE</button>
		</div>

		<script src="js/index.js"></script>

	</body>

</html>

