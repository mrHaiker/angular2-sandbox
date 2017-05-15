import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../shared/recipe";
import {RecipeService} from "../shared/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
}
