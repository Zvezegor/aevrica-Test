let dropBtn1 = document.getElementById("myDropdown1");
let dropBtn2 = document.getElementById("myDropdown2");
let dropBtn3 = document.getElementById("myDropdown3");

function drop1() {
  dropBtn1.classList.toggle("show");
}
function drop2() {
  dropBtn2.classList.toggle("show");
}
function drop3() {
  dropBtn3.classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  //закрытие модального
};
const prevBtn = document.getElementsByClassName("certificate__btn-prev");
const nextBtn = document.getElementsByClassName("certificate__btn-next");

const RewievPrevBtn = document.getElementsByClassName("rewievs__btn-prev");
const RewievNextBtn = document.getElementsByClassName("rewievs__btn-next");

$(document).ready(function () {
  $(".certificate__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
  });
});

$(document).ready(function () {
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    appendDots: $(".slick-slider-dots"),
  });
});
$(document).ready(function () {
  $(".rewievs__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: RewievPrevBtn,
    nextArrow: RewievNextBtn,
  });
});
