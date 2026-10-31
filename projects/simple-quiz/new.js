
// ========================================
// QUIZ DATA
// ========================================

const quizData = {

    general: {

        easy: [
            {
                question: "Which is the largest planet in our solar system?",
                choices: ["Earth", "Jupiter", "Mars", "Venus"],
                answer: 1
            },
            {
                question: "What is the capital of Japan?",
                choices: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                answer: 2
            },
            {
                question: "How many days are there in a leap year?",
                choices: ["364", "365", "366", "367"],
                answer: 2
            },
            {
                question: "Which animal is known as the King of the Jungle?",
                choices: ["Tiger", "Lion", "Elephant", "Leopard"],
                answer: 1
            },
            {
                question: "Which is the national bird of India?",
                choices: ["Parrot", "Eagle", "Peacock", "Swan"],
                answer: 2
            }
        ],

        medium: [
            {
                question: "Who wrote the national anthem of India?",
                choices: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Premchand"],
                answer: 1
            },
            {
                question: "Which country gifted the Statue of Liberty to the USA?",
                choices: ["France", "Germany", "Italy", "Spain"],
                answer: 0
            },
            {
                question: "Which is the smallest continent?",
                choices: ["Europe", "Australia", "South America", "Antarctica"],
                answer: 1
            },
            {
                question: "In which year did India become a republic?",
                choices: ["1947", "1949", "1950", "1952"],
                answer: 2
            },
            {
                question: "Which gas is most abundant in Earth's atmosphere?",
                choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                answer: 2
            }
        ],

        hard: [
            {
                question: "Which ancient civilization developed cuneiform writing?",
                choices: ["Egyptian", "Sumerian", "Roman", "Greek"],
                answer: 1
            },
            {
                question: "What is the currency of Hungary?",
                choices: ["Euro", "Forint", "Krona", "Zloty"],
                answer: 1
            },
            {
                question: "Which strait separates Asia and North America?",
                choices: ["Malacca Strait", "Bering Strait", "Gibraltar Strait", "Hormuz Strait"],
                answer: 1
            },
            {
                question: "Which element has the chemical symbol W?",
                choices: ["Tungsten", "Tin", "Titanium", "Tantalum"],
                answer: 0
            },
            {
                question: "Which is the deepest known ocean trench?",
                choices: ["Java Trench", "Tonga Trench", "Mariana Trench", "Peru-Chile Trench"],
                answer: 2
            }
        ]

    },


    technology: {

        easy: [
            {
                question: "What does CPU stand for?",
                choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing Unit"],
                answer: 0
            },
            {
                question: "Which language is used to structure web pages?",
                choices: ["CSS", "HTML", "Python", "SQL"],
                answer: 1
            },
            {
                question: "Which company developed Windows?",
                choices: ["Apple", "Google", "Microsoft", "IBM"],
                answer: 2
            },
            {
                question: "What does RAM stand for?",
                choices: ["Read Access Memory", "Random Access Memory", "Run Access Module", "Rapid Action Memory"],
                answer: 1
            },
            {
                question: "Which device is used to type text?",
                choices: ["Monitor", "Printer", "Keyboard", "Speaker"],
                answer: 2
            }
        ],

        medium: [
            {
                question: "Which data structure follows FIFO?",
                choices: ["Stack", "Queue", "Tree", "Graph"],
                answer: 1
            },
            {
                question: "Which protocol is commonly used for secure web browsing?",
                choices: ["HTTP", "FTP", "HTTPS", "SMTP"],
                answer: 2
            },
            {
                question: "Which company created Java?",
                choices: ["Microsoft", "Sun Microsystems", "Apple", "Intel"],
                answer: 1
            },
            {
                question: "What does SQL stand for?",
                choices: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Language"],
                answer: 0
            },
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                choices: ["##", "//", "<!--", "**"],
                answer: 1
            }
        ],

        hard: [
            {
                question: "Which sorting algorithm has average O(n log n) time complexity and uses partitioning?",
                choices: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
                answer: 2
            },
            {
                question: "Which protocol translates domain names into IP addresses?",
                choices: ["DHCP", "DNS", "SSH", "SMTP"],
                answer: 1
            },
            {
                question: "What is the default port number of HTTPS?",
                choices: ["21", "80", "443", "8080"],
                answer: 2
            },
            {
                question: "Which normal form removes partial functional dependencies?",
                choices: ["1NF", "2NF", "3NF", "BCNF"],
                answer: 1
            },
            {
                question: "Which memory is volatile?",
                choices: ["ROM", "SSD", "RAM", "Hard Disk"],
                answer: 2
            }
        ]

    },


    science: {

        easy: [
            {
                question: "Which planet is known as the Red Planet?",
                choices: ["Venus", "Mars", "Jupiter", "Mercury"],
                answer: 1
            },
            {
                question: "What is the chemical formula of water?",
                choices: ["CO2", "O2", "H2O", "NaCl"],
                answer: 2
            },
            {
                question: "Which organ pumps blood in the human body?",
                choices: ["Lungs", "Brain", "Heart", "Kidney"],
                answer: 2
            },
            {
                question: "What is the closest star to Earth?",
                choices: ["Sirius", "Sun", "Polaris", "Vega"],
                answer: 1
            },
            {
                question: "Which gas do plants absorb during photosynthesis?",
                choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                answer: 2
            }
        ],

        medium: [
            {
                question: "What is the SI unit of force?",
                choices: ["Joule", "Newton", "Watt", "Pascal"],
                answer: 1
            },
            {
                question: "Which part of a cell contains genetic material?",
                choices: ["Ribosome", "Nucleus", "Cell wall", "Cytoplasm"],
                answer: 1
            },
            {
                question: "What is the pH of pure water at 25°C?",
                choices: ["5", "6", "7", "8"],
                answer: 2
            },
            {
                question: "Which vitamin is produced in the skin through sunlight exposure?",
                choices: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
                answer: 3
            },
            {
                question: "What is the speed of light in vacuum approximately?",
                choices: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "500,000 km/s"],
                answer: 0
            }
        ],

        hard: [
            {
                question: "Which subatomic particle has a negative charge?",
                choices: ["Proton", "Neutron", "Electron", "Positron"],
                answer: 2
            },
            {
                question: "What is the SI unit of electrical resistance?",
                choices: ["Volt", "Ampere", "Ohm", "Coulomb"],
                answer: 2
            },
            {
                question: "Which law states that pressure is inversely proportional to volume at constant temperature?",
                choices: ["Charles's Law", "Boyle's Law", "Newton's Law", "Ohm's Law"],
                answer: 1
            },
            {
                question: "Which part of the brain controls balance and coordination?",
                choices: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                answer: 1
            },
            {
                question: "What is the approximate value of Avogadro's constant?",
                choices: ["6.022 × 10²³", "3.14 × 10⁸", "9.8 × 10²", "1.6 × 10⁻¹⁹"],
                answer: 0
            }
        ]

    }

};


