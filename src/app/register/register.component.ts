import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisService } from '../regis.service';
import { register } from './register.modes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public abhi:any;
  /* Register=new register(); */

  constructor(public service:RegisService, private router:Router) {
  }

 ngOnInit(): void {
   this.getResisterData();
 }

 private getResisterData():void{
   this.service.getRegisters().subscribe(result=>
    {
      this.abhi=result;
    }) 

 }
 
  //  addResisterData():void{

  //   this.service.addResisterData(this.Register).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )

  // }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new register();
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
 onSubmit(form:NgForm) {​​​​​​​​​  
  this.insertRecord(form);
   this.router.navigate(['/login'])
}​​​​​​​​​
insertRecord(form:NgForm)
{
  this.service.addResisterData().subscribe(
    res=>{
      this.resetForm(form);
    },
    err=>{console.log(err);}
  )
}


}
