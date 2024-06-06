import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input()
  cocktails: Cocktail[] = [];
  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();

  setCocktail(index: number) {
    this.changeCocktail.emit(index);
  }
}
