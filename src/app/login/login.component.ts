import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private router:Router) {
   }

  ngOnInit(): void {
  }
  
  form=new FormGroup(
    {
      userid:new FormControl('', [Validators.required, Validators.minLength(3)]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
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
