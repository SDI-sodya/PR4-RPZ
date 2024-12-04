import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAvy1Q95soc5t0sjBMHTA7b401ZXAkeMWE",
    authDomain: "tesburger-f569b.firebaseapp.com",
    databaseURL: "https://tesburger-f569b-default-rtdb.firebaseio.com",
    projectId: "tesburger-f569b",
    storageBucket: "tesburger-f569b.firebasestorage.app",
    messagingSenderId: "195825113110",
    appId: "1:195825113110:web:0d2cd94897f7ece3963d37"
};

const app = initializeApp(firebaseConfig);
console.log(app);
export { app };
