import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  private ingresar:boolean=false;

  public LogIn(usuario: any,password:any): boolean {
    console.log('ingresar app');
    return  this.ingresar=usuario == 'admin' && password == 'admin';
  }
  public habilitar(){
    console.log('hab');
    return  this.ingresar;
  }
}


