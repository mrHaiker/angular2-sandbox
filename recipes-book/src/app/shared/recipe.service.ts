import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import {Recipe} from './recipe';

import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
// Service that work with recipe data

@Injectable()
export class RecipeService {
  private url: string = "https://api.mongolab.com/api/1/databases";
  private dbName: string = "recipe-book";
  private collections: string = "collections/recipes";
  private key: string = "ESLgl33hBabfeD3RHmoYmtcYoroLeSnJ";
  private apiUrl: string = 'api/recipes';

  collectionsLength: number;
  updateRecipes: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: Http,
    private router: Router
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

  deleteRecipe(id: number): Observable<Recipe> {
    // TODO: don`t work remove action
    return this.http.delete(this.getServerUrl(id)).map(res => {
      console.log('delete');
      this.updateRecipes.emit(true);
      return res.json() as Recipe
    })
  }

  addRecipe(data: Recipe): Observable<Recipe> {
    data._id = this.getRandomId();
    return this.http.post(this.getServerUrl(), data).map(res => {
      this.updateRecipes.emit(true);
      return res.json() as Recipe;
    })
  }

  getRandomId():number {
    return Number((Math.random()*1000).toFixed(0));
  }

  needUpdateAllData() {
    return this.updateRecipes;
  }

  //
  // editRecipe(id: number): Observable<Recipe> {
  //   return this.http.patch(this.apiUrl, id)
  //     .map(res => res.json() as Recipe)
  // }
}
