export function writeNewUserToDB(name, email) {

    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email
    });
}

export function readUserData() {

    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            var userId = firebase.auth().currentUser.uid;

            return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
                console.log(username);
            });
        }
        else {
            // No user is signed in.
            // TODO: add error messaging
        }
    });
}
