import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private user:HttpClient) { }
  getData(){
    return this.user.get("https://jsonplaceholder.typicode.com/users")
  }
}
