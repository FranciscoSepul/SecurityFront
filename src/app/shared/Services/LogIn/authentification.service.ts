import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  private ingresar: boolean = false

  public LogIn(usuario: any, password: any): boolean {
    
    sessionStorage.setItem('IsLogin', JSON.stringify(this.ingresar = usuario == 'admin' && password == 'admin'));
    return Boolean(sessionStorage.getItem('IsLogin'));
  }
  public habilitar() {
    return Boolean(sessionStorage.getItem('IsLogin'));
  }
  SetSession() {
    sessionStorage.setItem('IsLogin', 'True');
  }
}


