window.onload = function (){

  let questionZone = document.getElementById('questions');
  let answerZone = document.getElementById('answers');
  let checker = document.getElementById('checker');
  let playAgain = document.getElementById('button');
  let title = document.querySelector('.title');
  let current = 0;

      //Colors
      colorQuestions = {
        'Comment tu dis jaune en allemand ?' : ['Gelb', 'Rot', 'Grün', 0],
        'Comment tu dis rouge en allemand ?' : ['Schwarz', 'Rot', 'Rosa', 1],
        'Comment tu dis vert en allemand ?' : ['Rosa', 'Orange', 'Grün', 2],
        'Comment tu dis bleu en allemand ?' : ['Blau', 'Rot', 'Braun', 0],
        'Comment tu dis gris en allemand ?' : ['Grau', 'Schwarz', 'Orange', 0],
        'Comment tu dis violet en allemand ?' : ['Gelb', 'Lila', 'Grün', 1],
        'Comment tu dis noir en allemand ?' : ['Grün', 'Schwarze', 'Rosa', 1],
        'Comment tu dis blanc en allemand ?' : ['Weiss', 'Rot', 'Grün', 0],
        'Comment tu dis orange en allemand ?' : ['Schwarz', 'Blau', 'Orange', 2],
        'Comment tu dis marron en allemand ?' : ['Grau', 'Braun', 'Rosa', 1],
      };

      //Number
      numberQuestions = {
        'Quelle est se nombre: 9 ?' : ['Neuf', 'Cinq' , 'Huit', 0],
        'Quelle est se nombre: 2 ?' : ['Dix', 'Trois' , 'Deux', 2],
        'Quelle est se nombre: 1 ?' : ['Huit', 'Deux' , 'Un', 2],
        'Quelle est se nombre: 7 ?' : ['Cinq', 'Sept' , 'Trois', 1],
        'Quelle est se nombre: 4 ?' : ['Neuf', 'Six' , 'Quatre', 2],
        'Quelle est se nombre: 3 ?' : ['Trois', 'Cinq' , 'Six', 0],
        'Quelle est se nombre: 6 ?' : ['Six', 'Dix' , 'Sept', 0],
        'Quelle est se nombre: 8 ?' : ['Quatre', 'Huit' , 'Neuf', 1],
        'Quelle est se nombre: 5 ?' : ['Un', 'Quatre' , 'Cinq', 2],
        'Quelle est se nombre: 10 ?' : ['Deux', 'Un' , 'Dix', 2],
      }; 

      //Words
      wordQuestions = {
        'Comment tu dis les cheveux en allemand ?' : ['Vogel', 'Haare', 'Pferd', 1],
        'Comment tu dis les voiture en allemand ?' : ['Auto', 'Licht', 'Rutsche', 0],
        'Comment tu dis les café en allemand ?' : ['Baum', 'Buch', 'Kaffee', 2],
        'Comment tu dis les ordinateur en allemand ?' : ['Schloss', 'Brille', 'Computer', 2],
        'Comment tu dis les crayon en allemand ?' : ['Mund', 'Stift', 'Mütze', 1],
        'Comment tu dis les bougie en allemand ?' : ['Kerze', 'Pferd', 'Mund', 0],
        'Comment tu dis les yeux en allemand ?' : ['Mütze', 'Buch', 'Augen', 2],
        'Comment tu dis les papier en allemand ?' : ['Licht', 'Papier', 'Rutsche', 1],
        'Comment tu dis les téléphone en allemand ?' : ['Telefon', 'Schule', 'Vogel', 0],
        'Comment tu dis les chaise en allemand ?' : ['Baum', 'Stuhl', 'Brille', 1],
      };

  $('#button').on('click',function(e){   
      let colors = document.getElementById('colors');
      let numbers = document.getElementById('numbers');
      let words = document.getElementById('words');

      e.preventDefault();
      title.textContent = 'Réponse:'

    function displayQuestion(curr){

        if (colors.checked){
          let question = Object.keys(colorQuestions)[curr];
          questionZone.innerHTML = '';
          questionZone.innerHTML = question; 

        } else if (numbers.checked){
            let question = Object.keys(numberQuestions)[curr];
            questionZone.innerHTML = '';
            questionZone.innerHTML = question; 
          
        } else if (words.checked){
            let question = Object.keys(wordQuestions)[curr];
            questionZone.innerHTML = '';
            questionZone.innerHTML = question;
        }
    }

    function displayAnswers(curr){

      if (colors.checked){ 
      var answers = colorQuestions[Object.keys(colorQuestions)[curr]];
        answerZone.innerHTML = '';
        for (var i = 0; i < answers.length -1; i += 1) {
          var createDiv = document.createElement('div'),
              text = document.createTextNode(answers[i]);
          createDiv.appendChild(text);      
          createDiv.addEventListener("click", checkAnswer(i, answers));
          answerZone.appendChild(createDiv);
        }
      } else if(numbers.checked){ 
          var answers = numberQuestions[Object.keys(numberQuestions)[curr]];
            answerZone.innerHTML = '';
            for (var i = 0; i < answers.length -1; i += 1) {
            var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
            createDiv.appendChild(text);      
            createDiv.addEventListener("click", checkAnswer(i, answers));
            answerZone.appendChild(createDiv);
            }
      } else if(words.checked){ 
          var answers = wordQuestions[Object.keys(wordQuestions)[curr]];
            answerZone.innerHTML = '';
            for (var i = 0; i < answers.length -1; i += 1) {
              var createDiv = document.createElement('div'),
              text = document.createTextNode(answers[i]);
              createDiv.appendChild(text);      
              createDiv.addEventListener("click", checkAnswer(i, answers));
              answerZone.appendChild(createDiv);
            }
      }
    }

  function checkAnswer(i, arr) {
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      if (current < Object.keys(colorQuestions || numberQuestions || wordQuestions).length -1) {
        current += 1;
        displayQuestion(current);
        displayAnswers(current);

      } else {
        questionZone.innerHTML = 'C\'est fini...';
        answerZone.innerHTML = '';
        document.getElementById('checker').style.display = 'none'; 
        document.querySelector('.title').style.display = 'none'; 
        winnerModal = document.getElementById('modal').style.visibility = 'visible'; 

        playAgain.addEventListener('mousedown' , function(){
          window.location.reload();
        })
      }        
    };
  }
  
  function addChecker(bool) {

    let createDiv = document.createElement('div');
    let box = document.createTextNode(current + 1);
    
    createDiv.appendChild(box);
    
    if (bool) {
      createDiv.className = 'correct';
      checker.appendChild(createDiv);

    } else {
      createDiv.className = 'false';
      checker.appendChild(createDiv);
    }
  }
    displayQuestion(current);
    displayAnswers(current);
  }) 
};

