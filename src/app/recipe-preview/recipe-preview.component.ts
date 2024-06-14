import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrl: './recipe-preview.component.css'
})
export class RecipePreviewComponent {
  @Input() picture: any
  @Input() title: any;
  @Input() description: any;
  @Input() ingredients: any;
  @Input() steps?: any;
}
