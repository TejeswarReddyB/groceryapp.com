import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor( private http :HttpClient) { }

  postRegister(data:any): Observable <any>{

   return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/register',data);
  }
  postLogin(data:any): Observable <any>{

    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/login',data);
   }

   getCategory() : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/category')


  }
  getSubcategory(id:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/subcategory/'+id)
  }

  getProducts(id:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/cat/'+id)
  }
  getProductsSubcategory(ab:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/sub/'+ab)
  }
  getProductDetail(id:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/'+id)
  }
   checkToken(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
  
}
