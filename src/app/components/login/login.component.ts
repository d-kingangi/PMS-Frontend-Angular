import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginDetails } from '../../interfaces/login.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink]
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
