import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndumentariaComponent } from './indumentaria/indumentaria.component';
import { UserComponent } from './user/user.component';
import { FraganciaComponent } from './fragancia/fragancia.component';

@NgModule({
  declarations: [
    AppComponent,
    IndumentariaComponent,
    UserComponent,
    FraganciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
