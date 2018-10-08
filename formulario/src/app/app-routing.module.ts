import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFormComponent } from './data-form/data-form.component';
import {TemplateFormComponent} from  './template-form/template-form.component';
import {LoginComponent} from  './login/login.component';

const routes: Routes = [
  {path: 'templateForm', component: TemplateFormComponent},
  {path: 'dataForm', component: DataFormComponent},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo:'templateForm'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
