import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  getBasic() {
    return this.http.get(`${this.uri}/getbasic`);
  }

  getBasicById(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  addBacis(Name: any,Host: any,Catogery: any,Version: any) {
    const Basic = {
      Name:Name,
      Host:Host,
      Catogery: Catogery,
      Version: Version,
    };
    return this.http.post(`${this.uri}/addBasic`, Basic);
  }
  updateBasic(id: any,Name: any,Host: any,Catogery: any,Version: any) {
    const Basic = {
      Name:Name,
      Host:Host,
      Catogery: Catogery,
      Version: Version,
    };
    return this.http.post(`${this.uri}/update/${id}`, Basic);
  }
  deleteBasic(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
  getDetails(host){
    const body = {
      host:host
  }
    return this.http.post(`${this.uri}/getdetails`,body)
}
gvpg(uName,password,url){
  
  const body = {
    username:uName,
    password:password
}
  
  return this.http.post(`${url}`,body)
}
gvcs(ck:any, cs:any ,url:any,grantType:any){
  console.log("BODY IS:",cs,ck,url)
  const body = {
    ck:ck,
    cs:cs,
    grantType:grantType
}
  return this.http.post(`${url}`,body)
}




}
