import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../dialogs/result-dialog/result-dialog.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  
  staffregisterform!:FormGroup;

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.staffregisterform=this.formBuilder.group({
      name:['',Validators.required],
      patternlastname:['',Validators.required],
      matternlastname:['',Validators.required],
      sex:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      document:['',Validators.required],
      numberdocument:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
     })
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogComponent)
  }

}
