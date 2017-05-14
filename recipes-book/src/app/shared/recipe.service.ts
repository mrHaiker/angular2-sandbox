import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import {Recipe} from './recipe';

// Service that work with recipe data

@Injectable()
export class RecipeService {
  private apiUrl = 'api/recipes';

  constructor(
    private http: Http,
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data as Recipe[]);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .map(res => res.json().data as Recipe)
  }

}
