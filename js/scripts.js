console.clear();

var el = {};

$('.placeholder').on('click', function (ev) {
  $('.placeholder').css('opacity', '1');
  $('.list__ul').toggle();
});

 $('.list__ul a').on('click', function (ev) {
   ev.preventDefault();
   var index = $(this).parent().index();

   $('.placeholder').text( $(this).text() ).css('opacity', '1');

   console.log($('.list__ul').find('li').eq(index).html());

   if($(this).text() === "Jeff Bezos"){
     if(increaseNumber !== bezosIncrease){
     increaseNumber = bezosIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "Bill Gates"){
     if(increaseNumber !== gatesIncrease){
     increaseNumber = gatesIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "Elon Musk"){
     if(increaseNumber !== muskIncrease){
     increaseNumber = muskIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "Mark Zuckerberg"){
     if(increaseNumber !== zuckIncrease){
     increaseNumber = zuckIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "a top .1% income earner"){
     if(increaseNumber !== toppointIncrease){
     increaseNumber = toppointIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "a top 1% income earner"){
     if(increaseNumber !== toponeIncrease){
     increaseNumber = toponeIncrease;
     savedIncrease = 0;
      }
   }
   else if($(this).text() === "an average american"){
     if(increaseNumber !== avgAmericanIncrease){
     increaseNumber = avgAmericanIncrease;
     savedIncrease = 0;
      }
   }

   $('.list__ul').toggle();


 });


$('select').on('change', function (e) {
  $('.placeholder').text(this.value);
  $(this).animate({width: $('.placeholder').width() + 'px' });
});
