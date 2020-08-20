speed = 10;

bezosIncrease = 2447.68;
gatesIncrease = 254.06;
muskIncrease = 1978.44;
zuckIncrease = 668.99;
toppointIncrease = 0.0890331008;
toponeIncrease = 0.02338925174;
avgAmericanIncrease = 0.00175688015;

var begSeconds = new Date().getTime();

var savedIncrease = 0; //incase of overflow;

var x = setInterval(function() {
  var newSeconds = new Date().getTime();
  var difference = (newSeconds-begSeconds)/1000;
  newAmount = difference*increaseNumber;
  newAmount = newAmount.toFixed(2);
  newAmount = numberWithCommas(newAmount);
  document.getElementById("money").innerHTML = newAmount;
}, 1000/speed);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var increaseNumber = bezosIncrease;

function reseter() {
  begSeconds = new Date().getTime();
}
