$("button").on("click", function){
  $("h1").slideUp();
});

$("button").on("click", function){
  $("h1").slideDown();
});

$("h1").animate({color:red});

$(document).ready(function() {

  $(".show-password, .hide-password").on('click', function() {
    var passwordId = $(this).parents('li:first').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
      $("#" + passwordId).attr("type", "text");
      $(this).parent().find(".show-password").hide();
      $(this).parent().find(".hide-password").show();
    } else {
      $("#" + passwordId).attr("type", "password");
      $(this).parent().find(".hide-password").hide();
      $(this).parent().find(".show-password").show();
    }
  });
});
