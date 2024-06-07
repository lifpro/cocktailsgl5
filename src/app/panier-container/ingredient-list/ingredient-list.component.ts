import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/interfaces/ingredien.interface';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent {
  @Input() public ingredients: Ingredient[] | null = null;
}
