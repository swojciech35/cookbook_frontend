import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getAllRecipes() {
    return of([{
      id: "66647f3bbe47922705dcdfea",
      authorName: "author name",
      pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
      title: "Czekoladowe Trufle",
      numberOfSteps: 5,
      numberOfIngredients: 5
    },
      {
        id: "66647f3dbe47922705dcdfeb",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle",
        numberOfSteps: 5,
        numberOfIngredients: 5
      },
      {
        id: "666481d2f1893e49d1db2557",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle v2",
        numberOfSteps: 5,
        numberOfIngredients: 5
      }, {
        id: "66647f3dbe47922705dcdfeb",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle",
        numberOfSteps: 5,
        numberOfIngredients: 5
      },
      {
        id: "666481d2f1893e49d1db2557",
        authorName: "author name",
        pictureUrl: "https://jambox.pl/blog/wp-content/uploads/2019/09/zaba.jpg",
        title: "Czekoladowe Trufle v2",
        numberOfSteps: 5,
        numberOfIngredients: 5
      }, {
        id: "66647f3dbe47922705dcdfeb",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle",
        numberOfSteps: 5,
        numberOfIngredients: 5
      },
      {
        id: "666481d2f1893e49d1db2557",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle v2",
        numberOfSteps: 5,
        numberOfIngredients: 5
      },
      {
        id: "6665881ee0d09f6a322f064f",
        authorName: "author name",
        pictureUrl: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        title: "Czekoladowe Trufle",
        numberOfSteps: 5,
        numberOfIngredients: 5
      }])
  }

  constructor() {
  }
}
