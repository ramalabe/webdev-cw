const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the highest score possible in a single round of boxing?',
        choice1: '10 points',
        choice2: '20 points',
        choice3: '30 points',
        choice4: '40 points',
        answer: 4,
    },
    {
        question:
            "Which of these soccer players is not from Argentina?",
        choice1: "Lionel Messi",
        choice2: "Diego Maradona",
        choice3: "Pele",
        choice4: "Gabriel Batistuta",
        answer: 3,
    },
    {
        question: "What is the name of the Olympic swimming style that involves swimming on your back?",
        choice1: "Breaststroke",
        choice2: "Butterfly",
        choice3: "Freestyle",
        choice4: "Backstroke",
        answer: 4,
    },
    {
        question: "Which tennis player has won the most Grand Slam titles in the men's singles category?",
        choice1: "Rafael Nadal",
        choice2: "Novak Djokovic",
        choice3: "Roger Federer",
        choice4: "Andy Murray",
        answer: 3,
    },
    {
        question: "How many players are on a basketball team?",
        choice1: "3",
        choice2: "5",
        choice3: "7",
        choice4: "9",
        answer: 2,
    },
    {
        question: "What is the maximum weight a boxing heavyweight can have?",
        choice1: "200 pounds",
        choice2: "220 pounds",
        choice3: "240 pounds",
        choice4: "260 pounds",
        answer: 3,
    },
    {
        question: "In which sport would you perform a Fosbury Flop?",
        choice1: "Long jump",
        choice2: "High jump",
        choice3: "Pole vault",
        choice4: "Triple jump",
        answer: 2,
    },
    {
        question: "Who holds the record for the fastest 100-meter dash in history?",
        choice1: "Usain Bolt",
        choice2: "Carl Lewis",
        choice3: "Tyson Gay",
        choice4: "Yohan Blake",
        answer: 1,
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        choice1: "Brazil",
        choice2: "Germany",
        choice3: "Spain",
        choice4: "France",
        answer: 4,
    },
    {
        question: "Who is the only player to win six Super Bowl championships as a member of the same NFL team?",
        choice1: "Tom Brady",
        choice2: "Joe Montana",
        choice3: "Terry Bradshaw",
        choice4: "John Elway",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/endofquiz.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()