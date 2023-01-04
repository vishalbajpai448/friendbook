import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  startPoint=environment.startPoint;
  constructor(private http:HttpClient) { }
  
  registration(data:any)
  {
    return this.http.post(this.startPoint+"users/register",data);
  }

  userLogin(data:any)
  {
    // if(data.email=="abc@test.com"&&data.password=="1234")
    // {
    //   return true;
    // }
    // else
    // {
    //   return false;
    // }
     return this.http.post<any>("http://3.17.216.66:3000/users/authenticate",{email: data.email, password: data.password});
  }                     
  

  header():any {
    let userData:any = localStorage.getItem('userData');
    if(userData && userData.token) {
      let headers = new HttpHeaders({
       ' Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token}`
      }); // create header object
      // headers.append()
      let httpOptions = {
        headers: headers
      }
      return httpOptions;
    }
  }

  GET(endPoint: any) {
    return  this.http.get(this.startPoint + endPoint, this.header()) 
  }

  POST(endPoint:any, data:any) {
    return this.http.post(this.startPoint + endPoint,data,this.header());

  }

  DELETE(endPoint:any) {
    return this.http.delete(this.startPoint + endPoint, this.header()) ;
  }

  UPDATE(endPoint:any, data:any) {
    return this.http.put(this.startPoint  + endPoint, data,this.header());
  }
}
