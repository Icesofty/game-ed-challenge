// App Engine

let score = 0;

function randomSentence(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let guessIt = randomSentence(5);

document.getElementById('rememberIt').innerHTML = guessIt.toUpperCase();

function timeisout() {
  const rememberItField = document.querySelector('.rememberclass');
  const inputField = document.querySelector('.inputfield');
  rememberItField.classList.replace('flex', 'hidden');
  inputField.classList.replace('hidden', 'flex');
}

function success() {
  const rememberItField = document.querySelector('.rememberclass');
  const inputField = document.querySelector('.inputfield');
  rememberItField.classList.replace('hidden', 'flex');
  inputField.classList.replace('flex', 'hidden');
}

setTimeout(timeisout, 3000);

// check if inputtext === guessIt

function inputText() {
  var x = document.getElementById('result').value;
  if (x.toLowerCase() === guessIt) {
    score = score + 1;
    totScore(score);
    guessIt = randomSentence(5);
    document.getElementById('rememberIt').innerHTML = guessIt.toUpperCase();

    success();
    setTimeout(timeisout, 2000);
  } else {
    document.getElementById('myScore').innerHTML =
      ' 🤖 WRONG!!! YOU ARE A ROBOT 🤖';
  }
}

// Need a total score counter function

function totScore(score) {
  document.getElementById('myScore').innerHTML = score.toString();
}
