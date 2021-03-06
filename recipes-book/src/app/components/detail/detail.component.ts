import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../shared/recipe.service";
import {Recipe} from "../../shared/recipe";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  _id: number;
  recipe: Recipe;
  load: boolean;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.load = true;
      this._id = params['id'];
      this.getDataById(this._id);
    })
  }

  getDataById(id:number):void {
    this.recipeService.getRecipe(id).subscribe(res => {
      this.load = false;
      this.recipe = res;
    });
  }

  saveEdit():void {
    this.recipeService.addRecipe(this.recipe, this._id).subscribe();
  }

  onDelete() {
    this.recipeService.deleteRecipe(this._id).subscribe();
  }

}
