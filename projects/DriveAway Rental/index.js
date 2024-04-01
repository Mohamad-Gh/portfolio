const kia = { model: "Audi", Mark: "A1", Year: "2012" };

$(".cars div").click(function () {
  $(".cars div").removeClass("selected");
  $(this).addClass("selected");
  $(".car-img img").attr("src", `./images/${this.id}.png`);

  console.log(this);
  console.log(kia.model);
});
