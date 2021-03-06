import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ChangeUseridComponent } from './change-userid/change-userid.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';


const routes: Routes = [ {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'open-account',component:OpenAccountComponent},
{path:'set-password',component:SetPasswordComponent},
{path:'dashboard',component:DashboardComponent},
{path:'account-statement',component:AccountStatementComponent},
{path:'change-userid',component:ChangeUseridComponent},
{path:'change-password',component:ChangePasswordComponent},
{path:'add-payee',component:AddPayeeComponent},
{path:'imps',component:ImpsComponent},
{path:'neft',component:NeftComponent},
{path:'rtgs',component:RtgsComponent},
{path:'home',component:HomeComponent},
{path:'admin',component:AdminComponent},
{path:'fund-transfer',component:FundTransferComponent},
{path:'account-details',component:AccountDetailsComponent},
{path:'admin-dash',component:AdminDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
