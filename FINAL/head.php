<!DOCTYPE html>
<html>
<head>
	<head>
	<title>Pay4it</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://kit.fontawesome.com/9f34627289.js"></script>
</head>
</head>
<body>
<nav>
	<button onclick="helpOpen()" id="helpOpen">
		<i class="far fa-question-circle"></i>
	</button>
</nav>
<div id="help">
	<h1 style="padding:50px">Hjælp</h1>
	<p style="padding:50px">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p style="padding:50px">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<button onclick="helpClose()" id="closeHelp">
		<i class="far fa-times-circle"></i>
	</button>
	<button style="padding:50px" onclick="helpClose()" id="closeHelpText">
		Luk
	</button>
	<script type="text/javascript">
		function helpOpen() {
			document.getElementById("help").style.height = "100%";
		}
		function helpClose() {
			document.getElementById("help").style.height = "0";
		}
	</script>
</div>