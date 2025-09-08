import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[microParallax]', standalone: true })
export class MicroParallaxDirective {
  private browser: boolean;
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) pid: Object) {
    this.browser = isPlatformBrowser(pid);
  }
  @HostListener('window:scroll') onScroll() {
    if (!this.browser) return;
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    const t = Math.min(1, Math.max(0, rect.top / window.innerHeight));
    const dy = (1 - t) * 6;
    (this.el.nativeElement as HTMLElement).style.transform = `translate3d(0, ${dy}px, 0)`;
    (this.el.nativeElement as HTMLElement).style.willChange = 'transform';
  }
}
