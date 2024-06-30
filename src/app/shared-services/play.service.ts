import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../token-storage.service";
import {Router} from "@angular/router";
import {Piece} from "../piece/piece.model";
export enum Color {
  ROJO = 'Rojo',
  AZUL = 'Azul',
  AMARILLO = 'Amarillo',
  VERDE = 'Verde'
}
@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private baseUrl = 'http://localhost:8080/api/game/play';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
  }
  rollDice(): Observable<number> {
    const headers = this.getAuthHeaders();
    return this.http.get<number>(`${this.baseUrl}/rollDice`,{ headers });
  }
  mustExitPiece(): Observable<boolean>{
    const headers = this.getAuthHeaders();
    return this.http.get<boolean>(`${this.baseUrl}/mustExitPiece`,{ headers });
  }
  move(piece: Piece): Observable<boolean> {
    const headers = this.getAuthHeaders();
    return this.http.post<boolean>(`${this.baseUrl}/move`, piece, { headers });
  }
  canMove(): Observable<boolean>{
    const headers = this.getAuthHeaders();
    return this.http.get<boolean>(`${this.baseUrl}/canMove`,{ headers });
  }

  exitPiece(){
    const headers = this.getAuthHeaders();
    return this.http.get(this.baseUrl + "/exitPiece", { headers });

  }
  isCapturePiece(){
    const headers = this.getAuthHeaders();
    return this.http.get(this.baseUrl + "/capturePiece", { headers });
  }
  isArriveGoal(){
    const headers = this.getAuthHeaders();
    return this.http.get(this.baseUrl + "/arriveGoal", { headers });
  }

  updateBoard(){
    const headers = this.getAuthHeaders();
    return this.http.get(this.baseUrl + "/updateBoard", { headers });

  }

  changeTurn(): Observable<Color>{
    const headers = this.getAuthHeaders();
    return this.http.get<Color>(`${this.baseUrl}/changeTurn`,{ headers });
  }
  getTurn(): Observable<Color>{
    const headers = this.getAuthHeaders();
    return this.http.get<Color>(`${this.baseUrl}/getTurn`,{ headers });
  }
  exit(){
    this.router.navigate(['/game-start']);
  }



}

