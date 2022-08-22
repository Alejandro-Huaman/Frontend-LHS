import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterMedicalComponent } from './register-medical/register-medical.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: "register-user",component: RegisterUserComponent},
  {path: "login",component: LoginComponent},
  {path: "register-medical",component: RegisterMedicalComponent},
  {path: "register-staff",component: RegisterStaffComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
