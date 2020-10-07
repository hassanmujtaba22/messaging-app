import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYmO1MjY6JHqMupNUR0c7EmGxS2FmpcjU",
  authDomain: "chat-app-9f097.firebaseapp.com",
  databaseURL: "https://chat-app-9f097.firebaseio.com",
  projectId: "chat-app-9f097",
  storageBucket: "chat-app-9f097.appspot.com",
  messagingSenderId: "1011357501650",
  appId: "1:1011357501650:web:3408daef344f4c27ef850b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.store = store
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
