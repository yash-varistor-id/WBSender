// navigation bar
const toggleMenu = () => {
  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");
  const iconName =
    src === "../images/menu.svg" ? "../images/close.svg" : "../images/menu.svg";

  burgerMenu.setAttribute("src", iconName);
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("navigation--mobile");
};
//nav ends

//login/signup box
const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});
//login/signup box

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGSt7eq31Z40FNmrYUmnNpqzBhmNN_dB0",
  authDomain: "wbsender-2fc1f.firebaseapp.com",
  databaseURL: "https://wbsender-2fc1f-default-rtdb.firebaseio.com",
  projectId: "wbsender-2fc1f",
  storageBucket: "wbsender-2fc1f.appspot.com",
  messagingSenderId: "752927764771",
  appId: "1:752927764771:web:ca1008db306c7eb2cd9c96",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signup = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      document.write("You have registered successfully");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};



const signin = () => {
  const email = document.getElementById("emails").value;
  const password = document.getElementById("pass").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    document.write("You have signed up successfully");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(Invalid);
  });

}