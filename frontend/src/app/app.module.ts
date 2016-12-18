import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosService } from './core/dinos.service';
import { LoadingComponent } from './core/ui/loading.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { DetailComponent } from './detail/detail.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    AboutComponent,
    HomeComponent,
    DetailComponent,
    Error404Component,
    ItemCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    DinosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
