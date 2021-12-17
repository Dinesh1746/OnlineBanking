import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  public data:any;

  constructor( private service:AccountService) { }

  ngOnInit(): void {
    this.getaccountdetails()
  }

  private getaccountdetails():void{
    this.service.getaccount().subscribe(res=>
      {
        this.data=res;
      })
  }

}
