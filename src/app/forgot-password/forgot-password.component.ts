import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    form=new FormGroup(
      {
        userid :new FormControl('', [Validators.required, Validators.minLength(6)]),
        enterotp :new FormControl('',[Validators.required]),
      }
    );
    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value);
    }
    onSubmit() {​​​​​​​​​  
      this.router.navigate(['/set-password'])  
  }​​​​​​​​​
  }


