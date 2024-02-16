import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    title = 'Login'

    loginForm: FormGroup

    constructor(private fb:FormBuilder){ 
      this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [ Validators.required ]]
    })
  }
}
