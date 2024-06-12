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

  getRecipe(id:any){
    console.log(id)
    return of(
      {
        "id": "66647f3bbe47922705dcdfea",
        "authorId": "123",
        "authorName":"Author name",
        "pictureUrl": "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/trufle-czekoladowe-01.jpg",
        "description": "Łatwe do zrobienia, dekadenckie czekoladowe trufle, idealne na każdą okazję.",
        "title": "Czekoladowe Trufle",
        "ingredients": [
          {
            "unit": "G",
            "name": "gorzka czekolada",
            "amount": 200
          },
          {
            "unit": "L",
            "name": "śmietanka kremówka",
            "amount": 0.1
          },
          {
            "unit": "G",
            "name": "masło",
            "amount": 50
          },
          {
            "unit": "G",
            "name": "kakao",
            "amount": 20
          },
          {
            "unit": "G",
            "name": "ekstrakt waniliowy",
            "amount": 5
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Rozpuść czekoladę z masłem w kąpieli wodnej, mieszając do uzyskania gładkiej konsystencji."
          },
          {
            "number": 2,
            "step": "W rondelku podgrzej śmietankę kremówkę, ale nie doprowadzaj do wrzenia."
          },
          {
            "number": 3,
            "step": "Wlej ciepłą śmietankę do roztopionej czekolady, dodaj ekstrakt waniliowy i dokładnie wymieszaj."
          },
          {
            "number": 4,
            "step": "Schłodź masę w lodówce przez około 2 godziny, aż stwardnieje."
          },
          {
            "number": 5,
            "step": "Formuj z masy małe kulki, obtocz je w kakao i przechowuj w lodówce do podania."
          }
        ]
      }
    )
  }

  constructor() {
  }
}
