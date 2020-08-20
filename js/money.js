speed = 10;

bezosIncrease = 2489.3;
gatesIncrease = 507.35;
muskIncrease = 420.69;
zuckIncrease = 285.38;
toppointIncrease = 0.08904439375;
toponeIncrease = .0233922184;
avgAmericanIncrease = 0.00150132275;

var savedIncrease = 0; //incase of overflow;

var x = setInterval(function() {

  moneyIncrease = increaseNumber/speed;
  currentAmount = savedIncrease;
  newAmount = moneyIncrease + savedIncrease;
  savedIncrease = newAmount;

  newAmount  = newAmount.toFixed(2);
  newAmount = numberWithCommas(newAmount);
  document.getElementById("money").innerHTML = newAmount;

}, 1000/speed);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var increaseNumber = bezosIncrease;
