const start = document.querySelector('#SB');
const startbox = document.querySelector('#startbox');
const middlebox = document.querySelector('#middlebox');
const finalbox = document.querySelector('#finalbox');
const scorebox = document.querySelector('#score');
const question = document.querySelector('#question');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const initals = document.querySelector('#initals');
const subscore = document.querySelector('#submitScore');
const scoreBoard = document.querySelector("#scoreBoard");
const clear = document.querySelector('#clearS');
const back = document.querySelector('#goBack');
const viewHS = document.querySelector('#viewHS');
const outcome = document.querySelector('#outcome');



let btnVal = [false, false, false, false];

let Q1 = "1. In which HTML elements do we put in JavaScript code?"

let Q1A = ['<script>', '<js>', '<body>', '<head>'];

let Q2 = "2. Which HTML attribute is used to reference an external Javascript file?"

let Q2A = ['<src>', '<p>', '<footer>', '<Java>'];

let Q3 = "3. How do we call an alert box?"

let Q3A = ['alert("Hello");', 'alert.box', 'call', 'Flintstone("Hello");'];

let Q4 = "4. How do you comment a line out in JavaScript?"

let Q4A = ['//', '%', '+', '|*'];

let Q5 = "5. Which Of The Dialog Box Display a Message And a Data Entry Field?"

let Q5A = ['Confirm()', 'Prompt()', 'Alert()', 'Msg()'];

let Q6 = "6. A Function Associated With An object is Called:"

let Q6A = ['Method', 'Function', 'Link', 'None'];

let Q7 = "7. JavaScript File Has An Extension of:"

let Q7A = ['.Js', '.Java', '.javascript', '.xml'];

let Q8 = "8. A typescript can be installed or managed through?"

let Q8A = ['Nmp', 'Tag', 'Space', 'Void'];

let Q9 = "9. What does JSON stand for?"

let Q9A = ['JavaScript Object Notation', 'JavaScript Oriented Notation', 'JavaScript Online Notation', 'JavaScript Orange Notation'];

let Q10 = "10. How to access the current element using DOM <input type=\"radio\" name=\"gender\" value=\"Male\">"

let Q10A = ['Document.getElementByName', 'Document.getElementsByName', 'Document.getElement', 'Document.getElementById'];



let inputUsed = [];

let text;
let currQ = 1;
let score = 0;
let id = 0;

function setBtn() {
    btnVal = [false, false, false, false];
    let btnSet;
    if(currQ == 1) {
        btnSet = Q1A;
        question.innerText = Q1;
    }
    if(currQ == 2) {
        question.innerText = Q2;
        btnSet = Q2A;
    }
    if(currQ == 3) {
        question.innerText = Q3;
        btnSet = Q3A;
    }
    if(currQ == 4) {
        question.innerText = Q4;
        btnSet = Q4A;
    }
    if(currQ == 5) {
        question.innerText = Q5;
        btnSet = Q5A;
    }
    if(currQ == 6) {
        question.innerText = Q6;
        btnSet = Q6A;
    }
    if(currQ == 7) {
        question.innerText = Q7;
        btnSet = Q7A;
    }
    if(currQ == 8) {
        question.innerText = Q8;
        btnSet = Q8A;
    }
    if(currQ == 9) {
        question.innerText = Q9;
        btnSet = Q9A;
    }
    if(currQ == 10) {
        question.innerText = Q10;
        btnSet = Q10A;
    }
    while(inputUsed.length < 4) {
        count = 0;
        text = Math.floor(Math.random() * 4) + 1;
        for(let i = 0; i < inputUsed.length; i++) {
            if(inputUsed[i] == text) {
                count = 0;
                break;
            }
            count++;
        }
        if(count == inputUsed.length) {
            inputUsed[inputUsed.length] = text;
            console.log(text);
            console.log(inputUsed);
            if(count == 0) {
                btn1.innerText = `1. ${btnSet[text - 1]}`;
                if(text == 1) {
                    btn1.value = true;
                    btnVal[0] = true;
                }
                else {
                    btn1.value = false;  
                }
            }
            if(count == 1) {
                btn2.innerText = `2. ${btnSet[text - 1]}`;
                if(text == 1) {
                    btn2.value = true;
                    btnVal[1] = true;
                }
                else {
                    btn2.value = false;  
                }
            }
            if(count == 2) {
                btn3.innerText = `3. ${btnSet[text - 1]}`;
                if(text == 1) {
                    btn3.value = true;
                    btnVal[2] = true;
                }
                else {
                    btn3.value = false;  
                }
            }
            if(count == 3) {
                btn4.innerText = `4. ${btnSet[text - 1]}`;
                if(text == 1) {
                    btn4.value = true;
                    btnVal[3] = true;
                }
                else {
                    btn4.value = false;  
                }
            }
        }

    }
}


