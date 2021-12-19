import { Injectable } from '@angular/core';
import { pay } from './imps/payment.models';
import {​​​​​​​​​ HttpClient,HttpHeaders}​​​​​​​​​ from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private basepath="http://localhost:5961/api/Transactions";
  formData:pay=new pay();
  constructor(private http:HttpClient) { }

  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  
  postData(formdata:pay){
 
    let obj:pay =new pay();
    obj.accountno=formdata.accountno;
    obj.benaccountno=formdata.benaccountno;
    obj.date=formdata.date;
    obj.amount=formdata.amount;
    obj.remarks=formdata.remarks;

    
     return this.http.post(this.basepath,obj).subscribe(data=>
     {
       console.log(data);
       alert("Transaction Successful");
     });
  }   

}
