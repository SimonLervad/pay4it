<?php include 'header.php' ?>
<script>
	document.getElementById("helpOpen").style.color = "black";
	document.getElementById("helpClose").style.color = "black";
	document.getElementById("helpCloseTwo").style.color = "black";
</script>
<form id="container">
	<div id="boxOne">
		<h1>
			Vælg Kabine
		</h1>
		<ul id="kabiner">
		</ul>
	</div>
	<div id="boxTwo">
		<h1>
			Vælg Varighed
		</h1>
		<section>
            <article class="pickTime"><!--Vælg tid-->
            <div>
                <label for="time" id="time">10 min</label> <br>
                <div class="sliderContainer">
                    <input type="range" min="1" max="60" value="15" class="slider" id="myRange">
                </div>
            </div>
                <div id="priceTag"> </div>
            </article>

        <article class="ordre"> <!--Bestillingskassen-->
            <div class="ordreBlack">Din bestilling <label id="total" style="float: right;">Total: 10 kr.</label></div>
            <div id="ordreTime"> </div>
        </article>


        </section>
	</div>
	<div id="boxThree">
		<h1>
			Vi Anbefaler
		</h1>
	</div>
	<div id="boxFour">
		<h1>
			Betalingsform
		</h1>
	</div>
	<div id="boxFive">
		<h1>
			Godkendt
		</h1>
	</div>
</form>
<?php include 'footer.php' ?> 
<script type="module" src="script.js"></script>
</body>
</html>