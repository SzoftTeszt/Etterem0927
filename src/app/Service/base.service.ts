import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getEtelek(){
    return this.http.get(this.serverUrl+"etelek")
  }

  deleteEtel(id:number){
    return this.http.delete(this.serverUrl+"etelek/"+id)
  }

  updateEtel(etel:any){
    return this.http.put(this.serverUrl+"etelek/"+etel.id, etel)
  }
  
  createEtel(etel:any){
    return this.http.post(this.serverUrl+"etelek/", etel)
  }


}
