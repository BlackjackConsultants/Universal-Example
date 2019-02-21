import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';

const config = {
  apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
  authDomain: 'fireship-lessons.firebaseapp.com',
  databaseURL: 'https://fireship-lessons.firebaseio.com',
  projectId: 'fireship-lessons',
  storageBucket: 'fireship-lessons.appspot.com',
  messagingSenderId: '758773997881'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
