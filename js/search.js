$("#search").keyup(function(){     
  var input = $(this).val();
  $("#gallery li a").each(function(){
    if ($(this).attr('data-lightview-caption').search(new RegExp(input, "i")) < 0) {
    $(this).fadeOut();
    } else {
    $(this).show();
  }
  });
});