// ========================================
// GAME VARIABLES
// ========================================

let selectedCategory = "general";
let selectedDifficulty = "easy";

let questions = [];

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let streak = 0;

let timeLeft = 15;
let timerInterval = null;

let answered = false;
let lifelineUsed = false;
let soundEnabled = true;


// ========================================
// HTML ELEMENTS
// ========================================

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");

const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const feedbackEl = document.getElementById("feedback");
const streakEl = document.getElementById("streak");
const liveScoreEl = document.getElementById("live-score");

const lifelineBtn = document.getElementById("lifeline-btn");
const soundBtn = document.getElementById("sound-btn");


// ========================================
// CATEGORY SELECTION
// ========================================

document.querySelectorAll(".category").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".category").forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        updateHomeBestScore();

    });

});


// ========================================
// DIFFICULTY SELECTION
// ========================================

document.querySelectorAll(".difficulty").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".difficulty").forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedDifficulty = button.dataset.level;

    });

});


// ========================================
// HIGH SCORE STORAGE
// ========================================

function getBestScore() {

    const key = "quizBest_" + selectedCategory + "_" + selectedDifficulty;

    return Number(localStorage.getItem(key)) || 0;

}


function updateHomeBestScore() {

    document.getElementById("home-best-score").textContent =
        getBestScore();

}


