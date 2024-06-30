import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../token-storage.service";
import {Router} from "@angular/router";
import {Color} from "./play.service";

@Injectable({
  providedIn: 'root'
})
export class SaveService{
  private baseUrl = 'http://localhost:8080/api/game';
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router) { }
  canSave() :Observable<boolean>{
  const headers = this.getAuthHeaders();
  return this.http.get<boolean>(`${this.baseUrl}/canSave`,{ headers });
  }

  saveGame(saveName: string) {
    const headers = this.getAuthHeaders();
    return this.http.post<Color>(`${this.baseUrl}/save`,saveName,{ headers });
  }
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
  }
}
