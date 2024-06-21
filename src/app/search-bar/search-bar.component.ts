import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public filterTitle: string = '';
  @Output() filterChange = new EventEmitter<string>();

  sendFilter(): void {
    this.filterChange.emit(this.filterTitle);
  }
}
