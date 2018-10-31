import * as firebase from 'firebase';

let database;

import config from './Firebase-config';

export const fire = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	database = firebase.database();
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}