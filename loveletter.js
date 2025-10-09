$(document).ready(function () {
  $("#container-valen")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    setTimeout(function () {
      $("#container-valen").css("display", "none");
      $(".card-container").css("display", "block");
    }, 1000);
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
