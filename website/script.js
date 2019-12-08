"use strict";
import {$} from "./modules/nQuery.js";

let xhr = new XMLHttpRequest()

xhr.addEventListener("load", function() {
    let obj = JSON.parse(xhr.responseText);

    let kabiner = $("kabiner");
    for (let i = 0; i < obj.Booths.length; i++) {
        let list = document.createElement("LI");

        // KABINER NUMMER
        let para = document.createElement("P");
        para.setAttribute("class", "number");
        let number = obj.Booths[i].Number;
        para.innerHTML = number;
        list.appendChild(para);

        // KABINE BILLEDE
        let div = document.createElement("DIV");
        div.setAttribute("class", "image");
        let img = document.createElement("IMG");
        if (obj.Booths[i].IsInUse === true) {
            img.setAttribute("src", "images/inUse.png");
            div.appendChild(img);
            let time = document.createElement("LABEL");
            let runTime = (obj.Booths[i].RunTime) / 60;
            time.innerHTML = runTime + " Min";
            div.appendChild(time);
        } else {
            img.setAttribute("src", "images/ready.png");
            div.appendChild(img);
        }
        list.appendChild(div);

        // Tilbehør til kabiner
        let perks = document.createElement("DIV");
        perks.setAttribute("class", "perks");
        let wind = document.createElement("I");
        wind.setAttribute("class", "fas fa-wind");
        let spray = document.createElement("I");
        spray.setAttribute("class", "fas fa-spray-can");
        let music = document.createElement("I");
        music.setAttribute("class", "fas fa-music");
        let tilbehør = document.createElement("P");
        tilbehør.setAttribute("class", "perksP")
        if (obj.Booths[i].InfoText === "Ventilation") {
            tilbehør.appendChild(wind);
        } else if (obj.Booths[i].InfoText === "VentilationVand") {
            tilbehør.appendChild(wind);
            tilbehør.appendChild(spray);
        } else if (obj.Booths[i].InfoText === "VentilationVandRør") {
            tilbehør.appendChild(wind);
            tilbehør.appendChild(spray);
            tilbehør.appendChild(music);
        }
        perks.appendChild(tilbehør);
        list.appendChild(perks);

        //Knap der vælger kabine og går videre 
        let button = document.createElement("BUTTON");
        button.setAttribute("class", "vælgKabine");
        button.setAttribute("type", "button");
        let buttonArrow = document.createElement("I");
        buttonArrow.setAttribute("class", "far fa-arrow-alt-circle-right")
        button.appendChild(buttonArrow);
        list.appendChild(button);

        kabiner.appendChild(list);

        console.log(obj.Booths[i].Number);
        console.log(obj.Booths[i].Price);
        console.log(obj.Booths[i].Description);
    }

    function vælgKabine() {
        console.log("hej");
    }

    //Værdi af range field
    var slider = $("myRange");
    var output = $("time");
    output.innerHTML = slider.value + " min";

    slider.oninput = function() {
        output.innerHTML = this.value + " min";
        
        //udskriv prisen under range field
        var price = this.value * 2;
        $("priceTag").innerHTML = "Din pris: " +  price + " kr." ;
        $("ordreTime").innerHTML = slider.value  + " min sol";
        $("total").innerHTML = "Total " +  price  + " kr.";


    }
    $("priceTag").innerHTML = "Din pris: " +  20 + " kr.";
    $("ordreTime").innerHTML = 10 + " min sol";
    $("total").innerHTML = "Total " +  20  + " kr.";
});
xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send();

let count = 1;
let countFrem = function() {
    if (count === 5) {
        console.log("error");
    } else {
        count = count + 1;
        $(count).setAttribute("class", "active");
        container();
        console.log(count);
    }
}
let countTilbage = function() {
    if (count === 1) {
        console.log("error");
    } else {
        $(count).setAttribute("class", "");
        count = count - 1;
        container();
        console.log(count);
    }
}
let countReset = function() {
    count = 1;
    console.log(count);
}
function container() {
    if (count === 1) {
        $("container").style.left = "0";
    } else if (count === 2) {
        $("container").style.left = "-100%";
    } else if (count === 3) {
        $("container").style.left = "-200%";
    } else if (count === 4) {
        $("container").style.left = "-300%";
    } else if (count === 5) {
        $("container").style.left = "-400%";
    }
}

let helpOpen = function() {
    $("helpOpen").style.display = "none";
    $("helpClose").style.display = "block";
    $("helpContainer").style.transitionDelay = "0.5s";
    $("help").style.transitionDelay = "0s";
    $("help").style.width = "100%";
    $("help").style.height = "100%";
    $("help").style.opacity = "1";
    $("helpContainer").style.opacity = "1";
}
let helpClose = function() {
    $("helpOpen").style.display = "block";
    $("helpClose").style.display = "none";
    $("help").style.transitionDelay = "0.5s";
    $("helpContainer").style.transitionDelay = "0s";
    $("help").style.width = "";
    $("help").style.height = "";
    $("help").style.opacity = "0";
    $("helpContainer").style.opacity = "0";
}

let initialize = function () {
    $("helpOpen").addEventListener("click", helpOpen);
    $("helpClose").addEventListener("click", helpClose);
    $("helpCloseTwo").addEventListener("click", helpClose);
    $("tilbage").addEventListener("click", countTilbage);
    $("reset").addEventListener("click", countReset);
    document.getElementsByClassName("vælgKabine").addEventListener("click", vælgKabine);
}

window.addEventListener("load", initialize);