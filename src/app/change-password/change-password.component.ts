import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  form=new FormGroup(
    {
      login:new FormControl('', [Validators.required,Validators.minLength(6)]),
      con:new FormControl('',[Validators.required]),
      stp:new FormControl('',[Validators.required,Validators.minLength(4)]),
      ctp:new FormControl('',[Validators.required]),
    }
  );
 
  get f(){
    return this.form.controls;
  }
 
  submit(){
    console.log(this.form.value);
  }
  onSubmit() {​​​​​​​​​  
    this.router.navigate(['/dashboard'])
 }​​​​​​​​​
 

}