function saveBestScore() {

    const key = "quizBest_" + selectedCategory + "_" + selectedDifficulty;

    const best = getBestScore();

    if (score > best) {

        localStorage.setItem(key, score);

    }

    return Math.max(score, best);

}


// ========================================
// SOUND EFFECTS
// ========================================

function playSound(type) {

    if (!soundEnabled) return;

    try {

        const audioContext = new (
            window.AudioContext || window.webkitAudioContext
        )();

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.type = "sine";

        if (type === "correct") {

            oscillator.frequency.value = 750;

        } else {

            oscillator.frequency.value = 220;

        }

        gain.gain.setValueAtTime(0.12, audioContext.currentTime);

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.25
        );

        oscillator.start();

        oscillator.stop(audioContext.currentTime + 0.25);

        oscillator.onended = function() {
            audioContext.close();
        };

    } catch (error) {

        console.log("Audio is not supported.");

    }

}


soundBtn.addEventListener("click", function() {

    soundEnabled = !soundEnabled;

    soundBtn.textContent = soundEnabled ? "🔊" : "🔇";

});


// ========================================
// START QUIZ
// ========================================

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    questions = quizData[selectedCategory][selectedDifficulty];

    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    streak = 0;

    lifelineUsed = false;
    answered = false;

    homeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    document.getElementById("category-label").textContent =
        selectedCategory.toUpperCase();

    document.getElementById("difficulty-label").textContent =
        selectedDifficulty.toUpperCase();

    lifelineBtn.disabled = false;

    updateLiveStats();

    showQuestion();

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    clearInterval(timerInterval);

    answered = false;

    timeLeft = 15;

    timerEl.textContent = timeLeft;

    document.querySelector(".timer-circle").classList.remove("warning");

    nextBtn.style.display = "none";

    feedbackEl.textContent = "";

    const q = questions[currentQuestion];

    questionEl.textContent = q.question;

    document.getElementById("question-counter").textContent =
        `QUESTION ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("points-label").textContent =
        "10 POINTS + STREAK BONUS";

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    choicesEl.innerHTML = "";


    // Create options dynamically

    q.choices.forEach(function(choice, index) {

        const button = document.createElement("button");

        button.className = "choice-btn";

        button.textContent = choice;

        button.addEventListener("click", function() {

            selectAnswer(index);

        });

        choicesEl.appendChild(button);

    });


    startTimer();

}


// ========================================
// TIMER
// ========================================

function startTimer() {

    timerInterval = setInterval(function() {

        timeLeft--;

        timerEl.textContent = timeLeft;

        if (timeLeft <= 5) {

            document.querySelector(".timer-circle").classList.add("warning");

        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timeUp();

        }

    }, 1000);

}


function timeUp() {

    if (answered) return;

    answered = true;

    streak = 0;

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".choice-btn");

    buttons.forEach(function(button, index) {

        button.disabled = true;

        if (index === q.answer) {

            button.classList.add("correct");

        }

    });

    feedbackEl.textContent = "⏰ Time's up! The correct answer is highlighted.";

    feedbackEl.style.color = "#ff9eaa";

    playSound("wrong");

    updateLiveStats();

    nextBtn.style.display = "block";

}


// ========================================
// CHECK ANSWER
// ========================================

function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    clearInterval(timerInterval);

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".choice-btn");

    buttons.forEach(function(button, index) {

        button.disabled = true;

        if (index === q.answer) {

            button.classList.add("correct");

        }

        if (index === selectedIndex && selectedIndex !== q.answer) {

            button.classList.add("wrong");

        }

    });


    if (selectedIndex === q.answer) {

        correctAnswers++;

        streak++;

        const bonus = streak >= 2 ? (streak - 1) * 2 : 0;

        score += 10 + bonus;

        feedbackEl.textContent =
            `🎉 Correct! +${10 + bonus} points`;

        feedbackEl.style.color = "#75edbd";

        playSound("correct");

    } else {

        streak = 0;

        feedbackEl.textContent =
            "❌ Incorrect! Better luck on the next question.";

        feedbackEl.style.color = "#ff9eaa";

        playSound("wrong");

    }


    updateLiveStats();

    nextBtn.style.display = "block";

}


// ========================================
// 50:50 LIFELINE
// ========================================

lifelineBtn.addEventListener("click", function() {

    if (lifelineUsed || answered) return;

    lifelineUsed = true;

    lifelineBtn.disabled = true;

    const q = questions[currentQuestion];

    const wrongOptions = [];

    const buttons = document.querySelectorAll(".choice-btn");


    buttons.forEach(function(button, index) {

        if (index !== q.answer) {

            wrongOptions.push(index);

        }

    });


    // Shuffle wrong options

    wrongOptions.sort(function() {

        return Math.random() - 0.5;

    });


    // Hide two wrong options

    wrongOptions.slice(0, 2).forEach(function(index) {

        buttons[index].classList.add("removed");

    });

    feedbackEl.textContent = "✨ Two incorrect options removed!";

    feedbackEl.style.color = "#c4aaff";

});


// ========================================
// UPDATE SCORE AND STREAK
// ========================================

function updateLiveStats() {

    streakEl.textContent = streak;

    liveScoreEl.textContent = score;

}


// ========================================
// NEXT QUESTION
// ========================================

nextBtn.addEventListener("click", function() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// ========================================
// SHOW FINAL RESULT
// ========================================

function showResult() {

    clearInterval(timerInterval);

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    progressBar.style.width = "100%";

    const bestScore = saveBestScore();

    const accuracy = Math.round(
        (correctAnswers / questions.length) * 100
    );


    document.getElementById("final-score").textContent = score;

    document.getElementById("correct-count").textContent =
        `${correctAnswers}/${questions.length}`;

    document.getElementById("accuracy").textContent =
        accuracy + "%";

    document.getElementById("best-score").textContent =
        bestScore;


    // Performance message

    let title = "";
    let message = "";
    let achievement = "";

    if (accuracy === 100) {

        title = "Perfect Performance!";

        message = "Incredible! You answered every question correctly.";

        achievement = "🏆 Perfect Quiz Champion";

    } else if (accuracy >= 80) {

        title = "Outstanding Work!";

        message = "Excellent knowledge! You are doing amazing.";

        achievement = "🥇 Knowledge Master";

    } else if (accuracy >= 60) {

        title = "Great Job!";

        message = "You have good knowledge. Keep improving!";

        achievement = "🥈 Rising Star";

    } else if (accuracy >= 40) {

        title = "Good Try!";

        message = "Practice more and you will get better.";

        achievement = "⭐ Quick Learner";

    } else {

        title = "Keep Learning!";

        message = "Every attempt makes you smarter. Try again!";

        achievement = "🌱 Beginner Explorer";

    }


    document.getElementById("result-title").textContent = title;

    document.getElementById("result-message").textContent = message;

    document.getElementById("achievement").textContent = achievement;

}


// ========================================
// RESTART QUIZ
// ========================================

restartBtn.addEventListener("click", function() {

    startQuiz();

});


// ========================================
// BACK TO HOME
// ========================================

homeBtn.addEventListener("click", function() {

    clearInterval(timerInterval);

    resultScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    updateHomeBestScore();

});


// Initial high score

updateHomeBestScore();
