import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/data.service";

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { InnerLoaderComponent } from './inner-loader/inner-loader.component';
import { ViewPhoneComponent } from './view-phone/view-phone.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import {BasketService} from "./_services/basket.service";
import {PhoneService} from "./_services/phone.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    DetailPageComponent,
    InnerLoaderComponent,
    ViewPhoneComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    BasketService,
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
