import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<string>;//Observable

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  login(email: string, password: string): Promise<void | string> {

    return new Promise<void | string>(
      (res, rej) => {

        setTimeout(() => {

          if (email === 'Administrateur' && password === 'azerty') {
            this.token.next('zfgergsegqetr');
            res();
          } else {
            rej('Les identifiants sont incorrects.');
          }

        }, 300);
      }
    );
  }

  logout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
