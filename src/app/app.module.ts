import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchedComponent } from './watched/watched.component';
import { ToWatchComponent } from './to-watch/to-watch.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RestapiService } from './restapi.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WatchedComponent,
    ToWatchComponent,
    HeaderComponent,
  FilterPipe,
  LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
