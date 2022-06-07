 import { Component, OnInit} from '@angular/core';
 import {FormControl, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';

 @Component({
   selector: 'app/otp-page',
   templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
 })
 
 export class otpPageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    otp: new FormControl('', Validators.compose([Validators.minLength(4), Validators.maxLength(4), Validators.required]))
  });
  public submitted = false;

  constructor(private router: Router) {}

    public submit(){
      this.submitted = true;
      this.form.markAllAsTouched();
      if(this.form.valid){
        this.router.navigate(['/product-page'])
      }
    }
   
   ngOnInit(): void {}

 }
