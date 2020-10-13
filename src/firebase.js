import firebase from "firebase";

//Firestore is a hybrid of SQL and noSQL database
//FireStore is different than Firebase Real-time database

const firebaseConfig = {
	apiKey: "AIzaSyAADhpdFNuO56MW3Vqm3FswD_Pd4HT1v3U",
	authDomain: "slack-clone-f9a6e.firebaseapp.com",
	databaseURL: "https://slack-clone-f9a6e.firebaseio.com",
	projectId: "slack-clone-f9a6e",
	storageBucket: "slack-clone-f9a6e.appspot.com",
	messagingSenderId: "376571626115",
	appId: "1:376571626115:web:8986ff3829873970a411b6",
	measurementId: "G-SG1C6PD0QE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
