"use strict";
import {Ajax} from "./modules/Ajax.js";

// save keystrokes
const $ = function (foo) {
    return document.getElementById(foo);    
}

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("testjson.json", txtHandler);
}

/*
 * readystatechange/load event handler 
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
    
    //vælg kabine
    for (var i = 0; i < obj.Booths.length; i++) {
        let kabineID = `${obj.Booths[i].ID}`
        var kabine = document.createElement("div");
        kabine.setAttribute("id", kabineID); 
        kabine.setAttribute("class", "test");
        $("test").appendChild(kabine);

        console.log('id=' + kabineID);
            $(kabineID).addEventListener("click", function(e){
               if (kabineID == 5241){
                    const kabine1 = obj.Booths.find(kabine => kabine.ID === 5241);
                    console.log(kabine1);
                    timeSeconds(kabine1); //Tiden på kabine
                    console.log(timeSeconds(kabine1));
                    price(kabine1); //pris på kabine
                    console.log(price(kabine1));
               } if (kabineID == 5243){
                    const kabine2 = obj.Booths.find(kabine => kabine.ID === 5243);
                    console.log(kabine2);
                    timeSeconds(kabine2); //Tiden på kabine
                    console.log(timeSeconds(kabine2));
                    price(kabine2); //pris på kabine
                    console.log(price(kabine2));
               } if (kabineID == 5245){
                    const kabine3 = obj.Booths.find(kabine => kabine.ID ===  5245);
                    console.log(kabine3);
                    timeSeconds(kabine3); //Tiden på kabine
                    console.log(timeSeconds(kabine3));
                    price(kabine3); //pris på kabine
                    console.log(price(kabine3));
               } if (kabineID == 5247){
                    const kabine4 = obj.Booths.find(kabine => kabine.ID === 5247);
                    console.log(kabine4);
                    timeSeconds(kabine4); //Tiden på kabine
                    console.log(timeSeconds(kabine4));
                    price(kabine4); //pris på kabine
                    console.log(price(kabine4));
               }
               
            }); //kabine


            //Tiden på kabinen
            function timeSeconds(kabine){
                let runTime = `${kabine.RunTime}`; 
                let given_seconds = runTime;
                let dateObj = new Date(given_seconds * 1000); 
                let minutes = dateObj.getUTCMinutes(); 
                let seconds = dateObj.getSeconds();
                return minutes + ':' + seconds;     
            };


            function price(kabine){
                let price = `${kabine.Price}`; //finder prisen
                var value = 10;
                console.log(price);


                var slider = $("myRange"); //slider
                var outputTime = $("time"); //placere tiden
                var priceTag = $("priceTag"); //skriver siden
                var ordreTime = $("ordreTime"); //skriver tiden ned
                var total = $("total"); //skriver den samlede pris

                outputTime.innerHTML = slider.value + " min"; //printer value ud
                slider.setAttribute("min", "1"); //min 1 min
                slider.setAttribute("value", value); //value = 10
                slider.setAttribute("max",  `${kabine.MaxRunTime}`); //max 40 min
                
                    slider.oninput = function() {
                        outputTime.innerHTML = this.value + " min";//printer value ud
                        var totalPrice = this.value * price; //finder totalprisen
                        priceTag.innerHTML = "Din pris: " +  totalPrice + " kr." ;
                        ordreTime.innerHTML = slider.value  + " min sol";
                        total.innerHTML = "Total " +  totalPrice  + " kr.";
                    }
                priceTag.innerHTML = "Din pris: " + value * price  + " kr.";
                ordreTime.innerHTML = value + " min sol";
                total.innerHTML = "Total " +  value * price  + " kr.";
                
            }

        









        };// loop
};// json

/*
 *  Listen to the button
 */
window.addEventListener("load", getNewContent); 

