import loginUser from "../service/app-auth-service.js";
import { registerUser } from "../service/app-auth-service.js";
import { writeNewUserToDB } from "../service/database-service.js";

export const signin = {

    init: function() {
        this.addListeners();

    },
    addListeners: function() {

        // handles switching to the login form
        document.getElementById("bt-back-to-login").addEventListener('touchend', e=> {

            document.getElementById("register-user").classList.add("hidden");
            document.getElementById("login-user").classList.remove("hidden");
        });

        // handles switching to the create user form
        document.getElementById("bt-create-account").addEventListener('touchend', e=> {

            document.getElementById("register-user").classList.remove("hidden");
            document.getElementById("login-user").classList.add("hidden");
        });

        // Listener for the login button, login the user
        document.getElementById("bt-login-user").addEventListener('touchend', e=> {

            let loginForm = document.querySelector(".login-form");
            e.preventDefault();
            loginUser(loginForm["email"].value, loginForm["password"].value);
        });

        // Listener for the register button, login the user
        document.getElementById("bt-create-new-user").addEventListener('touchend', e=> {

            let registerForm = document.querySelector(".register-form");
            e.preventDefault();

            let email = registerForm["tf-register-user-email"].value;
            let password = registerForm["tf-register-user-password"].value;
            let name = registerForm["tf-register-user-password"].value;

            if (name != null && password != null && email != null ) {
                registerUser(email, password);
                writeNewUserToDB(name, email);
            }
            else {
                if (name === null )
                    alert("please enter a name");
                if (password === null)
                    alert("please enter a name");
                if (password === null)
                    alert("please enter a password");
            }
        });
    }
};
