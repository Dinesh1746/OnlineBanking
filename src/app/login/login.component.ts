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


  submit(){
    console.log(this.form.value);
  }
  onSubmit(a: { userid: any; password: any; }) {​​​​​​​​​  

    if((this.form.value.userid==a.userid) && (this.form.value.pass==a.password))
    {
      this.router.navigate(['/dashboard']) 
    }
    else{
      alert("invalid");
    } 
}​​​​​​​​​
onSubmit1()
{
  this.router.navigate(['/register']) 
}

}
