import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuCollapsed: boolean = true;
  isShowShopListModal: any = false;
  shopListIds: any = []
  shopList: any
  isLoading = false

  constructor(public authService: AuthService, private toastr: ToastrService, private recipeService: RecipeService) {
  }

  signOutToaaster() {
    this.toastr.success("Wylogowano")
  }


  closeShopListModal() {
    this.isShowShopListModal = false
  }

  openShopListModal() {
    this.shopListIds = JSON.parse(sessionStorage.getItem('selectedRecipes') || '[]');
    if (this.shopListIds.length > 0) {
      this.isLoading = true
      this.recipeService.getShopList(this.shopListIds)
        .subscribe((result: any) => {
          if (result.status == 200) {
            this.shopList = result.body
            this.isLoading = false
            this.isShowShopListModal = true
          } else {
            this.toastr.error("Wystąpił błąd podczas pobierania danych")
          }
        }, error => {
          console.error('Wystąpił błąd podczas pobierania danych: ', error.message);
          this.toastr.error("Wystąpił błąd podczas pobierania danych")
        })
    } else {
      this.toastr.info("Aby zobaczyć listę zakupów zaznacz przepisy na stronie głównej ")
    }
    this.isMenuCollapsed = true;
  }
}
