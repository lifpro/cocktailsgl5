import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';

import { APP_ROUTES } from './app.routes';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { HeaderComponent } from './header/header.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { ColorDirective } from './shared/directives/color.directive';
import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    ColorDirective,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
