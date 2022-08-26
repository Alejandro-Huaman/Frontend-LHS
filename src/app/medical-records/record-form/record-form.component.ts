import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogRecordComponent } from './result-dialog-record/result-dialog-record.component';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  patientrecordform!:FormGroup
  displayinfo!:boolean
  displayback!:boolean
  displayclinic!:boolean
  displaytreatment!:boolean
  backrecordform!:FormGroup
  clinicform!:FormGroup

  constructor(public dialog:MatDialog, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.patientrecordform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      dni:['',Validators.required],
      phone:['',Validators.required],
     })
     this.backrecordform = this.formBuilder.group({
      diagnostic:['',Validators.required]
     })
     this.clinicform = this.formBuilder.group({
      weight:['',Validators.required],
      height:['',Validators.required],
      imc:['',Validators.required],
      indicationtext:['',Validators.required],
      erc:['',Validators.required],
     })
     this.displayinfo = false;
     this.displayback = false;
     this.displayclinic = false;
     this.displaytreatment = false;
  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogRecordComponent)
  }

  DisplayInfoPatient(){
    if(this.displayinfo == true){
      this.displayinfo = false;
    }else{
      this.displayinfo = true;
    }
  }

  DisplayBackrecords(){
    if(this.displayback == true){
      this.displayback = false;
    }else{
      this.displayback = true;
    }
  }

  DisplayClinicMethod(){
    if(this.displayclinic == true){
      this.displayclinic = false;
    }else{
      this.displayclinic = true;
    }
  }

  DisplayTreatmentMethod(){
    if(this.displaytreatment == true){
      this.displaytreatment = false;
    }else{
      this.displaytreatment = true;
    }
  }

}
