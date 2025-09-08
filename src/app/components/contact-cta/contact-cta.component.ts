import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact-cta.component.html'
})
export class ContactCtaComponent {
  model = { name: '', email: '', phone: '', message: '' };
  loading = false; done = false; error = '';

  // hace disponible la función en la plantilla
  encodeURIComponent = encodeURIComponent;

  async submit() {
    this.loading = true; this.error=''; this.done=false;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.model),
      });
      if (!res.ok) throw new Error();
      this.done = true; this.model = { name:'', email:'', phone:'', message:'' };
    } catch { this.error = 'No se pudo enviar. Intenta de nuevo.'; }
    finally { this.loading = false; }
  }
}

