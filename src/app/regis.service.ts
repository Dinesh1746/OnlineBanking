import { Injectable } from '@angular/core';
import {​​​​​​​​​ HttpClient,HttpHeaders}​​​​​​​​​ from '@angular/common/http';
import { Observable} from 'rxjs';
import { register } from './register/register.models';
@Injectable({
  providedIn: 'root'
})
export class RegisService {

  private basepath="http://localhost:5961/api/Registers";

  formData:register=new register();


  constructor( private http:HttpClient) { }


  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  


  
  

  postData(formdata:register){
 
    let obj:register =new register();
    obj.accountno=formdata.accountno;
    obj.userid=formdata.userid;
    obj.password=formdata.password;
    obj.transactionpass=formdata.transactionpass;

    
     return this.http.post(this.basepath,obj).subscribe(data=>
     {
       console.log(data);
       alert("Registration Successful");
     });
      
  
  }   


}
