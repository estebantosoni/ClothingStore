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
import { HttpClientModule } from '@angular/common/http';
import { UsComponent } from './us/us.component';
import { HelpComponent } from './help/help.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AbmComponent } from './abm/abm.component';
import { MiniPopiComponent } from './mini-popi/mini-popi.component';
import {MatSelectModule} from '@angular/material/select';

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
    MatButtonModule,
    MatSelectModule
  ],
  providers: [                                    
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
