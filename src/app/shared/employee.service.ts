import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  formData  : Employee;
  list : Employee[];

  readonly rootURL = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  // insert
  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL, formData);
  }
  // end insert
  //list show
    refreshList(){
      this.http.get(this.rootURL).toPromise().then(res => this.list = res as Employee[]);
    }
  // end list show
  // update
  putEmployee(formData: Employee) {
    return this.http.put(this.rootURL+"/"+formData.id, formData,{headers: this.headers});
  }
    // delete 
    deleteEmplyee(id: number){
      return this.http.delete(this.rootURL+"/"+id,{headers: this.headers});
    }
}
