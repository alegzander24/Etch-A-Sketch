const container = document.querySelector(".container");
const btnContainer = document.querySelector(".button-container");
const resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";

let number = parseInt(
	prompt("how many grids do you want : ex 15, 20, 25 ... ")
);

while (number > 60) {
	number = parseInt(prompt("max number 60!"));
}

btnContainer.append(resetBtn);

// divide the current space by the user input

let boxSize = 800 / number;

let boards = [];

// create the board based on the user input
for (let i = 0; i < number * number; i++) {
	var board = document.createElement("div");
	board.className = "board";
	board.style.width = `${boxSize}px`;
	board.style.height = `${boxSize}px`;
	container.append(board);

	boards.push(board);
}

// add an eventlistener to each board

boards.forEach((board) => {
	let opacity = 0.1;
	board.addEventListener("mouseenter", (e) => {
		let red = Math.floor(Math.random() * 255);
		let blue = Math.floor(Math.random() * 255);
		// change the color of each one randomly
		board.style.backgroundColor = `rgba(${red}, 0, ${blue})`;
		board.style.opacity = `${opacity}`;

		opacity += 0.1;
	});
});

resetBtn.addEventListener("click", () => {
	boards.forEach((board) => {
		board.style.backgroundColor = "white";
	});
});

let randNum = Math.floor(Math.random() * 255);
