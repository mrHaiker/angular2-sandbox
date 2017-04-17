import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../shared/recipe.service';
import {Recipe} from '../../shared/recipe';

@Component({
  selector: 'list-side',
  templateUrl: './list-side.component.html',
  styleUrls: ['./list-side.component.scss']
})
export class ListSideComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(res => this.recipes = res);
  }

}
