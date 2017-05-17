import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/recipe";
import {RecipeService} from "../../shared/recipe.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipe = this.getDefaultRecipe();
  }

  addNew() {
    this.recipeService.addRecipe(this.recipe).subscribe()
  }

  clearRecipe() {
    this.recipe = this.getDefaultRecipe();
  }

  getDefaultRecipe(): Recipe {
    return new Recipe('//woman365.ru/wp-content/uploads/2015/07/yaichnica-boltunya-boltunya-na-tarelke.jpg', '', '')
  }
}
