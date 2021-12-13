import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  submit(form:any){
    var login=form.userid;
    console.log(login);
    var password=form.pass;
    console.log(password);
  }
  ngOnInit(): void {
  }

}
