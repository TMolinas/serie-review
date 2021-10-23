import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router, NavigationEnd} from "@angular/router";
import {Subscription} from "rxjs";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  token: string;
  tokenSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.token = "";
    this.tokenSub = new Subscription();
  }

  ngOnInit(): void {
    this.tokenSub = this.authService
      .token
      .subscribe((token: string) => this.token = token);

  }

  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }

  onClickLogout(): void {
    this.authService
      .logout()
      .then(() => {
        this.router.navigateByUrl('');
      })
  }
}
