import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app.component';
import { ListSideComponent } from './components/list-side/list-side.component';
import { AddComponent } from './components/add/add.component';
import { ElementComponent } from './components/list-side/element/element.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavigationComponent } from './components/detail/navigation/navigation.component';
import {RecipeService} from './shared/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    ListSideComponent,
    AddComponent,
    ElementComponent,
    DetailComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
