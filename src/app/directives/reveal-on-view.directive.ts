import { Directive, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[revealOnView]', standalone: true })
export class RevealOnViewDirective implements AfterViewInit {
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private pid: Object) {}
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.pid)) return;
    const node = this.el.nativeElement as HTMLElement;
    node.style.opacity = '0'; node.style.transform = 'translateY(12px)';
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          node.style.transition = 'all .6s cubic-bezier(0.22,1,0.36,1)';
          io.unobserve(node);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    io.observe(node);
  }
}
