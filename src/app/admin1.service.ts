import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private basepath="http://localhost:5961/api/Admins";

  constructor(private http:HttpClient) { }
  
  public getAdmin():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
