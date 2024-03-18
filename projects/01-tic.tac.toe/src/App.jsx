import { useState } from "react"; // Importa la función useState desde React.
import "./index.css"; // Importa los estilos CSS desde un archivo llamado index.css.
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constantes.js";
import { checkWinnerFrom } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { checkEndGame } from "./logic/board.js";

// Define el componente principal de la aplicación, App.
function App() {
	// Define el estado del tablero y una función para actualizarlo.
	const [board, setBoard] = useState(Array(9).fill(null));

	// Define el estado del turno actual y una función para cambiarlo.
	const [turn, setTurn] = useState(TURNS.X);

	// Saber cuando es ganador
	const [winner, setWinner] = useState(null); //null es que no hay, false es que hay empate

	

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  checkEndGame(newBoard)

	// Define una función para actualizar el tablero cuando se haga clic en una casilla.
	const updateBoard = (index) => {
		//No actualizamos esta posicion si ya tiene algo no hace nada o tenemos ganador
		if (board[index] || winner) return;

		// Copia el tablero actual. NO TENEMOS QUE MUTAR LAS PROPS, SE CREA Y SE MODIFICA
		const newBoard = [...board];

		// Coloca el símbolo del jugador actual (X o O) en la casilla clicada.
		newBoard[index] = turn;

		// Actualiza el estado del tablero con el nuevo tablero.
		setBoard(newBoard);

		// Cambia el turno al siguiente jugador (de X a O o viceversa).
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

		// Actualiza el estado del turno con el nuevo turno.
		setTurn(newTurn);

    //Revisar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(()=>{
        confetti()
        setWinner(newWinner)
      }) //ver si el juego ha terminado
    } else if (checkEndGame(newBoard)){
      setWinner(false) //empate
    }
	};

	// Retorna la estructura JSX del componente principal.
	return (
		<main className="board">
			<h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
			<section className="game">
				{/* Mapea sobre el tablero y renderiza las casillas Square. */}
				{board.map((_, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{board[index]}{" "}
							{/* Pasa el valor de la casilla como children de Square. */}
						</Square>
					);
				})}
			</section>

			<section className="turn">
				{/* Renderiza dos casillas Square para mostrar el turno actual de los jugadores. */}
				<Square isSelected={turn === TURNS.X}>
					{TURNS.X} {/* Muestra 'X' en la casilla si es el turno de X. */}
				</Square>
				<Square isSelected={turn === TURNS.O}>
					{TURNS.O} {/* Muestra 'O' en la casilla si es el turno de O. */}
				</Square>
			</section>
      <WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	);
}

export default App; // Exporta el componente App para poder ser utilizado en otros archivos.
