// Define el componente Square que representa una casilla del tablero.
export const Square = ({ children, isSelected, updateBoard, index }) => {
	// Calcula la clase CSS para la casilla, añadiendo 'is-selected' si está seleccionada.
	const className = `square ${isSelected ? "is-selected" : ""}`;

	// Maneja el clic en la casilla y llama a la función updateBoard con el índice de la casilla.
	const handleClick = () => {
		updateBoard(index);
	};

	// Retorna un div que representa la casilla, con el evento onClick y la clase CSS calculada.
	return (
		<div onClick={handleClick} className={className}>
			{children} {/* Muestra el contenido de la casilla (X, O o vacío). */}
		</div>
	);
};