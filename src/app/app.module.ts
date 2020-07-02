import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import { OrdinateurDetailComponent } from './components/ordinateur-detail/ordinateur-detail.component';
import { AddOrdinateurComponent } from './components/add-ordinateur/add-ordinateur.component';
import { EditOrdinateurComponent } from './components/edit-ordinateur/edit-ordinateur.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    OrdinateurDetailComponent,
    AddOrdinateurComponent,
    EditOrdinateurComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
