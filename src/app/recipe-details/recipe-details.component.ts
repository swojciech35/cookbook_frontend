import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{
  public id: string = '';
  recipe:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      this.recipeService.getRecipe(this.id).subscribe({
        next: (recipe: any) => {
          this.recipe = recipe;
        },
        error: (error: any) => {
          console.error('Error fetching recipe:', error);
        }
      });
    });
    console.log(this.recipe)
  }


  constructor(private recipeService: RecipeService,private route: ActivatedRoute) {
  }
}
