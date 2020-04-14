var num = 50;

$(document).ready(function () {
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > num) {
      $(".head1").addClass("d-none").delay(2500).show();
      $(".head2").removeClass("d-none").delay(2500).show();
      $(".head3").addClass("d-none").delay(2500).show();
    } else {
      $(".head2").addClass("d-none").delay(2500).show();
      $(".head1").removeClass("d-none").delay(2500).show();
    }
  });
});
