
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_h_hV9E0XZo6zx0V6L4kSEut5fLoulV0",
  authDomain: "loginapp-4d4c1.firebaseapp.com",
  projectId: "loginapp-4d4c1",
  storageBucket: "loginapp-4d4c1.appspot.com", 
  messagingSenderId: "516741445792",
  appId: "1:516741445792:web:6ae8297f86c582acb731c5",
  measurementId: "G-XPD9FJWPRG",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
window.showForm = function (formId) {
  document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
  document.getElementById(formId).classList.add('active');
};


window.signup = function () {
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Successfully signed up!');
        showForm('loginForm');
      })
      .catch((error) => {
        alert('Signup Error: ' + error.message);
        console.error(error);
      });
  } else {
    alert('Please fill all fields.');
  }
};
window.login = function () {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login successful!');
      })
      .catch((error) => {
        alert('Login Error: ' + error.message);
        console.error(error);
      });
  } else {
    alert('Please fill all fields.');
  }
};

window.forgotPassword = function () {
  const email = document.getElementById('forgotEmail').value.trim();

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent!');
        showForm('loginForm');
      })
      .catch((error) => {
        alert('Error: ' + error.message);
        console.error(error);
      });
  } else {
    alert('Please enter your email.');
  }
};
