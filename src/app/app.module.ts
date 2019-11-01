import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { Part5Component } from './components/part5/part5.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Part5Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
