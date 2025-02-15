import { auth, createUserWithEmailAndPassword, signOut } from "./config.js";

document.querySelector("#btn").addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      Swal.fire({
        title: "Success!",
        text: "Signed in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      email.value = "";
      password.value = "";
      document.querySelector("#logout");
    })
    .catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    });
});
