import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {

  displayinfo!:boolean;
  displaydiagnostic!:boolean;
  displaytreatment!:boolean;
  displaydata!:boolean;
  
  constructor() { }

  ngOnInit() {
  }

  DisplayInfo(){
    if(this.displayinfo == true){
      this.displayinfo = false;
    }else{
      this.displayinfo = true;
    }
  }

  DisplayDiagnostic(){
    if(this.displaydiagnostic == true){
      this.displaydiagnostic = false;
    }else{
      this.displaydiagnostic = true;
    }
  }

  DisplayTreatment(){
    if(this.displaytreatment == true){
      this.displaytreatment = false;
    }else{
      this.displaytreatment = true;
    }
  }

  DisplayData(){
    if(this.displaydata == true){
      this.displaydata = false;
    }else{
      this.displaydata = true;
    }
  }

}
