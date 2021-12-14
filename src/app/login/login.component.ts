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
<<<<<<< HEAD
      userid:new FormControl('', [Validators.required]),
      password:new FormControl('',[Validators.required]),
=======
      userid:new FormControl('', [Validators.required, Validators.minLength(6)]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
>>>>>>> 5724d222f3a0d20ce84510f81663875c5f5f2350
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
