"use strict";
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */

let getNewContent = function() {
    $("header").style.height = "10%";
    $("wrapper").style.top = "10%";
    $("wrapper").style.height = "80%";
    $("title").innerHTML = "Vælg kabine";
    $("footer").style.top = "95%";
    $("width").style.width = "100%";
    $("wrapper").style.opacity = "0";
    $("container").style.opacity = "1";
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
                                                    // and use it
    for (let i = 0; i < obj.Booths.length; i++) {
        console.log(obj.Booths[i].Number);
        console.log(obj.Booths[i].Price);
        console.log(obj.Booths[i].Description);
    }
}

/*
 *  Listen to the button
 */
let initialize = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", initialize);