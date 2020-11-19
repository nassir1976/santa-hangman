// -------------- MODAL -----------------
// Background Music
var myMusic
  function startGame() {
    myMusic = new AudioBufferSourceNode()
  }
    
  }
// opening modal
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-front-bg');
var modalClose = document.querySelector('.modal-close');

function openModal() {
  modalBg.classList.add('bg-active');
}
modalBtn.addEventListener('click', openModal);

function closeModal() {
  modalBg.classList.remove('bg-active');
}
modalClose.addEventListener('click', closeModal);


// highscore modal
var highscoreBtn = document.getElementById('highscore-btn');
var highscoreBg = document.querySelector('.modal-highscore-bg');
var highscoreClose = document.querySelector('.modal-highscore-close');

function openHighscores() {
  modalBg.classList.remove('bg-active');
  renderHighscore();
  highscoreBg.classList.add('bg-active');
}
highscoreBtn.addEventListener('click', openHighscores);

function closeHighscore() {
  highscoreBg.classList.remove('bg-active');
  modalBg.classList.add('bg-active');
}
highscoreClose.addEventListener('click', closeHighscore);


// RENDER WORD ON SCREEN
var wordElement = document.getElementById('word');

// play modal
var playBtn = document.getElementById('play-btn');

function displayWord() {
  modalBg.classList.remove('bg-active');
  // this starts the game so we would render the game here and reset the word
  wordElement.textContent = blankWord;
}
playBtn.addEventListener('click', startGame);

// how to play modal
var howToPlayBtn = document.getElementById('howToPlay-btn');
var howToPlayBg = document.querySelector('.modal-howToPlay-bg');
var howToPlayClose = document.querySelector('.modal-howToPlay-close');

function openHowToPlay() {
  howToPlayBg.classList.add('bg-active');
}
howToPlayBtn.addEventListener('click', openHowToPlay);

function closehowToPlay() {
  howToPlayBg.classList.remove('bg-active');
}
howToPlayClose.addEventListener('click', closehowToPlay);

// finish modal
// dont need an open, finish will be opened at end of the game by
var finishBtn = document.querySelector('.finish-btn');
var finishBg = document.querySelector('.modal-finish-bg');
var yesChoice = document.getElementById('yes');
var noChoice = document.getElementById('no');
var finishHighscore = document.getElementById('finishHighscore');

function handleYes() {

  startGame();

  finishBg.classList.remove('bg-active');
}
yesChoice.addEventListener('click', handleYes);


function handleNo() {
  finishBg.classList.remove('bg-active');
  modalBg.classList.add('bg-active');
}
noChoice.addEventListener('click', handleNo);

function handleHighscore() {
  finishBg.classList.remove('bg-active');
  highscoreBg.classList.add('bg-active');
}
finishHighscore.addEventListener('click', handleHighscore);

function openFinish() {
  finishBg.classList.add('bg-active');
}
finishBtn.addEventListener('click', openFinish);


// INSTANTIATE NEW PLAYER
function submitHandler(e) {
  e.preventDefault();

  var username = e.target.username.value;
  var score = currentUserScore;
  var player = new Player(username, score);
}

var container = document.getElementById('userHighscore');
container.addEventListener('submit', submitHandler);


//  ---------------- OBJECT CONSTRUCTOR ---------------
var scores = [100, 500, 600, 400, 300, 400, 600, 115, 630, 900];
var randomNames = ['Rudolph', 'papa elf', 'Mrs. Clause', 'Jack Skellignton', 'Corpse Bride', 'Hercules', 'Mushu', 'Olaf', 'Else', 'Sven'];
var highscoreList = [];
var currentUserScore = 0;


function Player(name, score) {
  this.name = name;
  this.score = score;
  highscoreList.push(this);
}

// ------------------- RETRIEVE HIGHSCORES -----------------------
var highscoreEl = document.getElementById('highscores');
var retrievedData = localStorage.getItem('scoresData');

