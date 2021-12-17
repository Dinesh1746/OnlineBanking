import { Injectable } from '@angular/core';
import {​​​​​​​​​ HttpClient}​​​​​​​​​ from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public basepath="http://localhost:59973/api/Accounts";


  constructor(private http:HttpClient) { }

  public getaccount():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
