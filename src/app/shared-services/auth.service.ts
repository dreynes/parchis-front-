import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginCredentials, RegisterCredentials } from '../auth-credentials';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: LoginCredentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);

  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  register(user: RegisterCredentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
