<?php include 'head.php' ?>

<form id="container">

	<!-- 
		vælg kabine
	-->

	<div id="boxOne">
		<h1>
			Vælg Kabine
		</h1>
		<ul id="kabiner">
		</ul>
	</div>

	<!--
		Vælg varighed
	-->

	<div id="boxTwo">
		<h1>
			Vælg Varighed
		</h1>
		<article class="pickTime"><!--Vælg tid-->
		    <div>
		        <label for="time" id="time">10 min</label> <br>
		        <div class="sliderContainer">
		            <input type="range" class="slider" id="myRange">
		        </div>
		    </div>
		    <!--   -->
		</article>
		<button class="confirmButton" id="confirmTime" type="button">
			Bekræft
		</button>
		<article id="kvittering" class="ordre"> <!--Bestillingskassen-->
			<h2>
				Din Kvittering
			</h2>
			<div id="kabine"></div>
		    <div id="ordreTime"> 
		    	<div id="priceTag"></div>
		    </div>
		    <div id="produktKøbt">
		    </div>
		    <div class="ordreBlack">
		        Din bestilling <span id="total" style="float: right;">Total: 10 kr.</span>
		    </div>
		</article>
	</div>

	<!--
		Vælg tilbehør
	-->

	<div id="boxThree">
		<h1>
			Vi Anbefaler
		</h1>
		<div id="products">
			
		</div>
		<button class="confirmButton" id="confirmProduct" type="button">
			Spring over
		</button>
	</div>
	<div id="boxFour">
		<h1>
			Betalingsform
		</h1>
		<div id="paymentMethod">
			<button type="button" class="payment" id="kort">Kort <br><i class="far fa-credit-card"></i></button>
			<button type="button" class="payment" id="mobilepay">Mobilepay <br><img src="images/mobilepay.png"></button>
			<button type="button" class="payment" id="sms">SMS <br><i class="fas fa-sms"></i></button>
			<button type="button" class="payment" id="solkort">Solkort <br><i class="far fa-address-card"></i></button>
		</div>
	</div>
	<div id="boxFive">
		<h1>
			Godkendt
		</h1>
	</div>
</form>
<div id="paymentTypes">
	<div id="kortBox">
		<h1>Kort</h1>
	</div>	
	<div id="mobilepayBox">
		<h1>Mobilepay</h1>
	</div>
	<div id="smsBox">
		<h1>SMS</h1>
	</div>
	<div id="solkortBox">
		<h1>Solkort</h1>
	</div>
	<button class="confirmButton" id="confirmPayment">
		Bekræft Køb
	</button>
</div>

<?php include 'footer.php' ?>