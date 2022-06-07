import * as firebase from 'firebase-admin';
const serviceAccount = require('../auth/serviceAccount.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

export function createPostID() {
    const idLength = 20;
    const ID = Math.random() * 10**idLength;

    // CHECK IF ID ALREADY EXISTS IN FIREBASE

    return ID;
}
