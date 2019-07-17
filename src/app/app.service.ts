import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee/employee.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public userData: Employee[] = [];

  constructor(private http: HttpClient) { }
  public getEmployeeData(): Observable<any> {
    return this.http.get('./assets/EmployeeData.json');
    
  }
}

