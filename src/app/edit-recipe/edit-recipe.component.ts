import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  @Input() recipe: any;

  recipeForm: FormGroup;
  units: string[] = ['szt', 'kg', 'g', 'ml', 'l'];
  public isLoading: boolean = false;

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private toastr: ToastrService, private router: Router) {
    this.recipeForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.fb.group({
      pictureUrl: [this.recipe.pictureUrl || ''],
      title: [this.recipe.title || ''],
      description: [this.recipe.description || ''],
      ingredients: this.fb.array([]),
      steps: this.fb.array([])
    });

    if (this.recipe.ingredients) {
      this.recipe.ingredients.forEach((ingredient: any) => {
        this.addIngredient(ingredient);
      });
    }

    if (this.recipe.steps) {
      this.recipe.steps.forEach((step: any) => {
        this.addStep(step);
      });
    }
  }

  addStepFromBtn(): void {
    const stepGroup = this.fb.group({
      number: [this.steps.length + 1],
      step: ['']
    });
    this.steps.push(stepGroup);
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient(ingredient: any): void {
    const ingredientGroup = this.fb.group({
      unit: [ingredient.unit || ''],
      name: [ingredient.name || ''],
      amount: [ingredient.amount || '']
    });
    this.ingredients.push(ingredientGroup);
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredientFromBtn(): void {
    const ingredientGroup = this.fb.group({
      unit: [this.units[0]],
      name: [''],
      amount: ['']
    });
    this.ingredients.push(ingredientGroup);
  }

  addStep(step: any): void {
    const stepGroup = this.fb.group({
      number: [step.number || this.steps.length + 1],
      step: [step.step || '']
    });
    this.steps.push(stepGroup);
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
    for (let i = index; i < this.steps.length; i++) {
      this.steps.at(i).get('number')?.setValue(i + 1);
    }
  }

  onSubmit(): void {
    this.isLoading = true
    const data = {
      id: this.recipe.id,
      authorId: this.recipe.authorId,
      authorName: this.recipe.authorName,
      pictureUrl: this.recipeForm.value.pictureUrl,
      description: this.recipeForm.value.description,
      title: this.recipeForm.value.title,
      ingredients: this.recipeForm.value.ingredients,
      steps: this.recipeForm.value.steps
    }

    this.recipeService.editRecipe(data).subscribe((result: any) => {
      if (result.status == 200) {
        this.isLoading = false
        this.toastr.success("Edycja przebiegła pomyslnie")
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

    }, error => {
      this.toastr.error("Wystąpił błąd podczas edycji")
      this.isLoading = false
    })
  }

  invalidFormToast() {
    this.recipeForm.markAllAsTouched();
    this.toastr.error("Popraw błędy w formularzu");
  }
}
