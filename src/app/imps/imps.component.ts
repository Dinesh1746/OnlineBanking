import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      fac:new FormControl('', [Validators.required, Validators.minLength(4)]),
      tac:new FormControl('',[Validators.required,  Validators.minLength(4)]),
      amount:new FormControl('',[Validators.required]),

    } 
  );
get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
 
}
