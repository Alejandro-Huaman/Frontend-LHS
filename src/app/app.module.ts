import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { ResultDialogComponent } from './dialogs/result-dialog/result-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterMedicalComponent } from './register-medical/register-medical.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicalScheduleComponent } from './appointment/medical-schedule/medical-schedule.component';
import { ResultDialogAppointmentComponent } from './dialogs/result-dialog-appointment/result-dialog-appointment.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { PatientRecordComponent } from './medical-records/patient-record/patient-record.component';
import { RecordFormComponent } from './medical-records/record-form/record-form.component';
import { ResultDialogRecordComponent } from './dialogs/result-dialog-record/result-dialog-record.component';
import { ResultDialogAncientComponent } from './dialogs/result-dialog-ancient/result-dialog-ancient.component';

@NgModule({
  declarations: [									
    AppComponent,
      RegisterUserComponent,
      LoginComponent,
      FirstNavbarComponent,
      ResultDialogComponent,
      RegisterMedicalComponent,
      RegisterStaffComponent,
      HomeComponent,
      AppointmentComponent,
      MedicalScheduleComponent,
      ResultDialogAppointmentComponent,
      MedicalRecordsComponent,
      PatientRecordComponent,
      RecordFormComponent,
      ResultDialogRecordComponent,
      ResultDialogAncientComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
