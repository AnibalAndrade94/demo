import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { RevealOnViewDirective } from '../../directives/reveal-on-view.directive';

type Property = {
  image: string; title: string; meta: string;
  priceLabel: string; priceValue: number;
  location: 'Centro'|'Zona Hotelera'|'Playa'|'Residencial';
  kind: 'Recamaras'|'Acabados'|'Mesas';
};

@Component({
  selector: 'app-property-grid',
  standalone: true,
  imports: [NgFor, FormsModule, PropertyCardComponent, RevealOnViewDirective],
  templateUrl: './property-grid.component.html',
})
export class PropertyGridComponent {
  properties: Property[] = [
    { image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      title: 'Recamara lujosa', meta: 'información extra', priceLabel: '$3.9 M', priceValue: 3900000,
      location: 'Centro', kind: 'Recamaras' },
    { image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
      title: 'Acamado moderno', meta: 'imformación extra', priceLabel: '$5.6 M', priceValue: 5600000,
      location: 'Residencial', kind: 'Acabados' },
    { image: 'https://images.unsplash.com/photo-1505692794403-34d4982d7d94?q=80&w=1600&auto=format&fit=crop',
      title: 'Penthouse vista panorámica', meta: 'información extra', priceLabel: '$7.2 M', priceValue: 7200000,
      location: 'Zona Hotelera', kind: 'Mesas' },
  ];

  sort: 'none'|'asc'|'desc' = 'none';
  location: 'Todos'|Property['location'] = 'Todos';
  kind: 'Todos'|Property['kind'] = 'Todos';

  get filtered(): Property[] {
    let list = [...this.properties];
    if (this.location !== 'Todos') list = list.filter(p => p.location === this.location);
    if (this.kind !== 'Todos') list = list.filter(p => p.kind === this.kind);
    if (this.sort === 'asc') list.sort((a,b)=>a.priceValue-b.priceValue);
    else if (this.sort === 'desc') list.sort((a,b)=>b.priceValue-a.priceValue);
    return list;
  }
}
