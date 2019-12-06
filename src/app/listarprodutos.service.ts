import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {tap } from 'rxjs/operators'

import {Produtos} from "./box-lista-produtos/Produtos"

@Injectable({
  providedIn: 'root'
})
export class ListarprodutosService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }
  

  
  private readonly API = "assets/potions.json";
  
  
  constructor(private http:HttpClient) {




   }




   getProdutos(){
    return this.http.get<Produtos>(this.API).pipe(
      tap()
    );
  }
  
}
