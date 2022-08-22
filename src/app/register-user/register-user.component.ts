import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  nombre = new FormControl('', [Validators.required]);

  constructor(public dialog:MatDialog) { }

  ngOnInit() {

  }

  RegisterMethod(){
    const dialogRef = this.dialog.open(ResultDialogComponent)
  }
  
}
