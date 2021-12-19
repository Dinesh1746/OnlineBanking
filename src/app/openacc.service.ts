import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {acc} from './open-account/account.models';

@Injectable({
  providedIn: 'root'
})
export class OpenaccService { 
  private basepath="http://localhost:5961/api/Custinfoes";
  formData:acc=new acc();
  constructor(private http:HttpClient) { }
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  
  postData(formdata:acc){
 
    let obj:acc =new acc();
    obj.firstname=formdata.firstname;
    obj.middlename=formdata.middlename;
    obj.lastname=formdata.lastname;
    obj.mobile=formdata.mobile;
    obj.email=formdata.email;
    obj.aadhar=formdata.aadhar;
    obj.dob=formdata.dob;
    obj.address=formdata.address;
    obj.occupation=formdata.occupation;

     return this.http.post(this.basepath,obj).subscribe(data=>
     {
       console.log(data);
       alert("Details Sumbitted Successful");
     });
      
  
  }   
}
