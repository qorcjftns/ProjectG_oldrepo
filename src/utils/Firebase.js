import * as firebase from 'firebase';
import {config} from './Firebase-config';

let database;

export const fire = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	database = firebase.database();
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}