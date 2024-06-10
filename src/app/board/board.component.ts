import { Component } from '@angular/core';

// Define la clase Square
class Square {
  value: number ;
  color: string;
  constructor(value: number, color: string) {
    this.value = value;
    this.color = color;
  }
}

// Define la interfaz para una ficha de Parchís
interface Pawn {
  color: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: Square[][];
  diceNumber: number | null = null;
  pawns: Pawn[][];

  redPieces: number[] = [87, 89, 47, 45]; // Ejemplo, asegúrate de inicializar correctamente
  yellowPieces: number[] = [353, 397, 355, 395]; // Ejemplo, asegúrate de inicializar correctamente
  greenPieces: number[] = [101, 59, 61, 103]; // Ejemplo, asegúrate de inicializar correctamente
  bluePieces: number[] = [339, 381, 341, 383]; // Ejemplo, asegúrate de inicializar correctamente

  constructor() {
    this.board = [];
    const rows = 17;
    const cols = 17;

    // Llenar la matriz con instancias de Square
    let count = 1;
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < cols; j++) {
        this.board[i][j] = new Square(count++, 'white');
      }
    }

    // Inicializa la matriz de fichas con fichas vacías
    this.pawns = Array.from({ length: 4 }, () => Array(4).fill(null));
    // Coloca las fichas en sus posiciones iniciales
    this.pawns[0][0] = { color: 'red' };
    this.pawns[0][1] = { color: 'green' };
    this.pawns[0][2] = { color: 'yellow' };
    this.pawns[0][3] = { color: 'blue' };
  }

  handleCellClick(row: number, col: number) {
    console.log('Clic en la casilla:', row, col, this.board[row][col].value);
    // Aquí puedes agregar la lógica que desees para manejar el clic en la casilla
  }

  handleDiceRolled(number: number) {
    this.diceNumber = number;
  }

  // Métodos para mover las fichas, por ejemplo:
  movePawn(pawn: Pawn, newRow: number, newCol: number) {
    // Verifica si el movimiento es válido
    // Realiza el movimiento si es válido
    this.pawns[newRow][newCol] = pawn;
    // Actualiza la posición de la ficha en la matriz de fichas
  }
}
