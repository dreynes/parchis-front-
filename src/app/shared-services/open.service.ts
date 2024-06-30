import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../token-storage.service";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OpenService{
  private baseUrl = 'http://localhost:8080/api/game';
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }
  getSavedGames(): Observable<string[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
    return this.http.get<string[]>(this.baseUrl + "/open", {headers});
  }

  loadGameByName(gameName: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
    return this.http.post(`${this.baseUrl}/openGame?gameName=${gameName}`,{}, { headers });

  }
}
