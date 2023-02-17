const quizData = [
    {
        question: "有關電能的敘述何者正確?",
        a: "電能的單位為伏特",
        b: "電能無法轉換成其他能量",
        c: "電池是唯一能提供電能的裝置",
        d: "相同大小的電流通過電阻較大的導體時，會消耗較多的電能",
        correct: "d",
    },
    {
        question: "一電子鍋標示電功率為 1000W，下列關於「1000W」的敘述何者正確？",
        a: "使用此電子鍋 1 次需消耗 1000 焦耳的電能",
        b: "使用時每秒有 1000 個電子通過",
        c: "使用時電子鍋每秒消耗 1000 焦耳電能",
        d: "使用時電源提供每庫侖電量 1000 焦耳電能",
        correct: "c",
    },
    {
        question: "阿昇家中的屋頂裝設了一片太陽能板，這是一種可以將光能轉換為電能的設備。阿昇某日記錄此太陽能板日照 12 小時產生了 2.4 度的電能，則此太陽能板在這 12 小時中的平均電功率為多少瓦特？（1 度＝1 仟瓦．小時） ",
        a: "0.2",
        b: "5",
        c: "200",
        d: "5000",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}



function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        };
        if(answer !== quizData[currentQuiz].correct){
            alert("請仔細訂正!");
        };
        
        currentQuiz++

        if(currentQuiz  < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>你一共答對了${score}/${quizData.length} 題</h2>

            <button onclick="location.reload()">重來</button>`
        }
    }
});
