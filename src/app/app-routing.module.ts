import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./components/detail/detail.component";
import {AddComponent} from "./components/add/add.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'recipe/:id', component: DetailComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
