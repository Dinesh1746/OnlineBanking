import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {

  constructor() { }

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
