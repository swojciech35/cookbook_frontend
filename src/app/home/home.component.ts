import {Component} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipes: any[] = [];
  isLoading = true

  constructor(private recipeService: RecipeService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.recipeService
      .getAllRecipes()
      .subscribe(result => {
        if (result.status == 200) {
          this.isLoading = false;
          this.recipes = result.body
        } else {
          this.toastr.error("Wystąpił błąd podczas pobierania danych")
        }
      }, error => {
        console.error('Wystąpił błąd podczas pobierania danych: ', error.message);
        this.toastr.error("Wystąpił błąd podczas pobierania danych")
        this.ngOnInit()
      })
  }
}
