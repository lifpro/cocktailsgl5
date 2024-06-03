import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cocktailsgl5';
  bissap: any = {
    name: 'Bissap',
    img: 'https://i0.wp.com/cuisinovores.com/wp-content/uploads/2022/05/photo_bissap_boisson_hibiscus_cuisinovores.jpg?fit=400%2C400&ssl=1',
    description:
      "Le bissap est une boisson traditionnelle très populaire en Afrique de l'Ouest, notamment au Sénégal, au Mali, en Guinée et au Burkina Faso. Elle est préparée à partir des fleurs séchées de l'hibiscus sabdariffa, une plante également connue sous le nom de roselle.",
  };
}
