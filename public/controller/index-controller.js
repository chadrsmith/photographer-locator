import { makeRequest } from "../service/app-routing.js";
import AppAuthService from "../service/app-auth-service.js";
import { FIREBASE_CONFIG } from "../core/constants/constants.js";

firebase.initializeApp(FIREBASE_CONFIG);    // TODO: replace with the config
firebase.database();

window.onload = function() {

    if (AppAuthService.checkUserAuth === false) {
        // user logged in, send them to home
        makeRequest("../view/home-feed.html");
    }
    else {
         // no user send to sign-in
        makeRequest("../view/login-view.html");
    }
};






