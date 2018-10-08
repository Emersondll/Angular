import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Login } from '../model/model';


@Injectable()
export class LoginService {


  private baseUrl: any;
  private body: any;
  private retorno: any;



  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:9090/WsLogin/';
  }

  efetivarInsert(logins: Login) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.body = `{"nome": "` + logins.nome + `", "senha": "` + logins.senha + `" }`;
    var json = JSON.stringify(this.body);

    return this.http.post(this.baseUrl + 'login/inserir', this.body, { headers })
      .subscribe(data => json, error => alert(error),
        () => alert("Sucesso de Inserção"))
  }

  efetivarDelete(logins: Login) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.body = `{"nome": "` + logins.nome + `", "senha": "` + logins.senha + `" }`;
    var json = JSON.stringify(this.body);

    return this.http.post(this.baseUrl + 'login/remover', this.body, { headers })
      .subscribe(data => json, error => alert(error),
        () => alert("Sucesso de Remoção"))
  }


  efetivarEdit(logins: Login, loginsN: Login) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('login_nome', loginsN.nome);
    headers.append('login_senha', loginsN.senha);
    this.body = `{"nome": "` + logins.nome + `", "senha": "` + logins.senha + `" }`;
    var json = JSON.stringify(this.body);

    return this.http.put(this.baseUrl + 'login/atualizar', this.body, { headers })
      .subscribe(data => json, error => alert(error),
        () => alert("Sucesso de Edição"))
  }

  efetivarListar() {

   
    return this.http.get(this.baseUrl + 'login/listartodos'); 
    
  }
}
