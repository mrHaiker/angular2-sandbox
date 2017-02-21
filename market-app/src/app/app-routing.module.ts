import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailPageComponent} from "./detail-page/detail-page.component";
import {ViewPhoneComponent} from "./view-phone/view-phone.component";

const routes: Routes = [
  { path: '', redirectTo: '/detail/samsung', pathMatch: 'full' },
  { path: 'detail/:elem', component: DetailPageComponent },
  { path: 'detail/:elem/view/:model', component: ViewPhoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
