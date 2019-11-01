import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { Part5Component } from './components/part5/part5.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Part5Component,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
