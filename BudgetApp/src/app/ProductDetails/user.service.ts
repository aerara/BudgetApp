import { Injectable } from '@angular/core';
import { Details } from '../ProductDetails/Details'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = "http://localhost:3000"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Details[]> {
    return this.http.get<Details[]>(this.apiUrl + '/Product');
  }

  addProduct(Product: any): Observable<Details[]> {
    return this.http.post<Details[]>(this.apiUrl + '/Product', JSON.stringify(Product), this.httpOptions);
  }

  updateProduct(id,Product): Observable<Details[]> {
    return this.http.put<Details[]>(this.apiUrl + '/Product/'+id, JSON.stringify(Product), this.httpOptions);
  }

  getProductById(id): Observable<Details[]> {
    return this.http.get<Details[]>(this.apiUrl + '/Product/' + id);
  }

  deleteProduct(Product: any){
    return this.http.delete<Details[]>(this.apiUrl + '/Product/' + Product);
  }


}