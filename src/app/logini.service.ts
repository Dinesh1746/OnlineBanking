import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginiService {
  private basepath="http://localhost:60340/api/Registers";

  constructor(private http:HttpClient) { }
  
  public getLogin():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
