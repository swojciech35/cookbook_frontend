import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  public id: string = '';
  recipe: any = [];
  isLoading = true

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    })
    this.recipeService.getRecipe(this.id).subscribe(result => {
      if (result.status == 200) {
        this.isLoading = false;
        this.recipe = result.body
      } else {
        this.toastr.error("Wystąpił błąd podczas pobierania danych")
      }
    }, error => {
      console.error('Wystąpił błąd podczas pobierania danych: ', error.message);
      this.toastr.error("Wystąpił błąd podczas pobierania danych")
      this.ngOnInit()
    })
  }

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private toastr: ToastrService) {
  }
}
