import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OpenaccService } from '../openacc.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  public ee:any
  constructor( private router:Router,private service:OpenaccService) {
  }

 ngOnInit(): void {
   this.getaccdata();
 }
 private getaccdata():void{
   this.service.getAcc().subscribe(result=>
    {
      this.ee=result;
    });
 }
 
 form=new FormGroup(
   {
     title:new FormControl('', [Validators.required]),
     first:new FormControl('', [Validators.required]),
     last:new FormControl('', [Validators.required]),
     father:new FormControl('', [Validators.required]),
     mobile:new FormControl('', [Validators.required]),
     email:new FormControl('', [Validators.required,Validators.email]),
     aadhar:new FormControl('', [Validators.required]),
     dob:new FormControl('', [Validators.required]),
     add:new FormControl('', [Validators.required]),
     land:new FormControl('', [Validators.required]),
     state:new FormControl('', [Validators.required]),
     city:new FormControl('', [Validators.required]),
     pin:new FormControl('', [Validators.required]),
     otype:new FormControl('',[Validators.required]),
     si:new FormControl('', [Validators.required]),
     gai:new FormControl('', [Validators.required]),
    //  iagree:new FormControl('', [Validators.required]),
   }
 );

 get f(){
   return this.form.controls;
 }

 submit(){
   console.log(this.form.value);
 }
 onSubmit() {

   this.router.navigate(['/home'])

  }​​​​​

}
