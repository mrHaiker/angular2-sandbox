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
    this.recipe = new Recipe('//vlunch.ru/foto/kartoshka-otvarnaya-i-obzharennaya-v-masle-2.jpg', '', '');
  }

  addNew() {
    this.recipeService.addRecipe(this.recipe).subscribe()
  }
}
