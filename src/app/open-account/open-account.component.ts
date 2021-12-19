import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OpenaccService } from '../openacc.service';
import { acc } from './account.models';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  data:any;
  submitted = false;
  EventValue: any = "save";
  constructor( private router:Router,private service:OpenaccService) {
  }

 ngOnInit(): void {
   
 } 
 
 
 
 form=new FormGroup(
   {
     title:new FormControl('', [Validators.required]),
     first:new FormControl('', [Validators.required]),
     middle:new FormControl(''),
     last:new FormControl('', [Validators.required]),
    // father:new FormControl('', [Validators.required]),
     mobile:new FormControl('', [Validators.required]),
     email:new FormControl('', [Validators.required,Validators.email]),
     aadhar:new FormControl('', [Validators.required]),
     dob:new FormControl('', [Validators.required]),
     add:new FormControl('', [Validators.required]),
     otype:new FormControl('',[Validators.required]),
   //  land:new FormControl('', [Validators.required]),
   //  state:new FormControl('', [Validators.required]),
   //  city:new FormControl('', [Validators.required]),
  //   pin:new FormControl('', [Validators.required]),
   
   //  si:new FormControl('', [Validators.required]),
    // gai:new FormControl('', [Validators.required]),
    //  iagree:new FormControl('', [Validators.required]),
   }
 );

 get f(){
   return this.form.controls;
 }
 save(){
  let d: acc=new acc();
  d.firstname=this.form.value.first;
  d.middlename=this.form.value.middle;
  d.lastname=this.form.value.last;
  d.mobile=this.form.value.mobile;
  d.email=this.form.value.email;
  d.aadhar=this.form.value.aadhar;
  d.dob=this.form.value.dob;
  d.address=this.form.value.add;
  d.occupation=this.form.value.otype;
  console.log(this.form.value.Ac);
  this.service.postData(d);
  this.router.navigate(['/home'])
   }

//  submit(){
//    console.log(this.form.value);
//  }
//  onSubmit() {

//    this.router.navigate(['/home'])

//   }​​​​​

}
