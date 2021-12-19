import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { PaymentService } from '../payment.service';
import { pay } from '../imps/payment.models';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {
  data:any;
  submitted = false;
  EventValue: any = "save";

  constructor(private service:PaymentService) { }

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
