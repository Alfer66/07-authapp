import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( public auth: AuthService) {}

  ngOnInit(): void {

  }

  login(){
    this.auth.loginWithRedirect();
  }

}
