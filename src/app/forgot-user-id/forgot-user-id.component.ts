import { Component, OnInit, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      AccountNumber:new FormControl('', [Validators.required, Validators.minLength(15)]),
      EnterOTP :new FormControl('',[Validators.required, Validators.minLength(6)]),
    }
  );
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
  reset(){
    console.log(this.form.value);
  }
}
