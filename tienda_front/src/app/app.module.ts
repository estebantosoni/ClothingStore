import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DressComponent } from './dress/dress.component';
import { UserComponent } from './user/user.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { InterfaceComponent } from './interface/interface.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UsComponent } from './us/us.component';
import { HelpComponent } from './help/help.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AbmComponent } from './abm/abm.component';
import { MiniPopiComponent } from './mini-popi/mini-popi.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    UserComponent,
    DressComponent,
    FragranceComponent,
    PageNotFoundComponent,
    UsComponent,
    HelpComponent,
    DetailsComponent,
    UserDialogComponent,
    AbmComponent,
    MiniPopiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [ /*                              
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
