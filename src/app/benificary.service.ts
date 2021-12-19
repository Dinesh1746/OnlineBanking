import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { payee } from './add-payee/ben.models';

@Injectable({
  providedIn: 'root'
})
export class BenificaryService {
private basepath="http://localhost:5961/api/Benificiaries";
formdata:payee=new payee();

  constructor(private http:HttpClient) { }
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  

  postData(formdata:payee){
 
    let obj:payee =new payee();
    obj.name=formdata.name;
    obj.benaccountno=formdata.benaccountno;
    obj.nickname=formdata.nickname;

     return this.http.post(this.basepath,obj).subscribe(data=>
     {
       console.log(data);
       alert("Benificary Added Successful");
     });
  }   
}
