import { Component, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      bname:new FormControl('', [Validators.required, Validators.minLength(4)]),
      acn:new FormControl('', [Validators.required,  Validators.minLength(8)]),
      nic:new FormControl('', [Validators.required]),

    } 
  );
get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
  onSubmit() {​​​​​​​ 
    this.router.navigate(['/fund-transfer'])  
  }​​​​​​​​​


}
