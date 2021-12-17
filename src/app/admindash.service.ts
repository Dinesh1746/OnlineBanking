import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindashService {



  private basepath="http://localhost:59973/api/Admins";

  constructor(private http:HttpClient) { }
  
  public getadmindash():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
