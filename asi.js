  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD6_9vqvPCVCcKTcaO-kAIJLZB2SorWCrc",
    authDomain: "aslam-88284.firebaseapp.com",
    projectId: "aslam-88284",
    storageBucket: "aslam-88284.firebasestorage.app",
    messagingSenderId: "226127164449",
    appId: "1:226127164449:web:d2f9e76595c1e7db31df60",
    measurementId: "G-LQXV1LV7BF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  let button = document.querySelector("#btn")
  button.addEventListener("click",function(event){
    event.preventDefault();
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Add")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

  })