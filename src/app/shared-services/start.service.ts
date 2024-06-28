import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../token-storage.service";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StartService{
  private baseUrl = 'http://localhost:8080/api/game/create';
  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) { }
  createGame(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
    return this.http.post(this.baseUrl + "/initializeBoard",{}, { headers });

  }


}
