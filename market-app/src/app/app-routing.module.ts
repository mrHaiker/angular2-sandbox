import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailPageComponent} from "./detail-page/detail-page.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'detail/:elem', component: DetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
