import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  LocalStorageService,
  ModalService,
  AuthService,
  ValidatorService,
  TokenService,
} from 'src/app/services';
import { GlobalConst } from 'src/app/constants/global-const';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private modalService: ModalService,
    private router: Router,
    private token: TokenService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [ValidatorService.required, ValidatorService.email]],
      password: ['', ValidatorService.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  handleLogin() {
    this.submitted = true;

    // Valid login form
    if (!this.loginForm.valid) {
      return;
    }

    // Call api login
    this.authService.logIn(this.loginForm.getRawValue()).subscribe(
      (res) => {
        if (res.token) {
          this.token.setWithExpiry(
            GlobalConst.LocalStorageKeyMapping.token,
            res.token,
            2
          );
          this.authService.getCurrentUser().subscribe((user) => {
            localStorage.setItem('getUser', JSON.stringify(user));
            this.router.navigateByUrl('/product-manage');
          });
        }
      },
      (error) => {
        this.submitted = false;
        this.modalService.open('UserName hoặc PassWord không chính xác!');
      }
    );
  }
}
