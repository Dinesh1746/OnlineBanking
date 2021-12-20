import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { payee } from './ben.models';
import { BenificaryService } from '../benificary.service';


@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  data:any;
  submitted = false;
  EventValue: any = "save";
  constructor( private router:Router,private service:BenificaryService) { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      bname:new FormControl('', [Validators.required, Validators.minLength(4)]),
      acn:new FormControl('', [Validators.required  ]),
      rac:new FormControl('', [Validators.required]),
      nic:new FormControl('', [Validators.required]),

    } 
  );
get f(){
    return this.form.controls;
  }
  // submit(){
  //   console.log(this.form.value);
  // }
  save(){
    let d: payee=new payee();
    d.name=this.form.value.bname;
    d.benaccountno=parseInt(this.form.value.acn);
    d.nickname=this.form.value.nic;
    d.accountno=parseInt(this.form.value.rac);
    console.log(this.form.value.fac);
    this.service.postData(d);
    this.router.navigate(['/fund-transfer'])
     }
  // onSubmit() {​​​​​​​ 
  //   this.router.navigate(['/fund-transfer'])  
  // }​​​​​​​​​


}
