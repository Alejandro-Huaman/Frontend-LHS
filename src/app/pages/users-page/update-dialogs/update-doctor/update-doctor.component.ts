import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  medicalupdateform!:FormGroup;
  specialvariable!:string;
  specialistlist: string[] = ["nefrología","urólogo"]
  shift!:string;
  shiftlist:string[] = ["Turno Mañana","Turno Tarde","Turno Noche"]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.medicalupdateform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      gender:['',Validators.required],
      dni:['',Validators.required],
      address:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      speciality:['',Validators.required],
      shift:['',Validators.required],
     })
  }

}
