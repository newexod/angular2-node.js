import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutAuthorComponent } from './about-author/about-author.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    MainPageComponent,
    AboutAuthorComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