let timeEl = document.querySelector('#time');
var secondsLeft = 80;


let d;

let highTrue = true;
function setTime() {
    d = new Date().getTime();
  // Sets interval in variable
  var interval = setInterval(function() {
    if(new Date().getTime() - d <= 80000) {
        //clearInterval(interval);
        //console.log(Math.floor((new Date().getTime() - d)/ 1000));
        timeEl.innerText = `Time: ${80 - Math.floor((new Date().getTime() - d)/ 1000)}`
        //return console.log('yes');
    }
    if(new Date().getTime() - d >= 80000 || currQ == 11) {
        clearInterval(interval);
        //console.log(Math.floor((new Date().getTime() - d)/ 1000));
        middlebox.style.display = 'none';
        finalbox.style.display = 'block';
        timeEl.innerText = 'Complete';
        return console.log('Complete');
    }
  }, 1000);
}

//setTime();

//startbox.style.display = 'block';
//start.addEventListener("click", startgame);



function startgame() {
    viewHS.style.display = 'none';
    btnVal = [false, false, false, false];
    currQ = 1;
    score = 0;
    setTime();
    startbox.style.display = 'none';
    middlebox.style.display = 'block';
    setBtn();
    return;
}



start.addEventListener("click", startgame);

btn1.addEventListener("click", function() {
    inputUsed = [];
    currQ += 1;
    console.log(btn1.value);
    if(btnVal[0] == false) {
        outcome.innerText = "Incorrect"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //display incorrect
        d -= 8000;
    }
    if(btnVal[0]== true) {
        //btnVal = [false, false, false, false];
        outcome.innerText = "Correct"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        score += 1;
        //display correct
    }
    if(currQ < 11) {
        setBtn();
    }
    if(currQ == 11) {
        secondsLeft = 0;
        middlebox.style.display = 'none';
        scorebox.innerText = `Your final score is: ${score}`;
        finalbox.style.display = 'block';
    }
    console.log(`The Score is ${score}`);
})












btn2.addEventListener("click", function() {
    inputUsed = [];
    currQ += 1;
    console.log(btn2.value);
    if(btnVal[1] == false) {
        outcome.innerText = "Incorect"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //display incorrect
        d -= 8000;
    }
    if(btnVal[1]== true) {
        outcome.innerText = "Correct"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //btnVal = [false, false, false, false];
        score += 1;
        //display correct
    }
    if(currQ < 11) {
        setBtn();
    }
    if(currQ == 11) {
        middlebox.style.display = 'none';
        scorebox.innerText = `Your final score is: ${score}`;
        finalbox.style.display = 'block';
    }
    console.log(`The Score is ${score}`);

})














btn3.addEventListener("click", function() {
    inputUsed = [];
    currQ += 1;
    if(btnVal[2] == false) {
        outcome.innerText = "Incorect"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //display incorrect
        d -= 8000;
    }
    if(btnVal[2]== true) {
        outcome.innerText = "Correct"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //btnVal = [false, false, false, false];
        score += 1;
        //display correct
    }
    if(currQ < 11) {
        setBtn();
    }
    if(currQ == 11) {
        secondsLeft = 0;
        middlebox.style.display = 'none';
        scorebox.innerText = `Your final score is: ${score}`;
        finalbox.style.display = 'block';
    }
    console.log(`The Score is ${score}`);

})













btn4.addEventListener("click", function() {
    inputUsed = [];
    currQ += 1;
    if(btnVal[3] == false) {
        outcome.innerText = "Incorect"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //display incorrect
        d -= 8000;
    }
    if(btnVal[3]== true) {
        outcome.innerText = "Correct"
        setTimeout(function() {
            outcome.innerText = ""
        }, 1000);
        //btnVal = [false, false, false, false];
        score += 1;
        //display correct
    }
    if(currQ < 11) {
        setBtn();
    }
    if(currQ == 11) {
        middlebox.style.display = 'none';
        scorebox.innerText = `Your  final score is: ${score}`;
        finalbox.style.display = 'block';
    }
    console.log(`The Score is ${score}`);
})





