import { Component, OnInit } from '@angular/core';
import { AdmindashService } from '../admindash.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  public data1:any;

  constructor( private service:AdmindashService) { }

  ngOnInit(): void {
    this.getadmindashdetails()
  }

  private getadmindashdetails():void{
    this.service.getadmindash().subscribe(res=>
      {
        this.data1=res;
      })
  }
}
