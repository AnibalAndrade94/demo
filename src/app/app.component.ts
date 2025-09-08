import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  constructor() {
    this.title.setTitle('Demo Premium | Inmobiliaria & Remodelación');
    this.meta.updateTag({ name: 'description', content: 'Sitio premium con catálogo, antes/después y microinteracciones.' });
  }
}