import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {RecipeService} from "../recipe.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  recipeForm: FormGroup;
  isImageModalOpen: boolean = false;
  units: string[] = ['szt', 'kg', 'g', 'ml', 'l'];
  isLoading: boolean = false

  constructor(private fb: FormBuilder, private toastr: ToastrService, public recipeService: RecipeService, private router: Router) {
    this.recipeForm = this.fb.group({
      pictureUrl: [''],
      title: [''],
      description: [''],
      ingredients: this.fb.array([
        this.fb.group({
          unit: [this.units[0]],
          name: [''],
          amount: []
        })
      ]),
      steps: this.fb.array([
        this.fb.group({
          number: [1],
          step: ['']
        })
      ])
    });
  }


  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredient(): void {
    const ingredientGroup = this.fb.group({
      unit: [this.units[0]],
      name: [''],
      amount: ['']
    });
    this.ingredients.push(ingredientGroup);
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  addStep(): void {
    const stepGroup = this.fb.group({
      number: [this.steps.length + 1],
      step: ['']
    });
    this.steps.push(stepGroup);
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
    for (let i = index; i < this.steps.length; i++) {
      this.steps.at(i).get('number')?.setValue(i + 1);
    }
  }

  openPreviewModal(): void {
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }

  onSubmit(): void {
    this.isLoading = true
    this.recipeService.addRecipe(this.recipeForm.value).subscribe(result => {
      if (result.status == 200) {
        this.isLoading = false;
        this.toastr.success('Dodano przepis')
        this.router.navigate([`/recipe/${result.body.id}`])

      } else {
        this.isLoading = false;
        this.toastr.error("Wystąpił błąd podczas dodawania przepisu")
      }
    }, error => {
      this.isLoading = false;
      console.error('Błąd podczas rejestracji: ', error.message);
      this.toastr.error("Wystąpił błąd podczas dodawania przepisu")
    })
  }

  invalidFormToast() {
    this.recipeForm.markAllAsTouched();
    this.toastr.error("Popraw błędy w formularzu")
  }
}
