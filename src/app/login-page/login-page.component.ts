import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
   user: Object;
  constructor(private router: Router) {

  }
  error = false;

  ngOnInit() {
    this.user = {
      login: '',
      pass: ''
    };
  }
  onSubmit = (e: NgForm) => {
    if (this.user.login === 'root' && this.user.pass === 'root') {
      this.router.navigate(['lessons']);
    } else {
      this.error = true;
    }
  }
}
