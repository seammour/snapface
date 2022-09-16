import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = "defaultToken"
  constructor() { }

  getToken(): string {
    return this.token;
  }
}