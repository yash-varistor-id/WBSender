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

