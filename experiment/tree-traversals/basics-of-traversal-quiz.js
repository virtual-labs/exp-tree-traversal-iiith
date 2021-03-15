 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Which of the following is true?", ///// Write the question inside double quotes
            answers: {
                a: "A tree can be traversed in a linear fashion like arrays. ", ///// Write the option 1 inside double quotes
                b: "A tree can be traversed only in breadth first order.", ///// Write the option 2 inside double quotes
                c: "A tree can be traversed only in depth first order. ", ///// Write the option 2 inside double quotes
                d: "A tree can be traversed in both breadth first and depth first order. ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Which of the following is true about Breadth First Traversal? ",  ///// Write the question inside double quotes
      answers: {
        a: "In breadth first traversal nodes of the tree can be traversed in any manner. ", ///// Write the option 1 inside double quotes
        b: "In breadth first traversal, nodes of the tree are traversed level by level, left to right. ", ///// Write the option 2 inside double quotes
	c: "In breadth first traversal, nodes of the tree are traversed level by level, right to left. ", ///// Write the option 2 inside double quotes
	d: "None of the above ", ///// Write the option 2 inside double quotes
	
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Select an option which is TRUE?",  ///// Write the question inside double quotes
      answers: {
        a: " A traversal of a tree does not involve visiting all the nodes. ",                  ///// Write the option 1 inside double quotes
        b: " A traversal of a tree involves visiting all the nodes in the tree.",                  ///// Write the option 2 inside double quotes
	c: "A search of a graph must visit all the nodes in the graph. ", ///// Write the option 3 inside double quotes
        d: " None of the above", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
