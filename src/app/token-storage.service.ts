import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private TOKEN_KEY = 'auth-token';

  signOut(): void {
    window.localStorage.removeItem(this.TOKEN_KEY);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    const token = window.localStorage.getItem(this.TOKEN_KEY);
    if (token === null) {
      return '';
    }
    return token;
  }
}
