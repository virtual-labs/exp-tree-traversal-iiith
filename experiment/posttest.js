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
answerContainers.forEach(e => e.style.color = "black");

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
question: "1. Traversal of a graph is different from tree because _________.", ///// Write the question inside double quotes
answers: {
a: "There can be loops in the graph so we must maintain a visited flag for every vertex ", ///// Write the option 1 inside double quotes
b: "Depth first travesal of a graph uses queue whereas traversal of tree uses queue", ///// Write the option 2 inside double quotes
c: "Breadth first traversal of a tree is not possible", ///// Write the option 3 inside double quotes
d: "All of the mentioned", ///// Write the option 4 inside double quotes
},
correctAnswer: "a" ///// Write the correct option inside double quotes
},

{
question: "2. Breadth First Traversal of a tree can be used for _________.",  ///// Write the question inside double quotes
answers: {
a: "Finding the shortest distance to every other node from the root in the tree",                  ///// Write the option 1 inside double quotes
b: "Finding cycles in the tree ",                  ///// Write the option 2 inside double quotes
c: "Finding strongly connected components in the tree", ///// Write the option 3 inside double quotes
d: "None of the mentioned", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. What is common in three different types of traversals (Inorder, Preorder and Postorder)?",  ///// Write the question inside double quotes
answers: {
a: "Root is visited after the left subtree",                  ///// Write the option 1 inside double quotes
b: "Root is visited before the right subtree",                  ///// Write the option 2 inside double quotes
c: "Left subtree is always visited before the right subtree", ///// Write the option 3 inside double quotes
d: "All of the above", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "4. A binary tree can be uniquely re-constructed from ________.",  ///// Write the question inside double quotes
answers: {
a: "Inorder and Preorder traversal ",                  ///// Write the option 1 inside double quotes
b: "Preorder and Postorder traversal ",                  ///// Write the option 2 inside double quotes
c: "Only Inorder traversal ", ///// Write the option 3 inside double quotes
d: "Only Post order traversal", ///// Write the option 4 inside double quotes

},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "5. The inorder and preorder traversal of a binary tree are d b e a f c g and a b d e c f g, respectively. The postorder traversal of the binary tree is _________.",  ///// Write the question inside double quotes
answers: {
a: "e d b g f c a",                  ///// Write the option 1 inside double quotes
b: "d e f g b c a ",                  ///// Write the option 2 inside double quotes
c: "d e b f g c a ", ///// Write the option 3 inside double quotes
d: "d e b f g a c ", ///// Write the option 4 inside double quotes

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
