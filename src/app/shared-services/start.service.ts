import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class StartService{
  private baseUrl = 'http://localhost:8080/api/start';
  constructor(private http: HttpClient, private router: Router) { }
  createGame(){
    this.router.navigate(['/game-opened']);

    return this.http.post(this.baseUrl, {});
  }
  exit(){
    this.router.navigate(['/game-start']);
  }

}
