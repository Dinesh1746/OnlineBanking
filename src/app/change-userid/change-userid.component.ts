import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-userid',
  templateUrl: './change-userid.component.html',
  styleUrls: ['./change-userid.component.css']
})
export class ChangeUseridComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  form=new FormGroup(
    {
      new:new FormControl('', [Validators.required, Validators.minLength(3)]),
      cnew:new FormControl('',[Validators.required]),
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
  }

}
