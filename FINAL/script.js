"use strict";
import {$} from "./modules/nQuery.js";

let xhr = new XMLHttpRequest()

xhr.addEventListener("load", function() {

	let count = 1;
	let countFrem = function() {
		if (count === 5) {
			console.log("error");
		} else {
			count = count + 1;
			$(count).setAttribute("class", "active");
			container();
		}
	}

	$("tilbage").addEventListener("click", function() {
		if (count === 1) {
	        console.log("error");
	    } else {
	        $(count).setAttribute("class", "");
	        count = count - 1;
	        container();
	    }
	});
    var height = 400;
	function container() {
	    if (count === 1) {
	        $("container").style.left = "0";
            $("kvittering").style.height = "0";
	    } else if (count === 2) {
	        $("container").style.left = "-100%";
	        $("kvittering").style.height = height + "px";
	    } else if (count === 3) {
	        $("container").style.left = "-200%";
            $("kvittering").style.bottom = "10%";
	    } else if (count === 4) {
	        $("container").style.left = "-300%";
            $("kvittering").style.bottom = "12.5%";
	    } else if (count === 5) {
	        $("container").style.left = "-400%";
	        $("kvittering").style.bottom = "35%";
	    }
	}

    let obj = JSON.parse(xhr.responseText);

    // sæt json funktioner for siden ind her
    console.log("This is my JSON function ARC");

    let kabiner = $("kabiner");

    for (let i = 0; i < obj.Booths.length; i++) { 

        let list = document.createElement("LI");

        // KABINER NUMMER
        let div = document.createElement("DIV");
        let para = document.createElement("P");
        para.setAttribute("class", "number");
        if (obj.Booths[i].IsInUse === true) {
        	para.setAttribute("style", "color:#C85052;");
        } else {
        	para.setAttribute("style", "color:#022B44");
        }
        let number = obj.Booths[i].Number;
        para.innerHTML = number;
        div.appendChild(para);


        // billede af kabiner
        div.setAttribute("class", "image");
        let img = document.createElement("IMG");
        if (obj.Booths[i].IsInUse === true) {
            img.setAttribute("src", "images/optaget.png");
            div.appendChild(img);
        } else {
            img.setAttribute("src", "images/ledig.png");
            div.appendChild(img);
        }
        list.appendChild(div);


        let kabineID = `${obj.Booths[i].ID}`
        console.log(kabineID);

        // timer hvis kabinen er aktiv
        if (obj.Booths[i].IsInUse === true) {
        	let div2 = document.createElement("DIV");
        	let time = document.createElement("LABEL");

        	let timer = obj.Booths[i].RunTime
			var timerX = setInterval(function(){ 
				timer = timer - 1; 
				let timeMin = Math.floor(timer / 60);
        		let timeSec = timer % 60;
        		if (timeSec < 10) {
        			timeSec = "0" + timeSec;
        		}
	        	time.innerHTML = timeMin + " : " + timeSec + " Tilbage";
				div2.appendChild(time);
				if (timer === 0) {
					div2.innerHTML = "";
					div2.setAttribute("style", "display:none;");
					para.setAttribute("style", "color:#7AC377");
					img.setAttribute("src", "images/ledig.png");
				}
				}, 1000);
			list.appendChild(div2);
        }

        if (obj.Booths[i].IsInUse === true) {
            console.log(("kabine " + obj.Booths[i].Number + " is in use"));
            let button = document.createElement("BUTTON");
            button.setAttribute("class", "vælgKabine");
            button.setAttribute("type", "reset");
            button.setAttribute("id", kabineID);
            button.setAttribute("disabled", true);
            button.setAttribute("style", "color:#C85052;cursor:inherit;");
            let buttonArrow = document.createElement("I");
            buttonArrow.setAttribute("class", "fas fa-lock");
            buttonArrow.setAttribute("style", "color:#C85052;cursor:inherit;");
            button.appendChild(buttonArrow);
            list.appendChild(button);
        } else {
            let button = document.createElement("BUTTON");
            button.setAttribute("class", "vælgKabine");
            button.setAttribute("type", "button");
            button.setAttribute("id", kabineID);
            let buttonArrow = document.createElement("I");
            buttonArrow.setAttribute("class", "far fa-arrow-alt-circle-right")
            button.appendChild(buttonArrow);
            list.appendChild(button);   
        }


        kabiner.appendChild(list);

        $(kabineID).addEventListener("click", function(e){
               if (kabineID == 3013){
                    const kabine1 = obj.Booths.find(kabine => kabine.ID === 3013);
                    console.log(kabine1);
                    timeSeconds(kabine1); //Tiden på kabine
                    price(kabine1); //pris på kabine
                    kabineNavn(kabine1); // navnet på kabinen
               } if (kabineID == 3186){
                    const kabine2 = obj.Booths.find(kabine => kabine.ID === 3186);
                    console.log(kabine2);
                    timeSeconds(kabine2); //Tiden på kabine
                    price(kabine2); //pris på kabine
                    kabineNavn(kabine2); // navnet på kabinen
               } if (kabineID == 3188){
                    const kabine3 = obj.Booths.find(kabine => kabine.ID ===  3188);
                    console.log(kabine3);
                    timeSeconds(kabine3); //Tiden på kabine
                    price(kabine3); //pris på kabine
                    kabineNavn(kabine3); // navnet på kabinen
               } if (kabineID == 3190){
                    const kabine4 = obj.Booths.find(kabine => kabine.ID === 3190);
                    console.log(kabine4);
                    timeSeconds(kabine4); //Tiden på kabine
                    price(kabine4); //pris på kabine
                    kabineNavn(kabine4); // navnet på kabinen
               } if (kabineID == 3192){
                    const kabine5 = obj.Booths.find(kabine => kabine.ID === 3192);
                    console.log(kabine5);
                    timeSeconds(kabine5); //Tiden på kabine
                    price(kabine5); //pris på kabine
                    kabineNavn(kabine5); // navnet på kabinen
               } if (kabineID == 3194){
                    const kabine5 = obj.Booths.find(kabine => kabine.ID === 3194);
                    console.log(kabine5);
                    timeSeconds(kabine5); //Tiden på kabine
                    price(kabine5); //pris på kabine
                    kabineNavn(kabine5); // navnet på kabinen
               }
               countFrem();
            });

        	//Tiden på kabinen
            function timeSeconds(kabine){
                let runTime = `${kabine.RunTime}`; 
                let given_seconds = runTime;
                let dateObj = new Date(given_seconds * 1000); 
                let minutes = dateObj.getUTCMinutes(); 
                let seconds = dateObj.getSeconds();
                return minutes + ':' + seconds;     
            };

            function kabineNavn(kabine) {
            	let kabineNavn = `${kabine.Description}`;
            	$("kabine").innerHTML = "Du har valgt: " + kabineNavn;
            }


            function price(kabine){
                let price = `${kabine.Price}`; //finder prisen
                var value = 10;

                var slider = $("myRange"); //slider
                var outputTime = $("time"); //placere tiden
                var priceTag = $("priceTag"); //skriver siden
                var ordreTime = $("ordreTime"); //skriver tiden ned
                var total = $("total"); //skriver den samlede pris

                outputTime.innerHTML = value + " min"; //printer value ud
                slider.setAttribute("min", "1"); //min 1 min
                slider.setAttribute("value", value); //value = 10
                slider.setAttribute("max",  `${kabine.MaxRunTime}`); //max 40 min
                
                    slider.oninput = function() {
                        outputTime.innerHTML = this.value + " min";//printer value ud
                        var totalPrice = this.value * price; //finder totalprisen
                        priceTag.innerHTML = totalPrice;
                        ordreTime.innerHTML = slider.value  + " min sol";
                        ordreTime.appendChild(priceTag);
                        total.innerHTML = totalPrice;
                    }
                priceTag.innerHTML = value * price + " kr";
                ordreTime.innerHTML = value + " Min";
                ordreTime.appendChild(priceTag);
                total.innerHTML = value * price;
            } //price kabiner slut

            $("confirmTime").addEventListener("click", countFrem);
            $("confirmProduct").addEventListener("click", countFrem);

    } // loop slut

    let productCounter = 0;

    for (var i = 0; i < 2; i++) {

        let productID = `${obj.Shelves[i].ID}`
        console.log(productID);

        let product = document.createElement("DIV");
        product.setAttribute("class", "products");
        product.setAttribute("id", productID);

        //title of product
        let productTitle = document.createElement("H2");
        productTitle.innerHTML = obj.Shelves[i].Presentation.Name;
        product.appendChild(productTitle);

        //images of product
        let productImage = document.createElement("IMG");
        productImage.setAttribute("src", obj.Shelves[i].Presentation.PictureURL);
        productImage.setAttribute("style", "width:50%;");
        product.appendChild(productImage);

        // info of product
        let productDescription = document.createElement("P");
        productDescription.innerHTML = obj.Shelves[i].Presentation.Description;
        product.appendChild(productDescription);

        //PRICE OF PRODUCT
        let productPrice = document.createElement("p");
        productPrice.innerHTML = obj.Shelves[i].Presentation.Price;
        product.appendChild(productPrice);

        //append all
        $("products").appendChild(product);

        $(productID).addEventListener("click", function(e){
               if (productID == 3281) {
                    const product1 = obj.Shelves.find(product => product.ID === 3281);
                    console.log(product1);
                    $("3281").style.opacity = "0.5"; // fades out product
                    chosenProduct(); //styles the confirm button
                    productsName(product1);
                    productsPrice(product1); //Price on product
               } if (productID == 3282) {
                    const product2 = obj.Shelves.find(product => product.ID === 3282);
                    console.log(product2);
                    $("3282").style.opacity = "0.5"; // fades out product
                    chosenProduct(); //styles the confirm button
                    productsName(product2);
                    productsPrice(product2); //Price on product
               }
            });
        function chosenProduct() {
            $("confirmProduct").innerHTML = "Bekræft";
            $("confirmProduct").setAttribute("style", "border:5px solid #022B44;")
        }

        function productsName(product) {
            if (productCounter === 10) {
                alert("Du kan ikke købe flere produkter");
            } else {
                productCounter++;
                console.log(productCounter);
                let produktName = `${product.Presentation.Name}`;
                let bp = document.createElement("DIV");
                bp.setAttribute("class", "produktListeNavn");

                bp.innerHTML = produktName;
                $("produktKøbt").appendChild(bp)

                increase();
            }
        }

        function productsPrice(product) {
            if (productCounter === 10) {
                console.log("Du kan ikke købe flere produkter");
            } else {
                let produktPris = `${product.Price}`;
                let bp = document.createElement("DIV");
                bp.setAttribute("class", "produktListe");

                bp.innerHTML = produktPris + " kr";
                $("produktKøbt").appendChild(bp)

                var totalPris = $("total").innerHTML;
                var integer = Number(totalPris);
                let sum = Number(integer) + Number(produktPris);
                $("total").innerHTML = sum;

                increase();
            }
        }
        function increase() {
            height = height + 20;
            $("kvittering").style.height = height + "px";
        }
        console.log(productCounter);
    } // loop slut

    $("kort").addEventListener("click", function() {
        showPayment();
        $("kortBox").style.opacity = "1";
        $("kortBox").style.top = "5%";
        $("kortBox").style.height = "90%";
    });
    $("mobilepay").addEventListener("click", function() {
        showPayment();
        $("mobilepayBox").style.opacity = "1";
        $("mobilepayBox").style.top = "5%";
        $("mobilepayBox").style.height = "90%";
    });
    $("sms").addEventListener("click", function() {
        showPayment();
        $("smsBox").style.opacity = "1";
        $("smsBox").style.top = "5%";
        $("smsBox").style.height = "90%";
    });
    $("solkort").addEventListener("click", function() {
        showPayment();
        $("solkortBox").style.opacity = "1";
        $("solkortBox").style.top = "5%";
        $("solkortBox").style.height = "90%";
    });
    $("confirmPayment").addEventListener("click", function() {
        $("solkortBox").style.display = "none";
        $("smsBox").style.display = "none";
        $("mobilepayBox").style.display = "none";
        $("kortBox").style.display = "none";
        $("confirmPayment").style.display = "none";
        let pt = $("paymentTypes").style;
        pt.top = "50%";
        pt.left = "50%";
        pt.width = "0";
        pt.height = "0";
        countFrem();
    });

    function showPayment() {
        let pt = $("paymentTypes").style;
        pt.top = "0";
        pt.left = "0";
        pt.width = "100%";
        pt.height = "100%";
    }


    //afslutning på json funktioner her

});
xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=2");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send();