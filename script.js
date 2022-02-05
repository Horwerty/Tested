var menu = document.getElementById("menu");
var UpperNav = document.getElementById("UpperNav");

menu.addEventListener("click", function () {
      UpperNav.classList.toggle("displayNav");
});

UpperNav.addEventListener("click", function () {
      UpperNav.classList.remove("displayNav");
});
