let img = document.querySelectorAll(".container img");
//Aonther Method
// img.forEach(function (ele) {
//   ele.onmouseover = function () {
//     ele.style.width = "100%";
//     ele.style.borderRadius = "20px";
//   };
//   ele.onmouseout = function () {
//     ele.style.width = "50px";
//   };
// });
//Aonther Method
// img.forEach(function (ele) {
//   ele.onmouseover = function () {
//     ele.classList.toggle("active");
//   };
//   ele.onmouseout = function () {
//     ele.classList.toggle("active");
//   };
// });
img.forEach(function (ele) {
  ele.addEventListener("mouseover", function () {
    ele.classList.toggle("active");
  });
  ele.addEventListener("mouseout", function () {
    ele.classList.toggle("active");
  });
});
