import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisService } from '../regis.service';
import { register } from './register.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
 data:any;
  submitted = false;
  EventValue: any = "save";

  constructor(public service:RegisService, private router:Router) {
  }

 ngOnInit(): void {
   
 }

 
   
 


 
 form=new FormGroup(
   {
     Ac:new FormControl('', [Validators.required]),
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

 save(){
let d: register=new register();
d.accountno=parseInt(this.form.value.Ac);
d.userid=this.form.value.uid;
d.password=this.form.value.lp;
d.transactionpass=this.form.value.tp;
console.log(this.form.value.Ac);
this.service.postData(d);

 }

//  submit(){
//    console.log(this.form.value);
//  }

//  onSubmit() {​​​​​​​​​  

//    this.router.navigate(['/login'])
// }​​​​​​​​​


}
