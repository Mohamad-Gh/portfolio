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
});
