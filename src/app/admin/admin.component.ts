import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public abhishek:any;
  public m:number=1;
  constructor( private service:AdminService ,private router:Router) { }

  ngOnInit(): void {
    this.getAdmindata();
  }

  private getAdmindata():void{
    this.service.getAdmin().subscribe(result=>
     {
       this.abhishek=result;
     });
  }

form=new FormGroup(
  {
    userid:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  }
);
get f(){
  return this.form.controls
}
submit(){
  console.log(this.form.value);
}


onSubmit() {​​​​​​​​​ 
  console.log(this.form.value); 
  for(let a of this.abhishek){
  if((this.form.value.userid==a.adminid) && (this.form.value.pass==a.password))
  {
    this.m=2;
  }
  }​​​​​​​​
  
  if(this.m==2){
    alert("login sucessful");
    this.router.navigate(['/admin-dash']) 
  }
  else{
    alert("invalid login details")
  }
 
}


}
