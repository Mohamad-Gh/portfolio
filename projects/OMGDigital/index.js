$(".fa-bars").click(function () {
  $("nav").toggleClass("show-bar");
  // console.log(this);
});
$(document).click(function (event) {
  if (event.target.id != "menu-bar") {
    console.log(event.target.id);
    $("nav").removeClass("show-bar");
  }
});
$(document).on("scroll", function (event) {
  $("nav").removeClass("show-bar");
  // console.log(this);
  // console.log(event);
  console.log($(event.target).scrollTop());
  // scrollTop shows the position of scroll in numbers
  if ($(this).scrollTop() >= 3100) {
    $("#bar-90").addClass("animation-90");
    $("#bar-96").addClass("animation-96");
    $("#bar-98").addClass("animation-98");
  }
});
