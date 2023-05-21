// toogle
const navbarNav = document.querySelector(`.navbar-nav`);

//klik hamburger
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle("active");
};

// remove humberger klik anywhere
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
