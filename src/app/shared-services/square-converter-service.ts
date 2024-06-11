import { Injectable } from '@angular/core';
import { Square } from '../square/square.model';
import {SquareSafe} from "../square-safe/square-safe.model";
import {SquareExit} from "../square-exit/square-exit.model";
import {Border} from "../border/border.model";
import {HomeSquare} from "../home-square/home-square.model";
import {Goal} from "../goal/goal.model";
@Injectable({
  providedIn: 'root'
})
export class SquareConverterService {

  convertToSquare(data: any): Square {
    switch (data.type) {
      case 'SquareSafe':
        return new SquareSafe(data.value, data.color);
      case 'SquareExit':
        return new SquareExit(data.value, data.color);
      case 'Border':
        return <Square>new Border(data.value, data.color);
      case 'HomeSquare':
        return <Square>new HomeSquare(data.value, data.color);
      case 'Goal':
        return <Square>new Goal(data.value, data.color);
      default:
        return new Square(data.value, data.color);
    }
  }

  convertBoard(data: any[][]): Square[][] {
    if (!Array.isArray(data)) {
      console.error('Data no es un arreglo:', data);
      return [];
    }
    return data.map(row => row.map(cell => this.convertToSquare(cell)));
  }

  convertSquareArray(data: any[]): Square[] {
    if (!Array.isArray(data)) {
      console.error('Data no es un arreglo:', data);
      return [];
    }
    return data.map(cell => this.convertToSquare(cell));
  }
}
