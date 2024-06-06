import { Ingredien } from './ingredien.interface';

export interface Cocktail {
  name: string;
  img: string;
  description?: string;
  ingrediens?: Ingredien[];
}
