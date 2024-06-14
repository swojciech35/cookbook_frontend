import {Injectable} from '@angular/core';
import {map} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'https://cookbookapiw71257w71209.azurewebsites.net/api';

  constructor(private http: HttpClient) {
  }

  getAllRecipes() {
    return this.http.get(this.url + '/recipe', {observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      }))
  }

  getRecipe(id: any) {
    return this.http.get(this.url + `/recipe/${id}`, {observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      }))
  }

  addRecipe(recipeData: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("cookbookToken")}`
    });
    console.log(recipeData)
    return this.http.post(this.url + '/recipe', recipeData, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }
}
