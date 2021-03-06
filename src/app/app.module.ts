import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { Part5Component } from './components/part5/part5.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilmsComponent } from './components/films/films.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Part5Component,
    LoginComponent,
    FormComponent,
    MyDirectiveDirective,
    PaginatePipe,
    FilmsComponent,
    UppercasePipe,
    SortPipe,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
