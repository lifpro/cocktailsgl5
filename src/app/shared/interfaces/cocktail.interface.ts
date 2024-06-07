import { Ingredient } from './ingredien.interface';

export interface Cocktail {
  name: string;
  img: string;
  description?: string;
  ingredients?: Ingredient[];
}
