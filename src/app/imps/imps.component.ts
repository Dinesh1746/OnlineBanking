import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form:any){
    var Accountnumber=form.Accountnumber;
    console.log(Accountnumber);
    var ToAccountnumber=form.ToAccountnumber;
    console.log(ToAccountnumber);
  }

}