function renderHighscore() {
  if (retrievedData) {
    highscoreList = retrievedData;
  } else {
    for (var i = 0; i < randomNames.length; i++) {
      new Player(randomNames[i], scores[i]);
    }

    // sorts list
    highscoreList.sort(function (a, b) {
      return b.score - a.score;
    });

    // NEED TO LEARN HOW TO UPDATE THE LIST WITH ONLY 10
    for (var i = 0; i < highscoreList.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${highscoreList[i].name}: ${highscoreList[i].score}`;
      highscoreEl.appendChild(li);
    }
    // ------ STORE HIGH SCORE -------
    // var stringifiedScores = JSON.stringify(highscoreList);
    // localStorage.setItem('scoresData', stringifiedScores);
  }
}

// -------------- CREATE LETTERS AND DISPLAY ON HTML --------------------
// THIS WORKS AND RENDERS ON SCREEN; HARD CODED VALUE
var letterExampleA = document.querySelector('.A');
letterExampleA.addEventListener('click', guessA);
function guessA() {
  guessedLetter('a');
  displayWord();
  // remove event listener here?
}

var letterExampleB = document.querySelector('.B');
letterExampleB.addEventListener('click', guessB);
function guessB() {
  guessedLetter('b');
  displayWord();
}

var letterExampleC = document.querySelector('.C');
letterExampleC.addEventListener('click', guessC);
function guessC() {
  guessedLetter('c');
  displayWord();
}

var letterExampleD = document.querySelector('.D');
letterExampleD.addEventListener('click', guessD);
function guessD() {
  guessedLetter('d');
  displayWord();
}

var letterExampleE = document.querySelector('.E');
letterExampleE.addEventListener('click', guessE);
function guessE() {
  guessedLetter('e');
  displayWord();
}

var letterExampleF = document.querySelector('.F');
letterExampleF.addEventListener('click', guessF);
function guessF() {
  guessedLetter('f');
  displayWord();
}

var letterExampleG = document.querySelector('.G');
letterExampleG.addEventListener('click', guessG);
function guessG() {
  guessedLetter('g');
  displayWord();
}

var letterExampleH = document.querySelector('.H');
letterExampleH.addEventListener('click', guessH);
function guessH() {
  guessedLetter('h');
  displayWord();
}
var letterExampleI = document.querySelector('.I');
letterExampleI.addEventListener('click', guessI);
function guessI() {
  guessedLetter('i');
  displayWord();
}
var letterExampleJ = document.querySelector('.J');
letterExampleJ.addEventListener('click', guessJ);
function guessJ() {
  guessedLetter('j');
  displayWord();
}
var letterExampleK = document.querySelector('.K');
letterExampleK.addEventListener('click', guessK);
function guessK() {
  guessedLetter('k');
  displayWord();
}
var letterExampleL = document.querySelector('.L');
letterExampleL.addEventListener('click', guessL);
function guessL() {
  guessedLetter('l');
  displayWord();
}
var letterExampleM = document.querySelector('.M');
letterExampleM.addEventListener('click', guessM);
function guessM() {
  guessedLetter('m');
  displayWord();
}
var letterExampleN = document.querySelector('.N');
letterExampleN.addEventListener('click', guessN);
function guessN() {
  guessedLetter('n');
  displayWord();
}
var letterExampleO = document.querySelector('.O');
letterExampleO.addEventListener('click', guessO);
function guessO() {
  guessedLetter('o');
  displayWord();
}
var letterExampleP = document.querySelector('.P');
letterExampleP.addEventListener('click', guessP);
function guessP() {
  guessedLetter('p');
  displayWord();
}
var letterExampleQ = document.querySelector('.Q');
letterExampleQ.addEventListener('click', guessQ);
function guessQ() {
  guessedLetter('q');
  displayWord();
}
var letterExampleR = document.querySelector('.R');
letterExampleR.addEventListener('click', guessR);
function guessR() {
  guessedLetter('r');
  displayWord();
}
var letterExampleS = document.querySelector('.S');
letterExampleS.addEventListener('click', guessS);
function guessS() {
  guessedLetter('s');
  displayWord();
}
var letterExampleT = document.querySelector('.T');
letterExampleT.addEventListener('click', guessT);
function guessT() {
  guessedLetter('t');
  displayWord();
}
var letterExampleU = document.querySelector('.U');
letterExampleU.addEventListener('click', guessU);
function guessU() {
  guessedLetter('u');
  displayWord();
}
var letterExampleV = document.querySelector('.V');
letterExampleV.addEventListener('click', guessV);
function guessV() {
  guessedLetter('v');
  displayWord();
}
var letterExampleW = document.querySelector('.W');
letterExampleW.addEventListener('click', guessW);
function guessW() {
  guessedLetter('w');
  displayWord();
}
var letterExampleX = document.querySelector('.X');
letterExampleX.addEventListener('click', guessX);
function guessX() {
  guessedLetter('x');
  displayWord();
}
var letterExampleY = document.querySelector('.Y');
letterExampleY.addEventListener('click', guessY);
function guessY() {
  guessedLetter('h');
  displayWord();
}

var letterExampleZ = document.querySelector('.Z');
letterExampleZ.addEventListener('click', guessZ);
function guessZ() {
  guessedLetter('z');
  displayWord();
}

// -------------- GENERATING RANDOM WORD --------------------
var words = [
  'prancer',
  'santa',
  'merry christmas',
  'sleigh bells ring',
  'rudolph the rednose raindeer',
  'presents',
  'ho ho ho',
  'ol saint nick',
  'north pole',
];

var blankWord = '';
var currentWord;
var chances = 6;
var correct = false;

function randomWord() {
  return Math.floor(Math.random() * words.length);
}

function setBlankWord(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      blankWord += ' ';
    } else {
      blankWord += '_';
    }
  }
}


function startGame() {
  chances = 6;
  currentUserScore = 0;
  blankWord = '';
  timeLeft = 90;
  // currentWord = words[randomWord()];
  currentWord = words[randomWord()];
  setBlankWord(currentWord);
  startTimer();
  displayWord();
  // start timer will go here
}

function openEndModal() {
  finishBg.classList.add('bg-active');
}

// ---------------- THIS IS HOW YOU GUESS A LETTER -----------------------
// WORDS WITH DUPLICATES DOES NOT WORK. HOW DO WE MAKE IT HANDLE 2 LETTERS AT ONE TIME
var finishStatementEl = document.getElementById('finishStatement');
function guessedLetter(guess) {

  for (var i = 0; i < currentWord.length; i++) {
    if (guess === currentWord.charAt(i)) { // rudolph => _ _ _ _ _ _ _ // guess = r
      blankWord = blankWord.split(''); // rudolph = ['r','u','d']
      blankWord[i] = guess;
      blankWord = blankWord.join('');
      correct = true;
      currentUserScore += 100;
      // turn letter green
    }

    // WIN LOGIC -------------
    if (blankWord === currentWord && chances > 0) {
      finishStatementEl.textContent = 'You Win!';
      openEndModal();
    }
  }

  if (!correct) {
    // turn letter red
    chanceEl.textContent = `${chances} / 6`;
  }

  // LOSE LOGIC ---------------
  if (blankWord !== currentWord && chances === 0) {
    finishStatementEl.textContent = 'You Lose!';
    openEndModal();
  }

  // resets to false for the next guess
  correct = false;
}

// DISPLAY CHANCES --------------------
var chanceEl = document.getElementById('chance');
chanceEl.textContent = `${chances} / 6`;


// TIMER ----------------
var timeLeft = 90;

function startTimer() {
  setInterval(function () {
    timeLeft--;

    if (timeLeft >= 0) {
      var timeEl = document.getElementById('timer');
      timeEl.textContent = timeLeft;
    }

    if (timeLeft === 0) {
      finishStatementEl.textContent = 'You Lose!';
      openEndModal();
    }
  }, 1000);
}


// STRETCH GOALS ------------------------------------

// PHRASE CHOICE -------------------------------
// RENDER PHRASE ON SCREEN
// var pressPhrase = document.querySelector('.phrase-btn');
// pressPhrase.addEventListener('click', displayPhrase);

// function displayPhrase() {
//   modalBg.classList.remove('bg-active');
//   playBg.classList.remove('bg-active');
//   wordElement.textContent = blankPhrase;
// }




// DIFFERENT WAY OF RENDERING LETTERS --------------------------
// var letters = 'abcdefghijklmnopqrstuvwxyz'.split(''); // 'a', 'b', 'c', 'd'...]
// var letterContainer = document.getElementById('letters');
// for (var i = 0; i < letters.length; i++){
//   var span = document.createElement('span');
//   span.textContent = letters[i];
//   letterContainer.appendChild(span);
// }


// TIMER ---------------------------
// var gameCount;
// var wordScore = 0;

// var scoretracker;
// function timer () {
//   gameCount --;
//   var gameCountDisplay = document.getElementById('gameTimer');
//   gameCountDisplay.innerHTML = gameCount;
//   if(gameCount <= 0){
//     clearInterval(gameCount);
//     endGame();
//   }

// }
// function startscoreTracker() {
//   scoreTracker = setInterval(timer, 20);

//   function timer() {
//     var meterDisplay = document.getElementById('fillMeter');
//     meterDisplay.setAttribute('style', meterWidth);
//   }
// }