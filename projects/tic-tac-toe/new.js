
document.addEventListener("DOMContentLoaded", function () {

    const cells = document.querySelectorAll(".cell");

    const turnIcon = document.getElementById("turnIcon");
    const turnName = document.getElementById("turnName");
    const turnDescription = document.getElementById("turnDescription");

    const scoreX = document.getElementById("scoreX");
    const scoreO = document.getElementById("scoreO");
    const scoreDraw = document.getElementById("scoreDraw");

    const resultMessage = document.getElementById("resultMessage");
    const resultDescription = document.getElementById("resultDescription");
    const messageIcon = document.getElementById("messageIcon");

    const roundNumber = document.getElementById("roundNumber");

    const playerOne = document.getElementById("playerOne");
    const playerTwo = document.getElementById("playerTwo");

    const resetButton = document.getElementById("reset");
    const resetScoreButton = document.getElementById("resetScore");

    // Game variables

    let board = ["", "", "", "", "", "", "", "", ""];

    let currentPlayer = "X";
    let startingPlayer = "X";
    let gameActive = true;
    let round = 1;

    let scores = {
        X: 0,
        O: 0,
        draw: 0
    };

    const symbols = {
        X: "⭐",
        O: "🐚"
    };

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check that HTML elements are connected

    if (
        cells.length !== 9 ||
        !turnIcon ||
        !turnName ||
        !scoreX ||
        !scoreO ||
        !scoreDraw ||
        !resetButton ||
        !resetScoreButton
    ) {
        console.error("Game HTML elements are missing. Check your HTML IDs.");
        return;
    }

    // Handle cell clicks

    cells.forEach(function (cell) {

        cell.addEventListener("click", function () {

            const index = Number(cell.dataset.index);

            if (!gameActive || board[index] !== "") {
                return;
            }

            board[index] = currentPlayer;

            cell.textContent = symbols[currentPlayer];
            cell.disabled = true;

            checkWinner();

        });

    });

    // Check winning combinations

    function checkWinner() {

        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            if (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[b] === board[c]
            ) {

                finishGame(board[a], combination);
                return;

            }

        }

        // Check for draw

        if (!board.includes("")) {

            gameActive = false;
            scores.draw++;

            updateScores();

            resultMessage.textContent = "It's a draw!";
            resultDescription.textContent = "A close match! Try again.";
            messageIcon.textContent = "🤝";

            turnIcon.textContent = "🤝";
            turnName.textContent = "Draw Match";
            turnDescription.textContent = "Well played by both!";

            playerOne.classList.remove("active");
            playerTwo.classList.remove("active");

            return;

        }

        // Change player

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        updateTurn();

    }

    // Finish the game

    function finishGame(winner, combination) {

        gameActive = false;

        scores[winner]++;

        combination.forEach(function (index) {
            cells[index].classList.add("winner");
        });

        updateScores();

        const winnerName = winner === "X" ? "Player One" : "Player Two";

        resultMessage.textContent = winnerName + " wins!";
        resultDescription.textContent = "Beautiful move! You won this round.";
        messageIcon.textContent = "🏆";

        turnIcon.textContent = symbols[winner];
        turnName.textContent = winnerName;
        turnDescription.textContent = "Congratulations!";

        playerOne.classList.remove("active");
        playerTwo.classList.remove("active");

    }

    // Update current player's information

    function updateTurn() {

        const isPlayerOne = currentPlayer === "X";

        turnIcon.textContent = symbols[currentPlayer];

        turnName.textContent = isPlayerOne
            ? "Player One"
            : "Player Two";

        turnDescription.textContent = "It's your move!";

        playerOne.classList.toggle("active", isPlayerOne);
        playerTwo.classList.toggle("active", !isPlayerOne);

    }

    // Update scoreboard

    function updateScores() {

        scoreX.textContent = scores.X;
        scoreO.textContent = scores.O;
        scoreDraw.textContent = scores.draw;

    }

    // Start a new round

    function resetGame() {

        board = ["", "", "", "", "", "", "", "", ""];

        gameActive = true;

        cells.forEach(function (cell) {

            cell.textContent = "";
            cell.disabled = false;
            cell.classList.remove("winner");

        });

        // Alternate starting player

        startingPlayer = startingPlayer === "X" ? "O" : "X";
        currentPlayer = startingPlayer;

        round++;

        roundNumber.textContent = String(round).padStart(2, "0");

        resultMessage.textContent = "Game on!";
        resultDescription.textContent = "Waiting for your first move.";
        messageIcon.textContent = "🐚";

        updateTurn();

    }

    // Reset scores and start from round one

    function resetAllScores() {

        scores = {
            X: 0,
            O: 0,
            draw: 0
        };

        round = 1;
        startingPlayer = "X";
        currentPlayer = "X";

        board = ["", "", "", "", "", "", "", "", ""];

        gameActive = true;

        cells.forEach(function (cell) {

            cell.textContent = "";
            cell.disabled = false;
            cell.classList.remove("winner");

        });

        roundNumber.textContent = "01";

        resultMessage.textContent = "Game on!";
        resultDescription.textContent = "Waiting for your first move.";
        messageIcon.textContent = "🐚";

        updateScores();
        updateTurn();

    }

    // Button events

    resetButton.addEventListener("click", resetGame);

    resetScoreButton.addEventListener("click", resetAllScores);

    // Initial setup

    updateScores();
    updateTurn();

});
