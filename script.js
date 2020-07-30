1/*let mySound;
let tracks = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3", "song7.mp3", "song8.mp3", "song.mp3"];
let songTitle = ["Blue Ain't Your Color", "Somebody Like You", "Your Man", "What a Wonderful World", "Autumn Leaves", "Stormy Monday", "Back in Black", "War Pigs", "Heartbreaker"];
let songArtist = ["Keith Urban", "Keith Urban", "Josh Turner", "Louis Armstrong", "Eric Clapton", "Allman Brothers", "AC/DC", "Faith No More", "Led Zepplin"];

*/
let drop1x, drop1y, drop1d, drop1FallSpeed, drop2x, drop2y, drop2d, drop2FallSpeed;
let rockstarX, countryX, avartX, score, hit, colors;

class chord{
  constructor(){
    this.x = (width/2-125);
    this.y = 0;
    this.d = 30;
    this.fallSpeed = random(8,20);
  }
  show() {
    noStroke();
    colors = random(0, 255);
    fill('blue');
    ellipse(this.x, this.y, this.d);
  }
  drip() {
    this.y += this.fallSpeed;


    if (this.y > height) {
      this.y = 0;
      this.x = (width/2-125);
      this.d = 30;
      this.fallSpeed = 8;
    }
  }
}


function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  background(0);
  colorMode(HSB, 44);
 
  jukeBox = loadImage('jukeBox.png');

  //Loads game avatars
  rockstar = loadImage('assets/rockstar.gif');
  rockstarX = width/2;
  countryArtist = loadImage('assets/countryArtist.png');
  countryX = width/2;
  saxPlayer = loadImage('assets/saxPlayer.png');
  saxPlayerX = width/2;

  chord1 = new chord();
  //chord2 = new chord();
  //chord3 = new chord();
  //chord4 = new chord();

  score = 0;
}

function draw(){
  mainDisplay();
  chooseLevel();
  
  
}



function mainDisplay(){
  background(0);
  image(jukeBox, width/2 - 87, height/2, 275, 300);

  //Game title
  textSize(40);
  fill('red');
  text("CATCH THE BEAT", width/2-125, height/12);

}


function chooseLevel(){
  //Chose which level/genre the user would like to play
  fill(33, 100, 50);
  textSize(20);
  text("Choose what level you would like to play:", width/2-140, height/10+50);
  
  fill(33, 100, 50);
  text("Press \'c\' to play Level 1: Country", width/2-100, height/8+55);
  text("Press \'j\' to play Level 2: Jazz", width/2-100, height/6+50);
  text("Press \'r\' to play Level 3: Rock", width/2-100, height/4+20);
  
  //Chose by pressing c, j, or r
  if(key === 'c'){
    gameScreen();
    levelCountry();
  }
  else if(key === 'j'){
    gameScreen();
    levelJazz();
  }
  else if(key === 'r'){
    gameScreen();
    levelRock();
  }
}

function gameScreen(){
  background(0);

  //Guitar neck
  fill(33);
  rect(width/2-200, 0, 400, height);
  //Guitar fret wires
  fill(7, 100, 50);
  rect(width/2-200, height/7, 400, 35);
  rect(width/2-200, height/3, 400, 35);
  rect(width/2-200, height/1.5, 400, 35);

  //Guitar strings
  line(width/2-125, 0, width/2-125, height);
  line(width/2-50, 0, width/2-50, height);
  line(width/2+50, 0, width/2+50, height);
  line(width/2+125, 0, width/2+125, height);

  //Avartar box
  fill('red');
  rect(width/2-250, height/1.25, 500, 50);

  chords();
}


function levelCountry(){
  image(countryArtist, countryX, height/1.25+5, 38, 45);
  if(keyCode === LEFT_ARROW){
    countryX -= 3;
  }
  else if(keyCode === RIGHT_ARROW){
    countryX += 3;
  }

  if(countryX >= width/2+225){
    countryX -= 3;
  }
  else if(countryX < width/2-250){
    countryX += 3;
  }
}

function levelJazz(){
  image(saxPlayer, saxPlayerX, height/1.25+5, 38, 45);
  if(keyCode === LEFT_ARROW){
    saxPlayerX -= 3;
  }
  else if(keyCode === RIGHT_ARROW){
    saxPlayerX += 3;
  }

  if(saxPlayerX >= width/2+225){
    saxPlayerX -= 3;
  }
  else if(saxPLayerX < width/2-250){
    saxPlayerX += 3;
  }

}

function levelRock(){
  image(rockstar, rockstarX, height/1.25+5, 38, 45);
  if(keyCode === LEFT_ARROW){
    rockstarX -= 3;
  }
  else if(keyCode === RIGHT_ARROW){
    rockstarX += 3;
  }

  if(rockstarX >= width/2+225){
    microphoneX -= 3;
  }
  else if(rockstarX < width/2-250){
    rockstarX += 3;
  }
}

function chords(){
  chord1.show();
  //chord2.show();
  //chord3.show();
  //chord4.show();
  
  chord1.drip();
  //chord2.drip();
  //chord3.drip();
  //chord4.drip();
}



/*
function preload() {
  soundFormats('mp3');
  mySound = loadSound('');
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}*/

function checkCollisions() {
  if(chord1.x == microphoneX && chord1.y == microphoneY){
    score++;
  }
  fill(7, 100, 50);
  textSize(25);
  text("Score: " + score, 30, 30);
  //hit = collideRectRect(microphoneX, height/1.25+5, 38, 45,chord.x ,chord.y,chord.d);
  
}