let questionsDB = [
    {
      numb: 1,
      question:
        "What is part of a database that holds only one type of information?",
      option_a: "Report",
      option_b: "Field",
      option_c: "Record",
      option_d: "File",
      ans: "option_b",
    },
  
    {
      numb: 2,
      question:
        "The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is?",
      option_a: "Θ(n)",
      option_b: "Θ(logn)",
      option_c: "Θ(log*n)",
      option_d: "Θ(1)",
      ans: "option_b",
    },
    {
      numb: 3,
      question:
        "Consider a two dimensional array A[20][10]. Assume 4 words per memory cell, the base address of array A is 100, elements are stored in row-major order and first element is A[0][0]. What is the address of A[11][5]?",
      option_aa: 560,
      option_bb: 460,
      option_cc: 570,
      option_dd: 575,
      ans: "",
    },
    {
      numb: 4,
      question: "In a compiler, keywords of a language are recognized during",
  
      option_a: "parsing of the program",
      option_b: "the code generation",
      option_c: "The lexical analysis of the program",
      option_d: "dataflow analysis",
      ans: "option_b",
    },
  
    {
      numb: 5,
      question: "Which of the following type of a variable is volatile?",
      option_a: "Mutable Variable",
      option_b: "Dynamic Variable",
      option_c: "Volatile Variable",
      option_d: "Immutable Variable",
      ans: "option_a",
    },
    {
      numb: 6,
      question: "In JavaScript the x===y statement implies that:",
      option_a:
        "Both x and y are equal in value, type and reference address as well.",
      option_b: "Both are x and y are equal in value only.",
      option_c: "Both are equal in the value and data type.",
      option_d: "Both are not same at all.",
      ans: "option_c",
    },
    {
      numb: 7,
      question: `Suppose we want to arrange five nos. of DIVs so that DIV4 is placed above DIV1. 
                          Now, which css property will we use to control the order of stack?`,
      option_a: "d-index",
      option_b: "s-index",
      option_c: "x-index",
      option_d: "z-index",
      ans: "option_d",
    },
    {
      numb: 8,
      question:
        "Which of the following selector selects the elements that are the default among a set of similar elements?",
      option_a:
        "Both x and y are equal in value, type and reference address as well.",
      option_b: "Both are x and y are equal in value only.",
      option_c: "Both are equal in the value and data type.",
      option_d: "Both are not same at all.",
      ans: "option_c",
    },
    {
      numb: 9,
      question:
        "Which one of the following is not a step to install a library you need to perform the compatibility in browsers?",
      option_a: " Download the library from the github location ",
      option_b: "Uncompress the file",
      option_c: " Insert the following code inside the head tag ",
      option_d: "None of the mentioned ",
      ans: "ans_d",
    },
  
    {
      numb: 10,
      question: "Syntax of entity declaration is",
      option_a: " <!entity name “value”> ",
      option_b: "<entity name “value”!>",
      option_c: " <”value” entity name> ",
      option_d: "<!”value” entity name>",
      ans: "ans_a",
    },
    {
      numb: 11,
      question: " With which element width attribute is not define?",
      option_a: "<input>",
      option_b: "<object>",
      option_c: "<embed> ",
      option_d: "<textarea>",
      ans: "ans_d",
    },
  
    {
      numb: 12,
      question: " With which element width attribute is not define?",
      option_a: "<input>",
      option_b: "<object>",
      option_c: "<embed> ",
      option_d: "<textarea>",
      ans: "ans_d",
    },
  
    {
      numb: 13,
      question:
        " . HTML5 documents may contains a ___________ element, which is used to set the header section of a document.",
      option_a: "header",
      option_b: "footer",
      option_c: "section ",
      option_d: "drive",
      ans: "ans_a",
    },
  
    {
      numb: 13,
      question:
        " . HTML5 documents may contains a ___________ element, which is used to set the header section of a document.",
      option_a: "header",
      option_b: "footer",
      option_c: "section ",
      option_d: "drive",
      ans: "ans_a",
    },
  
    {
      numb: 14,
      question:
        " Which tag is used to encapsulate navigation and then style the elements appropriately as menu items?",
      option_a: "ul",
      option_b: "li",
      option_c: "nav ",
      option_d: "both ul and li",
      ans: "ans_d",
    },
  
    {
      numb: 15,
      question:
        " Which tag is used to encapsulate navigation and then style the elements appropriately as menu items?",
      option_a: "ul",
      option_b: "li",
      option_c: "nav ",
      option_d: "both ul and li",
      ans: "ans_d",
    },
  ];
  
  //   const name : document.getElementById('Name');
  


let start = document.getElementById("start");
let end = document.getElementById("endd");
let start_quiz = document.getElementById("startt")
const option1 = document.getElementById("optionSel1");
const option2 = document.getElementById("optionSel2");
const option3 = document.getElementById("optionSel3");
const option4 = document.getElementById("optionSel4");
const quest = document.getElementById('quizQues');
const answers = document.querySelector('.ans');
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const showScore= document.getElementById("showScore");
const  reload = document.getElementById("reloadBtn");
// const option1 = document.getElementById("selectedOption1");
// const option2 = document.getElementById("selectedOption2");
// const option3 = document.getElementById("selectedOption3");
// const option4 = document.getElementById("selectedOption4");




function myStart (){
  document.getElementById('formFirstPage').classList.add("name-box");
  document.getElementById('instruction').classList.remove("name-box");
  document.getElementById('mcqPage').classList.add("name-box");
};

function myEnd(){
  document.getElementById('formFirstPage').classList.remove("name-box");
  document.getElementById('instruction').classList.add("name-box");
  document.getElementById('mcqPage').classList.add("name-box");
}
function startQuiz(){
  document.getElementById('formFirstPage').classList.add("name-box");
  document.getElementById('instruction').classList.add("name-box");
  document.getElementById('mcqPage').classList.remove("name-box");

  var questionCount =0;
  const questList = questionsDB[questionCount];
  quest.innerText= questList.numb + " " + questList.question;
  option1.innerText = questList.option_a;
  option2.innerText = questList.option_b;
  option3.innerText = questList.option_c;
  option4.innerText = questList.option_d;

}
start.addEventListener('click',myStart);
end.addEventListener('click',myEnd);
start_quiz.addEventListener('click',startQuiz);
let questionCount=1;
const loadQuestion =()=>{
  const questList = questionsDB[questionCount];
  quest.innerText= questList.numb + " " + questList.question;
  option1.innerText = questList.option_a;
  option2.innerText = questList.option_b;
  option3.innerText = questList.option_c;
  option4.innerText = questList.option_d;
}
const nextQues=()=>{


    if(questionCount<questionsDB.length){
      loadQuestion();
      questionCount++;

    }
    else{
      // console.log("hi");
      showScore.classList.remove('show-score');
    };
  };
  // const prevQues=()=>{
  //   if(questionCount>0){
  //     prevBtn.classList.remove('show-score');
  //   }
  //   questionCount--;
  // }
//   questionCount++;
//   const getCheckedAns=()=>{
//     let answer;
  
// };
const getCheckedAns=()=>{
  let answer;

  answers.forEach((curAnsElem)=>{
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll=()=>{
  answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}