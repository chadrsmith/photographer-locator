import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from "../core/constants/constants";

export class FirebaseConfigService {

    // constructor for the Firebase app
    constructor() {
        this.configureApp();
    }

    configureApp() {
        // initializes the Firebase app
        const app = firebase.initializeApp(FIREBASE_CONFIG);
        console.log(app);   // TODO: remove later

    }
}
