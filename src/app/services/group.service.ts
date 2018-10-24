import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:8081/inventory/group/viewall");
  }

  getID(id: any) {
    return this.http.get("http://localhost:8081/inventory/group/view" + id);
  }

  updateDeviceGroup(id: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:8081/inventory/group/update" + id);
    console.log(url);
    console.log(data);
    return this.http.put(url, data, httpOptions);
  }

  postDeviceGroup(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:8081/inventory/group/create";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  deleteDeviceGroup(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:8081/inventory/group/delete" + id);
    console.log(url);
    return this.http.delete(url, httpOptions);
	} 
  
}
