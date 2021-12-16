import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaccService {
  private basepath="http://localhost:60340/api/Custinfoes";
  constructor(private http:HttpClient) { }
  public getAcc():Observable<any>
{
  return this.http.get(this.basepath);
}
}
