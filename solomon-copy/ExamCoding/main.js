// dropdown
function dropDown() {
  document.querySelector("#myDropdown").classList.toggle("show");
}
function secdropDown() {
  document.querySelector("#secDropdown").classList.toggle("show");
}
function thirddropDown() {
  document.querySelector("#thirdDropdown").classList.toggle("show");
}
const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".container");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    nav.classList.toggle("list_menu_active");
    line1.classList.toggle("line1_active");
    line2.classList.toggle("line2_active");
    line3.classList.toggle("line3_active");
  });
};

showNav();
