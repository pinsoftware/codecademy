/* jshint esversion: 6*/
const generatePlayerBoard = (numberofRows, numberOfColumns) => {
	let board = [];
	for (r = 0; r < numberofRows; r++){
		row = [];
		for (c = 0; c < numberOfColumns; c++){
			row.push(' ');
		}
		board.push(row);
	}
	console.log(board);
}

generatePlayerBoard(3,4);


