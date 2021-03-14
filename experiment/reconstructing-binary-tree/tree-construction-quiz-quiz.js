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
            question: "1. Consider the following Inorder and Preorder traversal of a binary tree: <br>Inorder = {F, D, G, B, L, E, A, R, C, S}<br>Preorder = {A, B, D, F, G, E, L, C, R, S}<br>Reconstruct the binary tree and choose the correct postorder traversal from the given options: ", ///// Write the question inside double quotes
            answers: {
                a: "F, D, G, B, L, E, A, R, C, S", ///// Write the option 1 inside double quotes
                b: "D, F, G, B, E, L, S, R, C, A  ", ///// Write the option 2 inside double quotes
                c: "F, G, D, L, E, B, R, S, C, A ", ///// Write the option 2 inside double quotes
                d: "None of the above ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Consider the following Inorder and Preorder traversal of a binary tree:<br>Inorder = {4, 2, 5, 1, 6, 7, 3, 8}<br>Postorder = {4, 5, 2, 6, 7, 8, 3, 1}<br>Reconstruct the binary tree and choose the correct postorder traversal from the given options: ",  ///// Write the question inside double quotes
      answers: {
        a: "4, 5, 2, 6, 7, 8, 3, 1  ",                  ///// Write the option 1 inside double quotes
        b: "1, 2, 4, 5, 3, 7, 6, 8 ",                  ///// Write the option 2 inside double quotes
	c: "4, 2, 5, 1, 6, 7, 3, 8   ",                  ///// Write the option 1 inside double quotes
        d: "None of the above ",                  ///// Write the option 2 inside double quotes
	
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
