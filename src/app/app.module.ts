import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importa aquí los componentes standalone
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PropertyGridComponent } from './components/property-grid/property-grid.component';
import { CompareSliderComponent } from './components/compare-slider/compare-slider.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NavbarComponent, HeroComponent, PropertyGridComponent, CompareSliderComponent, ContactCtaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
