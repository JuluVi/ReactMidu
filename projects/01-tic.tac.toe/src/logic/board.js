import { WINNER_COMBOS } from "../constantes";

export const checkWinnerFrom = (boardToCheck) => {
	//Revisamos todas las combinaciones ganadoras
	//Para ver si X o U ganó
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] && //Si hay algo en la posición a
			boardToCheck[a] === boardToCheck[b] && //Si la posición a y b es la misma
			boardToCheck[a] === boardToCheck[c] // SI la posición a y c es la misma
		) {
			return boardToCheck[a]; //Devolvemos el ganados que será el simbolo que cumple esta condición
		}
	}
	//Si no hay ganador
	return null;
};

export const checkEndGame = (newBoard) => {
    //revisamos si hay un empate
    //si no hay más espacios vacios
    //en el tablero
    return newBoard.every((square) => square !== null)
}