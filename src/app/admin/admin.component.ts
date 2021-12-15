import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
form=new FormGroup(
  {
    userid:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required]),
  }
);
get f(){
  return this.form.controls
}
submit(){
  console.log(this.form.value);
}


}
