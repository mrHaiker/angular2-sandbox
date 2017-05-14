import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import {Recipe} from './recipe';

import 'rxjs/add/operator/toPromise';
// Service that work with recipe data

@Injectable()
export class RecipeService {
  private url: string = "https://api.mongolab.com/api/1/databases";
  private dbName: string = "recipe-book";
  private collections: string = "collections/recipes";
  private key: string = "ESLgl33hBabfeD3RHmoYmtcYoroLeSnJ";
  private apiUrl: string = 'api/recipes';

  constructor(
    private http: Http,
  ) { }

  getServerUrl(id:any = ''):string {
    return `${this.url}/${this.dbName}/${this.collections}/${id}/?apiKey=${this.key}`;
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.getServerUrl()).map(res => res.json() as Recipe[])
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get(this.getServerUrl(id)).map(res => res.json() as Recipe);
  }

  //TODO: Check this snippet
  deleteRecipe(id: number) {
    this.http.delete(this.getServerUrl(id)).map(res => res.json() as Recipe).subscribe(res => console.log(res));
  }
  //
  // editRecipe(id: number): Observable<Recipe> {
  //   return this.http.patch(this.apiUrl, id)
  //     .map(res => res.json() as Recipe)
  // }
}
