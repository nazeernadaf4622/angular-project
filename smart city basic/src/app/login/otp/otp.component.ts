import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,

  public dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit(): void {
  }

}
