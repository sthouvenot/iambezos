console.clear();

var el = {};

$(document).click(function(){
  $('.list__ul').hide();
});

$(".placeholder").click(function(e){
  e.stopPropagation();
});


$('.placeholder').on('click', function(ev) {
  var element2 = document.getElementById("clickIcon");

  element2.style.visibility = "hidden";
  $('.placeholder').css('opacity', '1');
  $('.list__ul').toggle();
});

$('.list__ul a').on('click', function(ev) {
  ev.preventDefault();
  var index = $(this).parent().index();

  $('.placeholder').text($(this).text()).css('opacity', '1');

  switch ($(this).text()) {
    case "Jeff Bezos":
      increaseNumber = bezosIncrease;
      break;
    case "Bill Gates":
      increaseNumber = gatesIncrease;
      break;
    case "Elon Musk":
      increaseNumber = muskIncrease;
      break;
    case "Mark Zuckerberg":
      increaseNumber = zuckIncrease;
      break;
    case "a top .1% income earner":
      increaseNumber = toppointIncrease;
      break;
    case "a top 1% income earner":
      increaseNumber = toponeIncrease;
      break;
    case "an average American":
      increaseNumber = avgAmericanIncrease;
  }

  $('.list__ul').toggle();

});


$('select').on('change', function(e) {
  $('.placeholder').text(this.value);
  $(this).animate({
    width: $('.placeholder').width() + 'px'
  });
});
