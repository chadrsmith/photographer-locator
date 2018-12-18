//
// Author: Chad Smith
// Class: AppAuthService
//
// Created on: 11/20/2018
//
import { makeRequest } from "./app-routing.js";

// signs the user into the pwa
export default function loginUser(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Not authenticated, do error checking here
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    // User authenticated, make AJAX request for the home feed
    makeRequest("../view/home-feed.html");
}

export function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    // User created, make AJAX request for the home feed
    makeRequest("../view/home-feed.html");
}

// signs the user out of AQVA app
export function signOutUser() {

    firebase.auth().signOut().then(function () {
        // Sign-out successful, make AJAX request for home page here.
        makeRequest("../view/login-view.html");
    }).catch(function (error) {
        // An error happened, error check here
    });
}

export function checkUserAuth() {
    // check to see if the user is logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var username = user.username;
            var email = user.email;
            var name = user.name;
            var uid = user.uid;

            return true;
        }
        else {
            // user is not logged in, take them to sign in
            makeRequest("../view/login-view.html");
            return false
        }
    });
}

