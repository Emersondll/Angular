import { Component, OnInit, Injectable } from '@angular/core';

import { Login, Marca, Produto } from '../model/model';
import { LoginService } from './login.service';
import { NgForm } from '../../../node_modules/@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`
  .ng-valid[required] {
      border: 2px solid blue;
  }
  .ng-invalid:not(form) {
      border: 2px solid red;
  }
`]
})


export class LoginComponent implements OnInit {

  private logins: Login;
  private loginsN: Login;
  
  listaLogin: any;
  
 

  onSubmit(form: NgForm) {
    console.log(form);
    this.logins = new Login();
    this.logins.nome = form.value.acesso;
    this.logins.senha = form.value.senha;
    this.loginService.efetivarInsert(this.logins);
    form.reset();
  }

  onDelete(form: NgForm) {
    console.log(form);
    this.logins = new Login();
    this.logins.nome = form.value.acesso;
    this.logins.senha = form.value.senha;
    this.loginService.efetivarDelete(this.logins);
    form.reset();
  }


  onEdit(form: NgForm) {
    console.log(form);
    this.logins = new Login();
    this.loginsN = new Login();

    this.logins.nome = form.value.acesso;
    this.logins.senha = form.value.senha;
    this.loginsN.nome = form.value.acessoN;
    this.loginsN.senha = form.value.senhaN;

    this.loginService.efetivarEdit(this.logins, this.loginsN);
    form.reset();
  }

  onListar() {
  
  this.loginService.efetivarListar().subscribe(res => {
    this.listaLogin = res.json();
  })
  console.log(this.loginService.efetivarListar());
  console.log( this.listaLogin);
    
  }

  constructor(private loginService: LoginService) { }
  ngOnInit() { }

}
