import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { pay } from './payment.models';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {

  data:any;
  submitted = false;
  EventValue: any = "save";

  constructor(private router:Router,private service:PaymentService) { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      fac:new FormControl('', [Validators.required, Validators.minLength(4)]),
      tac:new FormControl('',[Validators.required,  Validators.minLength(4)]),
      amount:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      remark:new FormControl('',[Validators.required]),

    } 
  ); 
get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
  save(){
    let d: pay=new pay();
    d.accountno=parseInt(this.form.value.fac);
    d.benaccountno=parseInt(this.form.value.tac);
    d.amount=parseInt(this.form.value.amount);
    d.date=this.form.value.date;
    d.remarks=this.form.value.remark;
    console.log(this.form.value.fac);
    this.service.postData(d);

     }
 
}
