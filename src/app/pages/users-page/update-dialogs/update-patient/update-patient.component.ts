import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  userupdateform!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userupdateform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      document:['',Validators.required],
      numberdocument:['',Validators.required],
      birthday:['',Validators.required],
      gender:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
     })
  }

}
