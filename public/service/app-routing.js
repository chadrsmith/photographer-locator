import { signin } from "../controller/login-controller.js";
import { home } from "../controller/home-view-controller.js";

var httpRequest;
var responseText;
var filePath;

export function makeRequest(url) {
    filePath = url;
    httpRequest = false;
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {

        alert("Your internet browser does not support XML.");
        return false;
    }
    else {

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", url, true);
        httpRequest.send();
    }
}
function alertContents() {
    if (httpRequest.readyState == 0) {}
    if (httpRequest.readyState == 1) {}
    if (httpRequest.readyState ==2) {}
    if (httpRequest.readyState == 3) {}

    if (httpRequest.readyState == 4) {
        // Everything is ready, time to change the contents of the screen
        responseText = httpRequest.responseText;
        document.getElementById("main-content").innerHTML = responseText;

        if (filePath === "../view/login-view.html")
            signin.init();
        else if (filePath === "../view/home-feed.html")
            home.init();
    }
}
