import { Injectable } from '@angular/core';
import {​​​​​​​​​ HttpClient}​​​​​​​​​ from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisService {

  private basepath="http://localhost:59973/api/Registers";

  constructor( private http:HttpClient) { }

  public getRegisters():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
