import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../token-storage.service";
@Injectable({
  providedIn: 'root'
})
export class StartService{
  private baseUrl = 'http://localhost:8080/api/game/create';
  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) { }
  createGame(){
    this.router.navigate(['/game-opened']);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenStorage.getToken()}`);
    return this.http.get(this.baseUrl, { headers });

  }
  exit(){
    this.router.navigate(['/game-start']);
  }

}
