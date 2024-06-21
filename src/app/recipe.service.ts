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
    return this.http.post(this.url + '/recipe', recipeData, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }

  canManageRecipe(id: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("cookbookToken")}`
    });
    return this.http.post(this.url + `/recipe/${id}/can-manage`, {}, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }

  deleteRecipe(id: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("cookbookToken")}`
    });
    return this.http.delete(this.url + `/recipe/${id}`, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }

  editRecipe(formData: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("cookbookToken")}`
    });
    return this.http.put(this.url + `/recipe/${formData.id}`, formData, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }

  getShopList(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("cookbookToken")}`
    });
    return this.http.post(this.url + `/recipe/shoplist`, data, {headers: headers, observe: 'response'}).pipe(
      map((result: HttpResponse<any>) => {
        return result;
      })
    );
  }
}
