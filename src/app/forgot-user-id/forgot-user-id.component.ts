import { Component, OnInit, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIDComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      AccountNumber:new FormControl('', [Validators.required, Validators.minLength(15)]),
      enterotp :new FormControl('',[Validators.required])
    }
  );
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
  onSubmit() {​​​​​​​​​  
    this.router.navigate(['/change-userid'])  
  }
}
