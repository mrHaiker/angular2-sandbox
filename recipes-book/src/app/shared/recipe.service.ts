import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
  private url: string = "https://api.mongolab.com/api/1/databases";
  private dbName: string = "recipe-book";
  private collections: string = "collections/recipes";
  private key: string = "ESLgl33hBabfeD3RHmoYmtcYoroLeSnJ";
  private apiUrl: string = 'api/recipes';

  updateRecipes: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: Http
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
    return this.http.delete(this.getServerUrl(id)).map(res => {
      this.updateRecipes.emit(true);
      return res.json() as Recipe
    })
  }

  addRecipe(data: Recipe, id?:number): Observable<Recipe> {
    if (!id) data._id = this.getRandomId();
    else data._id = Number(id);
    return this.http.post(this.getServerUrl(), data).map(res => {
      this.updateRecipes.emit(true);
      return res.json() as Recipe;
    })
  }

  private getRandomId(): number {
    return Number((Math.random()*1000).toFixed(0));
  }

  needUpdateAllData() {
    return this.updateRecipes;
  }

  editRecipe(data: Recipe, id: number): Observable<Recipe> {
    return this.http.patch(this.getServerUrl(), data).map(res => {
      this.updateRecipes.emit(true);
      return res.json() as Recipe
    })
  }
}
