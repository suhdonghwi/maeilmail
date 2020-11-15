import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKIUCOk3yw8Q_ku3rWu0idgirszNDiy4M",
  authDomain: "maeilmail-f0eee.firebaseapp.com",
  databaseURL: "https://maeilmail-f0eee.firebaseio.com",
  projectId: "maeilmail-f0eee",
  storageBucket: "maeilmail-f0eee.appspot.com",
  messagingSenderId: "238455436713",
  appId: "1:238455436713:web:a8b853744697a5ddc540b8",
  measurementId: "G-XYJBDBP058",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
