import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  onLogin(obj: LoginModel): Observable<any> {
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login", obj);
  }
}
