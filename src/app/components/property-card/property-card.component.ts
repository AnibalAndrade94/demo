import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styles: [
  ]
})
export class PropertyCardComponent {
@Input() image = '';
  @Input() title = '';
  @Input() meta = '';
  @Input() price = '';
}