let once = false;
let val = [];
let prevVal = [];
let newName;
let hScores;
subscore.addEventListener("click", function() {
    let entry = {
        initals: initals.value,
        score: score
    }
    for(let i = 0; i < localStorage.length; i++) {
        val[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //12 13 24
        console.log(val[i].initals)
        let inital = val[i].initals;
        let useScore = val[i].score;
        if(inital == entry.initals && entry.score < useScore) {
            entry.score = useScore;
        }
    }
    prevVal = val;
    val = new Array();
    localStorage.setItem(`${initals.value}`, JSON.stringify(entry));
    for(let i = 0; i < localStorage.length; i++) {
        val[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //12 13 24
    }
    if(once ==  true) {
        val.sort((a, b) => b.score - a.score);
        prevVal.sort((a, b) => b.score - a.score);
        hScores.remove();
        hScores = document.createElement('div');
        let hOl = document.createElement('ol');
        hScores.setAttribute("class", 'scores');
        hScores.append(hOl);
        for(let i = 0; i < val.length; i++) {
            hLi = document.createElement('li');
            if(i == val.length - 1) {
                once = true;
            }
            let inital = val[i].initals;
            let useScore = val[i].score;
            hLi.innerText += `${inital}: ${useScore}`
            hOl.append(hLi);
            if(i + 1 == val.length) {
                scoreBoard.append(hScores);
            }

        }
    }
    if(once == false ){//|| once ==  true) {
        val.sort((a, b) => b.score - a.score);
        prevVal.sort((a, b) => b.score - a.score);
        hScores = document.createElement('div');
        let hOl = document.createElement('ol');
        hScores.setAttribute("class", 'scores');
        hScores.append(hOl);
        for(let i = 0; i < val.length; i++) {
            hLi = document.createElement('li');
            if(i == val.length - 1) {
                once = true;
            }
            let inital = val[i].initals;
            let useScore = val[i].score;
            hLi.innerText += `${inital}: ${useScore}`
            hOl.append(hLi);
            if(i + 1 == val.length) {
                scoreBoard.append(hScores);
            }

        }
    }
    finalbox.style.display = 'none';
    scoreBoard.style.display = 'block';
    viewHS.style.display = 'block';
    //startbox.style.display = 'block';
    //scoreBoard.style.display = 'none'
})

back.addEventListener("click", function() {
    startbox.style.display = 'block';
    scoreBoard.style.display = 'none';
    timeEl.innerText = 'Time: 80';
})

clear.addEventListener("click", function(){
    localStorage.clear();
    hScores.remove();
})


viewHS.addEventListener("click", function() {
    val = new Array();
    //localStorage.setItem(`${initals.value}`, JSON.stringify(entry));
    for(let i = 0; i < localStorage.length; i++) {
        val[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //12 13 24
    }
    if(once ==  true) {
        val.sort((a, b) => b.score - a.score);
        prevVal.sort((a, b) => b.score - a.score);
        hScores.remove();
        hScores = document.createElement('div');
        let hOl = document.createElement('ol');
        hScores.setAttribute("class", 'scores');
        hScores.append(hOl);
        for(let i = 0; i < val.length; i++) {
            hLi = document.createElement('li');
            if(i == val.length - 1) {
                once = true;
            }
            let inital = val[i].initals;
            let useScore = val[i].score;
            hLi.innerText += `${inital}: ${useScore}`
            hOl.append(hLi);
            if(i + 1 == val.length) {
                scoreBoard.append(hScores);
            }

        }
    }
    if(once == false ){//|| once ==  true) {
        val.sort((a, b) => b.score - a.score);
        prevVal.sort((a, b) => b.score - a.score);
        hScores = document.createElement('div');
        let hOl = document.createElement('ol');
        hScores.setAttribute("class", 'scores');
        hScores.append(hOl);
        for(let i = 0; i < val.length; i++) {
            hLi = document.createElement('li');
            if(i == val.length - 1) {
                once = true;
            }
            let inital = val[i].initals;
            let useScore = val[i].score;
            hLi.innerText += `${inital}: ${useScore}`
            hOl.append(hLi);
            if(i + 1 == val.length) {
                scoreBoard.append(hScores);
            }

        }
    }
    startbox.style.display = 'none';
    middlebox.style.display = 'none';
    finalbox.style.display ='none';
    scoreBoard.style.display = 'block';
})