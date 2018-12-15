/* jshint esversion: 6*/
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (r = 0; r < numberOfRows; r++){
		row = [];
		for (c = 0; c < numberOfColumns; c++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (r = 0; r < numberOfRows; r++){
		row = [];
		for (c = 0; c < numberOfColumns; c++){
			row.push(null);
		}
		board.push(row);
	}
	let numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced <= numberOfBombs){
		/* need to add logic when a bomb already exists on the space*/
		const randomRowIndex = Math.floor(Math.random()*numberOfRows);
		const randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++;
	}
	return board;
};

const printBoard = board => { 
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

playerBoard = generatePlayerBoard(3,4);
bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

