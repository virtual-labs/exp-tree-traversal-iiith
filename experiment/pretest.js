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
            question: "1. Which of the following statements are correct about a binary tree?", ///// Write the question inside double quotes
            answers: {
                a: " A node in a binary tree can have exactly two children", ///// Write the option 1 inside double quotes
                b: "A node in a binary tree can have atmost two children", ///// Write the option 2 inside double quotes
                c: "A node in a binary tree can have two or more children", ///// Write the option 2 inside double quotes
                d: "A node in a binary tree can have more than one root", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Node values in a binary tree always appear in a sorted order from root to leaf, going left to right at each level. ",  ///// Write the question inside double quotes
      answers: {
        a: "True ",                  ///// Write the option 1 inside double quotes
        b: "False",                  ///// Write the option 2 inside double quotes
	
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Which of the following is TRUE about the leaf nodes of a binary tree?",  ///// Write the question inside double quotes
      answers: {
        a: " Leaf nodes in a binary tree have no children",                  ///// Write the option 1 inside double quotes
        b: " Atleast one leaf node in a binary tree has two chidren",                  ///// Write the option 2 inside double quotes
	c: "Leaf nodes in a binary tree are allowed to have more than two children", ///// Write the option 3 inside double quotes
        d: " Leaf nodes in a binary tree may or may not have child nodes", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "4. In a binary tree all nodes are connected.",  ///// Write the question inside double quotes
      answers: {
        a: "True",                  ///// Write the option 1 inside double quotes
        b: "False",                  ///// Write the option 2 inside double quotes
	
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "5. Which of the following is TRUE about a binary tree?.",  ///// Write the question inside double quotes
      answers: {
        a: "There exits a cycle between nodes in a binary tree",                  ///// Write the option 1 inside double quotes
        b: "There may or may not be a cycle in a binary tree",                  ///// Write the option 2 inside double quotes
	c: "A binary tree does not have any cycles",                  ///// Write the option 1 inside double quotes
        d: "There should be atleast one cycle in a binary tree",                  ///// Write the option 2 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
