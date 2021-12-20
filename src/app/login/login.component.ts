import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginiService } from '../logini.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hari:any;
  model : any={};
  public m:number=1;
  public message:any;
  constructor( private service:LoginiService,private router:Router) {
   }

  ngOnInit(): void {
    this.getLoginData();
  }

  private getLoginData():void{
    this.service.getLogin().subscribe(result=>
     {
       this.hari=result;
     });
  }
  
      
  form=new FormGroup(
    {

      userid:new FormControl('', [Validators.required]),
       pass:new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    }
  );

  get f(){  
    return this.form.controls;
  }


  

  /* submit(){
    console.log(this.form.value);
  } */


  onSubmit() {​​​​​​​​​ 
    console.log(this.form.value); 
    for(let a of this.hari){
    if((this.form.value.userid==a.userid) && (this.form.value.pass==a.password))
    {
      this.message=this.form.value.userid;
      this.m=2;
    }
    }​​​​​​​​
    
    if(this.m==2){
      alert("Welcome"+" "+this.message);
      this.router.navigate(['/dashboard']) 
    }
    else{
      alert("invalid login details")
    }
   
  }


onSubmit1(): void
{
  this.router.navigate(['/register']) 
}

}
