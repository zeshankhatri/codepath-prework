// global constants
const patternLength = 8; //pattern will always have 8 turns;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = []; //will have random pattern
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 2;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  strikes = 2;
  
  //create random pattern
  for (var i = 0; i < patternLength; i++){
    pattern[i] = Math.floor(Math.random() * (6) + 1);
  }

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("strikes").classList.remove("hidden");
  document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
  
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strikes").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 260.0,
  2: 325.0,
  3: 400,
  4: 460,
  5: 530.0,
  6: 600,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

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
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
}

function loseGame(){
  stopGame();
  alert("Too many strikes. Game Over. You lost.");
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
    if(strikes == 0)//wrong guess, lost game
    {
      loseGame();
    }
    else //resets so player can guess pattern again
    {
      strikes--;
      document.getElementById("strikes").innerHTML = "Strikes: " + strikes;
      guessCounter = 0;
      clueHoldTime += 100;
      playClueSequence();
    }
  }
  else if(guessCounter != progress){ //next guess
    guessCounter++;
  }
  else if(progress != pattern.length - 1){ //next part of pattern
    progress++;
    playClueSequence();
  }
  else{ //won game
    winGame();
  }
}
