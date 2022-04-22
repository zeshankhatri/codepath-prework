// global constants
const patternLength = 8; //pattern will always have 8 turns
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = []; //will have random pattern
var unlimited = false;
var progress = 0;
var name;
var leaderboard = [];
var playerNum = 0;
var j = 0; //used so random gets 7-12, not 1-6 when sith theme selected
var gamePlaying = false;
var tonePlaying = false;
var rate = 1.0;
var guessCounter = 0;
var clueHoldTime = 2000; //how long to hold each clue's light/sound
var strikes = 2;
var timeLeft = 20;
var reduceTime; //used for clearInterval

function on(overlay) {
  if(overlay == 2){
    document.getElementById("overlay2").classList.toggle('hidden');
    setTimeout(function() {
      document.getElementById("leaderboard").classList.toggle('fade')
    }, 5);
  } else {
    document.getElementById("overlay").classList.toggle('hidden');
    setTimeout(function() {
      document.getElementById("instruct").classList.toggle('fade')
    }, 5);
  }
}

function off(overlay) {
  if(overlay == 2){
    document.getElementById("leaderboard").classList.toggle('fade');
  setTimeout(function() {
    document.getElementById("overlay2").classList.toggle('hidden');
  }, 250);
  } else{
    document.getElementById("instruct").classList.toggle('fade');
    setTimeout(function() {
      document.getElementById("overlay").classList.toggle('hidden');
    }, 250);
  }
}

function startGame(gameType) {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  rate = 1.0;
  clueHoldTime = 1000;
  strikes = 2;
  timeLeft = 10;
  name = "";
  if(gameType == "unlimited"){
    unlimited = true;
  } else {
    unlimited = false;
  }
  
  //Ensures stirkes and time left text is white
  document.getElementById("strikes").style.color = "white";
  document.getElementById("time").style.color = "white";
  
  //create random pattern
  if(unlimited){
    pattern[0] = Math.floor(Math.random() * (6) + 1) + j;
    document.getElementById("round").classList.remove("hidden");
    document.getElementById("round").innerHTML = "Current round: " + (progress + 1);
  }
  else {
    for (let i = 0; i < patternLength; i++){
      pattern[i] = Math.floor(Math.random() * (6) + 1) + j;
    }
  }

  // swap the Start and Stop buttons + text
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("unlimitedBtn").classList.add("hidden");
  document.getElementById("info").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("strikes").classList.remove("hidden");
  document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
  document.getElementById("time").classList.remove("hidden");
  document.getElementById("time").innerHTML = "Time left: " + timeLeft;
  
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  rate = 1.0;
  clearInterval(reduceTime);

  // swap the Start and Stop buttons + text
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strikes").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("unlimitedBtn").classList.remove("hidden");
  document.getElementById("info").classList.remove("hidden");
  
  if(unlimited){
    document.getElementById("round").classList.add("hidden");
  }
}

function playTone(btn, len) {
  tonePlaying = true;
  document.getElementById("audio" + btn).playbackRate = rate;
  document.getElementById("audio" + btn).play();
  setTimeout(stopTone, len, btn);
}

function startTone(btn) {
  if(!tonePlaying) {
    document.getElementById("audio" + btn).playbackRate = rate;
    document.getElementById("audio" + btn).play();
    tonePlaying = true;
  }
}

function stopTone(btn) {
  document.getElementById("audio" + btn).pause();
  document.getElementById("audio" + btn).currentTime = 0;
  tonePlaying = false;
}


function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  clearInterval(reduceTime);
  document.getElementById("gameButtonArea").style.pointerEvents = "none";
  
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  if(!unlimited){
    clueHoldTime -= 100;
    rate += 0.2;
  }
  
  timeLeft = 11; //there's a second delay in displaying;
  setTimeout(timer, delay - 2000);
  setTimeout(function(){document.getElementById("gameButtonArea").style.pointerEvents = "auto";}, delay - 200);
  setTimeout(function(){document.getElementById("time").style.color = "white"}, delay - 1000);
}

function loseGame(){
  stopGame();
  alert("Too many strikes. Game Over. You lost.");
}

