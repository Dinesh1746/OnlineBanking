import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private router:Router) {
  }

 ngOnInit(): void {
 }
 
 form=new FormGroup(
   {
     Ac:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
     uid:new FormControl('',[Validators.required, Validators.minLength(6)]),
     lp:new FormControl('',[Validators.required,Validators.minLength(6)]),
     clp:new FormControl('',[Validators.required]),
     tp:new FormControl('',[Validators.required,Validators.minLength(4)]),
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
   this.router.navigate(['/login'])
}​​​​​​​​​


}
