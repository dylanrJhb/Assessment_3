import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginpagecomponent } from './Components/Login-Page/login-page.component';
import { otpPageComponent } from './Components/OTP-page/otp-page.component';
import { prodDashPageComponent } from './Components/ProductDash-page/prodDash-page.component';
import { regPageComponent } from './Components/Register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    loginpagecomponent,
    otpPageComponent,
    prodDashPageComponent,
    regPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
