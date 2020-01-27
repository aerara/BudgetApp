import { Injectable } from '@angular/core';
import { Details } from '../ProductDetails/Details'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  viewData(id){
    return this.http.get(`${id}`)
  }
}