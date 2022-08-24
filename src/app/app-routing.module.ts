import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicalScheduleComponent } from './appointment/medical-schedule/medical-schedule.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { RegisterMedicalComponent } from './register-medical/register-medical.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: "register-user",component: RegisterUserComponent},
  {path: "login",component: LoginComponent},
  {path: "register-medical",component: RegisterMedicalComponent},
  {path: "register-staff",component: RegisterStaffComponent},
  {path: "home",component: HomeComponent},
  {path: "appointment",component: AppointmentComponent},
  {path: "medical-schedule",component: MedicalScheduleComponent},
  {path: "medical-records",component: MedicalRecordsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
