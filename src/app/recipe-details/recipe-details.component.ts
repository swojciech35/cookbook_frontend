import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  public id: string = '';
  recipe: any = [];
  isLoading = true
  canMenage = false
  isModalDeleteOpen: any = false;
  isModalEditOpen: any = false;
  isLoadingCanManage = true;

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
    this.authService.isLoggedIn() ? (
        this.recipeService.canManageRecipe(this.id).subscribe((result: any) => {
          this.isLoadingCanManage = false;
          this.canMenage = result.body
        }, (error: any) => {
          this.setManageFalse()
        }))
      : this.setManageFalse()

  }

  constructor(private recipeService: RecipeService, private authService: AuthService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
  }

  setManageFalse() {
    this.isLoadingCanManage = false
    this.canMenage = false
  }

  closeDeleteModal() {
    this.isModalDeleteOpen = false
  }

  openDeleteModal() {
    this.isModalDeleteOpen = true
  }

  deleteRecipe() {
    this.isLoading = true
    this.recipeService.deleteRecipe(this.id).subscribe((result: any) => {
        if (result.status == 200) {
          this.isLoading = false
          this.toastr.success("Usunięto przepis")
          this.router.navigate([`/home`])
        } else {
          this.toastr.error("Wystąpił błąd podczas usuwania przepisu")
        }
      }, error => {
        console.error('Wystąpił błąd podczas usuwania przepisu: ');
        this.toastr.error("Wystąpił błąd podczas usuwania przepisu")
      }
    )
  }

  closeEditModal() {
    this.isModalEditOpen = false;
  }

  openEditModal() {
    this.isModalEditOpen = true;
  }
}
