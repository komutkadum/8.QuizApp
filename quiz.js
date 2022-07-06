/* quiz -------------------------------------------------------*/
let mainArray = JSON.parse(localStorage.getItem('question')||"[]");
let answerArray = [];

let quizCurrentIndex = 0;
let quizQuestion = document.getElementById('quiz-question');
let quizOption1 = document.getElementById('quiz-option1');
let quizOption2 = document.getElementById('quiz-option2');
let quizOption3 = document.getElementById('quiz-option3');
let quizOption4 = document.getElementById('quiz-option4');
let qNextButton = document.getElementById('quizNextButton')
let quizRadioOptions = document.querySelectorAll('input[name="option"]');
let quizOutOfNumber = document.getElementById('quizOutOfNumber')


const showQuestionInitialise = () => {
    let tempQuestion = mainArray[quizCurrentIndex].question;
    let tempOption1 = mainArray[quizCurrentIndex].option1
    let tempOption2 = mainArray[quizCurrentIndex].option2
    let tempOption3 = mainArray[quizCurrentIndex].option3
    let tempOption4 = mainArray[quizCurrentIndex].option4
    displayQuiz(quizCurrentIndex,tempQuestion,tempOption1,tempOption2,tempOption3,tempOption4);
}
const displayQuiz = (i,q,one,two,three,four) => {
    quizQuestion.innerText = 'Q'+(i+1)+'. '+q;
    quizOption1.innerText = 'a) '+one;
    quizOption2.innerText = 'b) '+two;
    quizOption3.innerText = 'c) '+three;
    quizOption4.innerText = 'd) '+four;
    quizOutOfNumber.innerText = '( '+(i+1)+' of '+mainArray.length+' )'
}
showQuestionInitialise();

// change the background to blue of selected radio block
const backgroundColorRadioButton = () => {
    let i = 1;
    for (const radioButton of quizRadioOptions) {
        if (radioButton.checked) {
            document.getElementById('option'+i+'-container').classList.add('option-container-change');
        }else {
            document.getElementById('option'+i+'-container').classList.remove('option-container-change');
        }
        i++;
    }
}

const quizNextButton = () => {
    // getting which radio input has been selected
    let selectedSize;
    for (const radioButton of quizRadioOptions) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            radioButton.checked = false;
            break;
        }
        
    }
    // if the user didn't select any radio input
    if(!selectedSize){
        alert('please select one answer');
        return;
    }
    // changing the color back to neutral for next question of the radio inputs
    for (let i=1;i<=4;i++) document.getElementById('option'+i+'-container').classList.remove('option-container-change');

    // insert the selected answer into arraya
    answerArray.push(selectedSize);
    quizCurrentIndex++;

    // if the questions are finished, show the result
    if(quizCurrentIndex>=mainArray.length){
        localStorage.setItem('userAnswer',JSON.stringify(answerArray));
        window.location.replace('result.html')
        return;
    }
    // if it is the last question, change the button to submit to refer to result
    if(quizCurrentIndex==mainArray.length-1){
        qNextButton.innerHTML = "Submit &#x2771;"
        qNextButton.classList.remove('bg-success')
        qNextButton.classList.add('bg-danger')
    }
    // print the next question;
    showQuestionInitialise();
}
/* end of quiz */