import { Injectable } from '@angular/core';
import {​​​​​​​​​ HttpClient}​​​​​​​​​ from '@angular/common/http';
import { Observable} from 'rxjs';
import { register } from './register/register.models';
@Injectable({
  providedIn: 'root'
})
export class RegisService {

  public basepath="http://localhost:59973/api/Registers";

  formData:register=new register();


  constructor( private http:HttpClient) { }

  public getRegisters():Observable<any>
  {
    return this.http.get(this.basepath);
  }
  

  addResisterData()
  {
    return this.http.post(this.basepath,this.formData);
  }


}
