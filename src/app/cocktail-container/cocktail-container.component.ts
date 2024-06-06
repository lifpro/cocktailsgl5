import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  public selectedCocktail!: Cocktail;
  public cocktails!: Cocktail[];
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}
  //selectedCocktail = this.cocktails[0];

  ngOnInit() {
    this.subscription.add(
      this.cocktailService.cocktails.subscribe((list: Cocktail[]) => {
        this.cocktails = list;
      })
    );

    this.subscription.add(
      this.cocktailService.selectedCocktail.subscribe((c: Cocktail) => {
        this.selectedCocktail = c;
      })
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  // public selectCocktail(index: number) {
  //   this.cocktailService.selectCocktail(index);
  // }
  updateCocktail(i: any) {
    this.selectedCocktail = this.cocktails[i];
  }
}
