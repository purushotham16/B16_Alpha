import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {
readonly baseUrl :string = 'https://bookcart.azurewebsites.net/api/Order/';

bookId:any;
  constructor(private http: HttpClient) { }

  myOrderDetails(userId:any):Observable<any>{
    return this.http.get<number>(this.baseUrl + userId);
  }
}
