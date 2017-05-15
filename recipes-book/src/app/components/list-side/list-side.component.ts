import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../shared/recipe.service';
import {Recipe} from '../../shared/recipe';
import {Router} from "@angular/router";

@Component({
  selector: 'list-side',
  templateUrl: './list-side.component.html',
  styleUrls: ['./list-side.component.scss']
})
export class ListSideComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRecipes();
    this.catchRefreshEvent();
  }

  catchRefreshEvent() {
    this.recipeService.needUpdateAllData().subscribe(() => {
      this.router.navigate(['/']).then(() => {
        this.getRecipes();
      })
    })
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(res => this.recipes = res);
  }
}
