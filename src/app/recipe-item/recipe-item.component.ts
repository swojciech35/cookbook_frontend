import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;
  isChecked: boolean = false;

  ngOnInit(): void {
    this.initializeCheckboxState();
  }

  initializeCheckboxState(): void {
    let selectedRecipes = JSON.parse(sessionStorage.getItem('selectedRecipes') || '[]');
    this.isChecked = selectedRecipes.includes(this.recipe.id);
  }

  toggleRecipeSelection(recipeId: number): void {
    let selectedRecipes = JSON.parse(sessionStorage.getItem('selectedRecipes') || '[]');
    if (selectedRecipes.includes(recipeId)) {
      selectedRecipes = selectedRecipes.filter((id: number) => id !== recipeId);
    } else {
      selectedRecipes.push(recipeId);
    }
    sessionStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
    this.isChecked = !this.isChecked;
  }
}
