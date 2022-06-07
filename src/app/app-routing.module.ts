import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginpagecomponent } from './Components/Login-Page/login-page.component';
import { otpPageComponent } from './Components/OTP-page/otp-page.component';
import { prodDashPageComponent } from './Components/ProductDash-page/prodDash-page.component';
import { regPageComponent } from './Components/Register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: loginpagecomponent 
  },
  {
    path: 'otpPage',
    component: otpPageComponent
  },
  {
    path: 'prodDash',
    component: prodDashPageComponent
  },
  {
    path: 'regPage',
    component: regPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
