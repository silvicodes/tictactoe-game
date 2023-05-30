import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O es ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // mirar si en el 0 hay -> x u o
        boardToCheck[a] === boardToCheck[b] &&  // mirar si en el 0 y 3 hay -> x ->x u o -> o
        boardToCheck[a] === boardToCheck[c] // mirar si en el 0 y 3 y 6 hay -> x ->x ->x u o -> o -> o
      ) {
        return boardToCheck[a] // esto deberia ser x u o
      }
    }
    // si no hay ganador
    return null
  }

  export   const checkEndGame = (boardToCheck) => {
    // revisamos si hay un empate
    // si hay mas espacios vacios en el tablero
    return newBoard.every((square) => square !== null)
  }
