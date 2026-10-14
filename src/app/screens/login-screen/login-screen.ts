import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.import';

@Component({
  selector: 'app-login-screen',
  imports: [
    ...SHARED_IMPORTS
  ],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss',
})
export class LoginScreen {

}
