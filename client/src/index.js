import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from 'reactfire';

import App from "./App";
import AuthProvider from "./AuthProvider";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyCoodxNWGx1lmnwos6IH8oxRWXIv__yq5E",
  authDomain: "scholarly-a3a4a.firebaseapp.com",
  databaseURL: "https://scholarly-a3a4a.firebaseio.com",
  projectId: "scholarly-a3a4a",
  storageBucket: "scholarly-a3a4a.appspot.com",
  messagingSenderId: "29868901560",
  appId: "1:29868901560:web:dcbc42c5542a2c9a5fa04d",
  measurementId: "G-1Q8F902DY0"
}


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>

      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
