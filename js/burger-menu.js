let menu = document.getElementById("burger-menu");
window.addEventListener("resize", closeBurgerMenu);
function changeBurgerMenu() {
  menu.classList.toggle("open-menu");
  console.log(menu.classList.contains("open-menu"));
  if (menu.classList.contains("open-menu")) {
    document.addEventListener("click", clickOutsideBurgerMenu);
  } else {
    document.removeEventListener("click", clickOutsideBurgerMenu);
  }
}
function clickOutsideBurgerMenu(event) {
  if (
    !event.target.matches("#burger-menu") &&
    !event.target.matches("i.fa-solid.fa-bars.fa-2x") &&
    !event.target.parentElement.matches("#burger-menu") &&
    !event.target.parentElement.parentElement.matches("#burger-menu")&&
    !event.target.parentElement.parentElement.parentElement.matches("#burger-menu")
  ) {
    menu.classList.remove("open-menu");
  }
}
function scrolll(where){
  let destDiv = document.getElementById(where);
  destDiv.scrollIntoView({block: "start", behavior: "smooth"});
}
function closeBurgerMenu() {
  if (window.innerWidth > 992) {
    menu.classList.remove("open-menu");
  }
}