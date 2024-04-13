const kia = {
  price: "37 $",
  model: "Kia",
  Mark: "EV6",
  Year: "2016",
  doors: "4/5",
  AC: "Yes",
};

$(".cars div").click(function () {
  $(".cars div").removeClass("selected");
  $(this).addClass("selected");
  $(".car-img img").attr("src", `./images/${this.id}.png`);
  switch (this.id) {
    case "kia":
      $("#price").text(kia["price"]);
      $("#model").text(Kia["model"]);
      $("#mark").text(kia["Mark"]);
      $("#year").text(kia["year"]);
      $("#doors").text(kia["doors"]);
      $("#ac").text(kia["AC"]);
      break;
    case "chevrolet":
      $("#price").text("70 $");
      $("#model").text("Chevrolet");
      $("#mark").text("Z06");
      $("#year").text("2020");
      $("#doors").text("2");
      $("#ac").text("Yes");
      break;

    case "Hyundai":
      $("#price").text("40 $");
      $("#model").text("Hyundai");
      $("#mark").text("Ioniq 6");
      $("#year").text("2018");
      $("#doors").text("4/5");
      $("#ac").text("Yes");
      break;
    case "Audi_A6":
      $("#price").text("38 $");
      $("#model").text("Audi");
      $("#mark").text("A6");
      $("#year").text("2017");
      $("#doors").text("4/5");
      $("#ac").text("Yes");
      break;
    case "Audi_All":
      $("#price").text("40 $");
      $("#model").text("Audi");
      $("#mark").text("All Round");
      $("#year").text("2019");
      $("#doors").text("4/5");
      $("#ac").text("Yes");
      break;
    case "BMW":
      $("#price").text("60 $");
      $("#model").text("BMW");
      $("#mark").text("M4");
      $("#year").text("2022");
      $("#doors").text("2");
      $("#ac").text("Yes");
      break;
  }
});
$(".QA-box").click(function () {
  let child = $(this).children("div");
  // console.log(child);
  // let child = $(this).find(".questions");
  if ($(child).hasClass("selected")) {
    $(child).toggleClass("selected");
    $(child).next().toggleClass("selected");
  } else {
    $(".questions.selected").removeClass("selected");
    $(".responses.selected").removeClass("selected");
    $(child).toggleClass("selected");
    $(child).next().toggleClass("selected");
  }
});
