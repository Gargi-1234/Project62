import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD08blPH1lZbI92hg7ULO2yKK6HRaTyzIw",
  authDomain: "project-60-a6814.firebaseapp.com",
  databaseURL: "https://project-60-a6814-default-rtdb.firebaseio.com",
  projectId: "project-60-a6814",
  storageBucket: "project-60-a6814.appspot.com",
  messagingSenderId: "13457801029",
  appId: "1:13457801029:web:7418a893f40a53db30882c"
};

firebase.initializeApp(firebaseConfig)
export default firebase.database()