function loseUnlimited(){
  stopGame();
  name = prompt("Enter a name to add yourself to leaderboard, or press cancel to simply see the round you reached:");
  
  if(name == "null" || name == "")
  {
    alert("Congrats, you made it to round " + (progress + 1) + "!");
  } else {
    alert("Congrats " + name + ", you made it to round " + (progress + 1) + "!");
    add();
  }
}

function compare(a,b) { return b.round - a.round }

function add(){
  leaderboard[playerNum++] = {name: name, round: (progress + 1)};
  leaderboard.sort(compare);
  
  let container = document.getElementById("results");
  container.innerHTML = "";
  
  leaderboard.forEach(function(player, index){
                      let container = document.getElementById("results");
    
                      //Create new entry
                      let row = document.createElement('div');
                      row.classList.add("row");
    
                      //Get player name
                      let playerName = document.createElement('p');
                      playerName.appendChild(document.createTextNode(player.name));
    
                      //Get round reached
                      let roundNo = document.createElement('p');
                      roundNo.appendChild(document.createTextNode(player.round));
    
                      //Add both to entry
                      row.appendChild(playerName);
                      row.appendChild(roundNo);
    
                      if(index == 0){
                        row.style.backgroundColor = "gold";
                      } else if (index == 1){
                        row.style.backgroundColor = "silver";
                      } else if (index == 2){
                        row.style.backgroundColor = "chocolate";
                      }
    
                      //Add entry to leaderboard
                      container.appendChild(row);
  });
}

function winGame(){
  stopGame();
  alert("Congrats, you won the game!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn != pattern[guessCounter]){
    if(strikes == 0){//wrong guess, lost game
      if(unlimited){
        loseUnlimited();
      } else{
        loseGame();
      } 
    }
    else //resets so player can guess pattern again
    {
      strikes--;
      if(strikes == 1){
        document.getElementById("strikes").style.color = "yellow";
      } else if(strikes == 0){
        document.getElementById("strikes").style.color = "red";
      }
      document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
      guessCounter = 0;
      clueHoldTime += 100;
      playClueSequence();
    }
  }
  else if(guessCounter != progress){ //next guess
    guessCounter++;
  }
  else if(unlimited){
    pattern[++progress] = Math.floor(Math.random() * (6) + 1) + j;
    document.getElementById("round").innerHTML = "Current round: " + (progress + 1);
    playClueSequence();
  }
  else if(progress != pattern.length - 1){ //next part of pattern
    progress++;
    playClueSequence();
  }
  else{ //won game
    winGame();
  }
}

function changeTheme(theme){
  stopGame();
  
  if(theme == 'jedi'){
    document.getElementById("body").style.backgroundImage = "url('https://cdn.glitch.global/f70659ab-3f14-4ee6-a6d3-ef5eea3f7da2/jedi_background.jpg?v=1650148953618')";  
    for(let i = 1; i <= 6; i++){
      document.getElementById("button" + i).classList.remove("hidden");
      document.getElementById("button" + (i + 6)).classList.add("hidden");
    }
    
    j = 0;
  }
  else if(theme == 'sith'){
    document.getElementById("body").style.backgroundImage = "url('https://cdn.glitch.global/f70659ab-3f14-4ee6-a6d3-ef5eea3f7da2/sith_background.png?v=1650144338922')";
    
    for(let i = 1; i <= 6; i++){
      document.getElementById("button" + i).classList.add("hidden");
      document.getElementById("button" + (i + 6)).classList.remove("hidden");
    }
    
    j = 6;
  }
}

function timer(){
  reduceTime = setInterval(reduceSeconds, 1000);
}

function reduceSeconds(){
  timeLeft--;
  document.getElementById("time").innerHTML = "Time left: " + timeLeft;
  
  if(timeLeft == 0){
    if(strikes == 0){//ran out of time, lost game
      if(unlimited){
        loseUnlimited();
      } else{
        loseGame();
      }
    }
    else{
      strikes--;
      if(strikes == 1){
        document.getElementById("strikes").style.color = "yellow";
      } else if(strikes == 0){
        document.getElementById("strikes").style.color = "red";
      }
      document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
      guessCounter = 0;
      clueHoldTime += 100;
      playClueSequence();
    }
  }
  else if(timeLeft <= 3){
    document.getElementById("time").style.color = "red";
  }
  else if(timeLeft <= 5){
    document.getElementById("time").style.color = "yellow";
  }
}