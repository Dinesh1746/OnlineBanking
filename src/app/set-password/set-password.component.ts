import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      LoginPassword:new FormControl('', [Validators.required, Validators.minLength(3)]),
      ConfirmLoginpassword :new FormControl('',[Validators.required, Validators.minLength(6)]),
    }
  );
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  }

  

