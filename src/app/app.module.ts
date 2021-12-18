import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {​​​​​​​​​ HttpClientModule }​​​​​​​​​ from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ImpsComponent } from './imps/imps.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChangeUseridComponent } from './change-userid/change-userid.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OpenAccountComponent,
    SetPasswordComponent,
    DashboardComponent,
    AccountStatementComponent,
    ChangePasswordComponent,
    AddPayeeComponent,
    ImpsComponent,
    NeftComponent,
    RtgsComponent,
    HomeComponent,
    AdminComponent,
    AccountDetailsComponent,
    ChangeUseridComponent,
    FundTransferComponent,
    AdminDashComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
