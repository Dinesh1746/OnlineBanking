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
    pass:new FormControl('',[Validators.required]),
  }
);
get f(){
  return this.form.controls
}
submit(){
  console.log(this.form.value);
}


onSubmit(b: { adminuserid: any; adminpass: any; }) {​​​​​​​​​  

  if((this.form.value.userid==b.adminuserid) && (this.form.value.pass==b.adminpass))
  {
    this.router.navigate(['/admin-dash']) 
  }
  else{
    alert("invalid");
  } 
}​​​​​​​​​


}
