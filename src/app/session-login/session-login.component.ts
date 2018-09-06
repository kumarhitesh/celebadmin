import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-login',
  templateUrl: './session-login.component.html',
  styleUrls: ['./session-login.component.css']
})
export class SessionLoginComponent implements OnInit {
  loginDetails = {
    username : '',
    password : ''
  };

  wrongCredentials = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login = function() {
    if (this.loginDetails.username === 'admin' || this.loginDetails.password === 'celeb@123') {
      this.wrongCredentials = false;
      this.router.navigate(['home']);
    } else {
      this.wrongCredentials = true;
    }
  };
}
