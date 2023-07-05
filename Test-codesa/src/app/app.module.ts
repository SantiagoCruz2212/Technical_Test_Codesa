import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './Components/Home/Home.component'; 
import { LoginComponent } from './Components/login/login.component'; 
import { UserListComponentComponent } from './Components/UserListComponent/UserListComponent.component';
import { UserFormComponentComponent } from './Components/UserFormComponent/UserFormComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent, 
    UserListComponentComponent,
    UserFormComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
