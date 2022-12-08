import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
