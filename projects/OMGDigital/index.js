$(".fa-bars").click(function () {
  $("nav").toggleClass("show-bar");
  // console.log(this);
});
//closing menu bar with clicking on the page
$(document).click(function (event) {
  if (event.target.id != "menu-bar") {
    // console.log(event.target.id);
    $("nav").removeClass("show-bar");
  }
});
// close the menu bar with using scroll
$(document).on("scroll", function (event) {
  $("nav").removeClass("show-bar");

  // console.log($(event.target).scrollTop());
  // scrollTop shows the position of scroll in numbers
  // run the filling animation with scroll
  if ($(this).scrollTop() >= 3100) {
    $("#bar-90").addClass("animation-90");
    $("#bar-96").addClass("animation-96");
    $("#bar-98").addClass("animation-98");
  }
});
