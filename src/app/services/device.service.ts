import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  //Remove Observable<any[]> After API is implemented
  getAll(){
    return this.http.get("http://localhost:8081/inventory/device/viewall");
  }

  getID(id: any) {
    return this.http.get("http://localhost:8081/inventory/device/view" + id);
  }

  updateDevice(id: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:8081/inventory/device/update" + id);
    console.log(url);
    console.log(data);
    return this.http.put(url, data, httpOptions);
  }

  postDevice(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url = "http://localhost:8081/inventory/device/create";
    console.log(data);
    return this.http.post(url, data, httpOptions);
  }

  deleteDevice(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var url: string = ("http://localhost:8081/inventory/device/delete" + id);
    console.log(url);
    return this.http.delete(url, httpOptions);
	}
}
