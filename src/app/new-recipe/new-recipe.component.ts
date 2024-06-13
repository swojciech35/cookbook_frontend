import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  recipeForm: FormGroup;
  picturePreview: string | ArrayBuffer | null = '';
  isImageModalOpen: boolean = false;

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      authorId: [''],
      pictureUrl: [''],
      title: [''],
      description: [''],
      ingredients: this.fb.array([
        this.fb.group({
          unit: [''],
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
      unit: [''],
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

  updatePicturePreview(): void {
    const pictureUrl = this.recipeForm.get('pictureUrl')?.value;
    this.picturePreview = pictureUrl;
  }

  openPreviewModal(): void {
    this.isImageModalOpen = true;
  }

  closeImageModal(): void {
    this.isImageModalOpen = false;
  }

  onSubmit(): void {
    console.log(this.recipeForm.value);
    // Tutaj można wysłać dane formularza do endpointu
  }
}
