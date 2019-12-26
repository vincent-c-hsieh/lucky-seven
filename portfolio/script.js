function rollDice() {
  return Math.floor(Math.random ()*6)+1;
}


function throwDice() {
  var startingBet = Number(document.forms["luckySeven"]["bet"].value);
  var betMoney = startingBet;
  var firstRoll;
  var secondRoll;
  var sumRoll;
  var rolls = 0;
  var highestMoney = 0;
  var maxRollCount = 0;

  if (betMoney <= 0) {
    alert("Error! You need to put starting bet!");
  } else {
    while (betMoney > 0){
      firstRoll = rollDice();
      secondRoll = rollDice();
      sumRoll = firstRoll + secondRoll;
      rolls++;
      console.log("roll number "+ rolls);
      console.log("you rolled " + sumRoll);
      if (sumRoll != 7) {
        betMoney -- ;
        console.log("lost");
        console.log("Currently have $" + betMoney + " left");

      } else {
        betMoney += 4 ;
        console.log("won");
        console.log("Currently have $" + betMoney + " left");
        if (betMoney > highestMoney) {
          highestMoney = betMoney;
          maxRollCount = rolls;
          console.log("highest amount won is " + highestMoney);
          console.log("Roll count with highest amount won is " + maxRollCount);

        }
      }
    }
  }
  document.getElementById("submitBtn").value = "Replay!"
  document.getElementById("results").style.display = "block";
  document.getElementById("startBet").innerText = "$" + startingBet;
  document.getElementById("rollBroke").innerText = rolls;
  document.getElementById("highestWon").innerText = "$" + highestMoney;
  document.getElementById("rollWon").innerText = maxRollCount;
  return false;
}
