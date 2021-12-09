import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ForgotUserIDComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ChangeUIDComponent } from './change-uid/change-uid.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ImpsComponent } from './imps/imps.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'open-account',component:OpenAccountComponent},
{path:'forgot-user-id',component:ForgotUserIDComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'set-password',component:SetPasswordComponent},
{path:'dashboard',component:DashboardComponent},
{path:'account-statement',component:AccountStatementComponent},
{path:'fund-transfer',component:FundTransferComponent},
{path:'change-uid',component:ChangeUIDComponent},
{path:'change-password',component:ChangePasswordComponent},
{path:'add-payee',component:AddPayeeComponent},
{path:'imps',component:ImpsComponent},
{path:'neft',component:NeftComponent},
{path:'rtgs',component:RtgsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
