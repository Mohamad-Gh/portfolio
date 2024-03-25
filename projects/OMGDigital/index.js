$(".fa-bars").click(function () {
  $("nav").toggleClass("show");
  // console.log(this);
});
$(document).click(function (event) {
  if (event.target.id != "menu") {
    console.log(event.target.id);
    $("nav").removeClass("show");
  }
});
$(document).on("scroll", function (event) {
  $("nav").removeClass("show");
});
