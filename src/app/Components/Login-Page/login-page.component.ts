import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteInfo } from '../models/routeinfo.models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class loginpagecomponent implements OnInit {

  detailsForm! : FormGroup;
  isSubmitted : boolean = false;

  constructor(private fbuilder : FormBuilder, private router : Router) {

  }

  ngOnInit(): void {
    this.detailsForm = this.fbuilder.group(
      {
        fullnameControl : ['', this.nonEmptyName],
        
        otpControl: ['', Validators.required]
      }
    );
  }

  onSubmitUserDetails(submittedForm : FormGroup) {
    this.isSubmitted = true;
    if (!submittedForm.invalid) {
      this.router.navigate([RouteInfo.UPLOADID]);
    }
  }

  //TODO: move this method out of here
  nonEmptyName (control : FormControl) : ValidationErrors|null {
    if (control.value.trim() == "") {
      let resp = {
        'required' : true //TODO: stop overloading this validation error name
      };
      return resp;
    }
    return null;
  }

  // public form: FormGroup = new FormGroup({
  //   fullName: new FormControl('',Validators.required),
  //   idNumber: new FormControl('', Validators.compose([Validators.pattern(/^-?(0|[1-9]\d*){13}?$/), Validators.required])),
    
  // });
  // public submitted = false;

  // constructor(private router: Router){

  // }

  // public submit(){
  //   this.submitted = true;
  //   this.form.markAllAsTouched();
  //   if(this.form.valid){
  //     this.router.navigate(['/identification'])
  //   }
  // }

  // get control(){
  //   this.form.markAllAsTouched();
  //   return this.form.controls;
  // }

  // ngOnInit(): void {
  // }

}
