import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      if(isAuthenticaed) {
        this.router.navigate(['/callback'])
      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
    console.log("dentro");
  }

  logOut(){
    this.auth.logout();
    console.log("Fuera");
  }


}
