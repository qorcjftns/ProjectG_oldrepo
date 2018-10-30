import * as firebase from 'firebase';

let database;

var config = {
	apiKey: "AIzaSyCJDEkg6zNBi7K2Z2B9y_JJL5iPbYbo2as",
	authDomain: "projectg-b9024.firebaseapp.com",
	databaseURL: "https://projectg-b9024.firebaseio.com",
	projectId: "projectg-b9024",
	storageBucket: "projectg-b9024.appspot.com",
	messagingSenderId: "810147146204"
};

export const fire = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	database = firebase.database();
}

export const getFireDB = () => {
    return database.ref('/').once('value')
}