import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    TemplateFormComponent,
    LoginComponent
  ],
  imports: [MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatTabsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
