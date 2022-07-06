/* global */
let mainArray = JSON.parse(localStorage.getItem('question')||"[]");

/* addquestion */
let aqQuestion = document.getElementById('addquestion-question')
let aqInput1 = document.getElementById('addquestion-input1')
let aqInput2 = document.getElementById('addquestion-input2')
let aqInput3 = document.getElementById('addquestion-input3')
let aqInput4 = document.getElementById('addquestion-input4')
let aqSelect = document.getElementById('addquestion-select')
let aqTotal = document.getElementById('addquestion-total')

aqTotal.innerText = "Total question : "+mainArray.length;

const addquestionAdd = () => {
    if(aqQuestion.value===''||aqInput1.value===''||aqInput2.value===''||aqInput3.value===''||aqInput4.value===''||aqSelect.value===''){
        alert('please fill out the input...')
        return;
    }
    let temp = {
        id : uuidv4(),
        question : aqQuestion.value,
        option1 : aqInput1.value,
        option2 : aqInput2.value,
        option3 : aqInput3.value,
        option4 : aqInput4.value,
        answer : aqSelect.value
    };
    mainArray.push(temp);
    localStorage.setItem('question',JSON.stringify(mainArray));
    document.location.reload();
}
    
/* end of addquestion */

// creating unique id for the each note item
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}