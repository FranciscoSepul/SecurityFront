import { Component } from '@angular/core';
import { AuthentificationService } from './shared/Services/LogIn/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecurityFront';
  isSideBarOpen = true;
  openSideBar() {
    this.isSideBarOpen = true;
  }
  closeSideBar() {
    this.isSideBarOpen = false;
  }
  constructor(private login: AuthentificationService) {

  }
  public isLoggedIn(): boolean {
    console.log('primer is loggedin');
    return this.login.habilitar();
  }

}
