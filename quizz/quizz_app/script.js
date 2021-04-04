
const start_btn = document.getElementById('start-btn');
const next_btn = document.getElementById('next-btn');
const questioncontainer = document.getElementById('question-contaier');
const question_text= document.getElementById('question');
const button_text= document.getElementById('answer_btn')
let shuffledQuestions,currentQuestionIndex
const success = document.getElementById('success');
const failure= document.getElementById('failure');
const start_game = ()=>{
    
    start_btn.classList.add('hide')
    questioncontainer.classList.remove('hide');
    
    shuffledQuestions= questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0;
    setnextQuesion()
}
start_btn.addEventListener('click',start_game)
function setnextQuesion(){
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
next_btn.addEventListener('click',()=>{
    currentQuestionIndex++;
    setnextQuesion()
})
function showQuestion(question){
    question_text.innerText= question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText= answer.text;
        button.classList.add('btn');
        if(answer.correct){
            
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click',selectAnswer)
        button_text.appendChild(button)
        
    });

}
function selectAnswer(e) {
    const selectedButton = e.target;
    correct_answer.forEach(x=>{
        if(selectedButton.innerText===x){
            var v1=document.getElementById('p1').value;
            document.getElementById("p1").value= v1 + 25;
            success.play()
            
            
            
        }

        
    })
    
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(button_text.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length>currentQuestionIndex+1) {
        next_btn.classList.remove('hide')

        
    }else{
    	alert(`votre score est ${document.getElementById("p1").value}/100` )

        start_btn.innerText='Restart';
        start_btn.classList.remove('hide');
        var v1=document.getElementById('p1');
        v1.value='0';


    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      
    
    } 
    else {
      element.classList.add('wrong')
      
    }
    
}
 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}  
function reset(){
    clearStatusClass(document.body)

    next_btn.classList.add('hide')
    while(button_text.firstChild){
        button_text.removeChild(button_text.firstChild)
    }

}

const questions=[
    {
        question :"L'une des symptomes de le tetanos est ",
        answers:[
            {
                text:'Transpiration excessive',correct:true
            },
            {
                text:'une diarrhée',correct:false
            },
            {
                text:'fievre',correct:false

            }
        ]
    },
    {
        question :'Est ce que il y a une repetiton de vaccin pour le cholera ?',
        answers:[
           {
               text:'Oui',correct:true
           },
           {
               text:'Non',correct:false

           }
        ]
    },
    {
        question :'Qui est responsable du transfert de la rage',
        answers:[
            {
                text:"l'homme",correct:false
            },
            {
                text:"animal",correct:true
            },
            
        ]
    },
    {
        question :'Qui a trouve le vaccin de la rage',
        answers:[
            {
                text:'Robert Koch',correct:false
            },
            {
                text:'Edward Jenner',correct:false
            },
            {
                text:'Alexander Fleming',correct:false
            },
            {
                text:'Louis Pasteur',correct:true
            }

        ]
    },
    
]
const correct_answer= ['Transpiration excessive','Oui','animal','Louis Pasteur']
   