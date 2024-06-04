import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Bissap',
      img: 'https://i0.wp.com/cuisinovores.com/wp-content/uploads/2022/05/photo_bissap_boisson_hibiscus_cuisinovores.jpg?fit=400%2C400&ssl=1',
      description:
        "Le bissap est une boisson traditionnelle très populaire en Afrique de l'Ouest, notamment au Sénégal, au Mali, en Guinée et au Burkina Faso. Elle est préparée à partir des fleurs séchées de l'hibiscus sabdariffa, une plante également connue sous le nom de roselle.",
    },
    {
      name: 'Gingembre',
      img: 'https://villamaasai.fr/wp-content/uploads/2020/04/histoire-recette-gnamankoudji.jpg',
      description:
        "Le gingembre (Zingiber officinale) est une plante tropicale appartenant à la famille des Zingibéracées, dont le rhizome est couramment utilisé comme épice et remède naturel. Originaire d'Asie du Sud-Est, le gingembre est cultivé dans de nombreuses régions chaudes du monde, notamment en Inde, en Chine et en Afrique.",
    },
    {
      name: 'Tomi',
      img: 'https://www.newstoriesafrica.com/wp-content/uploads/2022/12/jus-de-tamarin.png',
      description:
        "Le tamarin (Tamarindus indica) est un arbre tropical originaire d'Afrique de l'Est, mais largement cultivé dans les régions tropicales et subtropicales du monde, notamment en Inde, en Asie du Sud-Est et en Amérique latine. L'arbre produit des gousses comestibles qui sont prisées pour leur pulpe aigre-douce.",
    },
  ];
  cocktail: Cocktail = {
    name: 'Bissap',
    img: 'https://i0.wp.com/cuisinovores.com/wp-content/uploads/2022/05/photo_bissap_boisson_hibiscus_cuisinovores.jpg?fit=400%2C400&ssl=1',
    description:
      "Le bissap est une boisson traditionnelle très populaire en Afrique de l'Ouest, notamment au Sénégal, au Mali, en Guinée et au Burkina Faso. Elle est préparée à partir des fleurs séchées de l'hibiscus sabdariffa, une plante également connue sous le nom de roselle.",
  };
}
