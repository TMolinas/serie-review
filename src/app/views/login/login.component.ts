import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  name: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.name = 'Administrateur';
    this.password = 'azerty';
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm(form: NgForm) :void{

    if (form.valid) {
      this.authService
        .login(this.name, this.password)
        .then(() => {
          this.router.navigateByUrl('series');
        });
    }

  }
}

