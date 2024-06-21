import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {NewRecipeComponent} from './new-recipe/new-recipe.component';
import {RouterModule} from "@angular/router";
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RecipePreviewComponent} from './recipe-preview/recipe-preview.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterTitlePipe } from './filter-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewRecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    SignupComponent,
    SigninComponent,
    RecipePreviewComponent,
    EditRecipeComponent,
    ShopListComponent,
    SearchBarComponent,
    FilterTitlePipe,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "add-recipe", component: NewRecipeComponent},
      {path: "recipe/:id", component: RecipeDetailsComponent},
      {path: "signup", component: SignupComponent},
      {path: "signin", component: SigninComponent},
      {path: '**', redirectTo: '/home', pathMatch: "full"},
    ]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
