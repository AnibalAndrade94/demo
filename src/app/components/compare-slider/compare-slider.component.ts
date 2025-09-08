import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compare-slider',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compare-slider.component.html',
})
export class CompareSliderComponent {
  value = 50;

  // Usa primero estas (puedes cambiarlas por tus fotos)
  before = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80';
  after  = 'https://images.unsplash.com/photo-1600585154154-46b66f1b8dfd?auto=format&fit=crop&w=1600&q=80';

  // Fallbacks (si alguna falla)
  fallbackBefore = 'https://picsum.photos/id/1018/1600/900';
  fallbackAfter  = 'https://picsum.photos/id/1015/1600/900';

  onBeforeError() { this.before = this.fallbackBefore; }
  onAfterError()  { this.after  = this.fallbackAfter; }
}
