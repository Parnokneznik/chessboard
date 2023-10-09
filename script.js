document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");

    generateButton.addEventListener("click", generateChessboard);
});

function generateChessboard() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    if (isNaN(rows) || isNaN(columns)) {
        alert("Prosím zvol správná čísla.");
        return;
    }

    const chessboard = document.getElementById("chessboard");
    chessboard.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            if ((i + j) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }
            chessboard.appendChild(square);
        }
    }
}
