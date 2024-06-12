import {Component} from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipes: any[] = [];


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this
      .recipeService
      .getAllRecipes()
      .subscribe({
        next: recipes => this.recipes = recipes
      })
  }
}
