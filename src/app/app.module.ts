import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home", component: HomeComponent},
      {path:"add-recipe", component: NewRecipeComponent},
      {path: '**', redirectTo: '/home', pathMatch: "full"},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
