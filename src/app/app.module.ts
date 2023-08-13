import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/shared/about/about.component';
import { CustomizeComponent } from './views/home/customize/customize.component';
import { MultiWorkstationComponent } from './views/home/multi-workstation/multi-workstation.component';
import { MultiplayComponent } from './views/home/multiplay/multiplay.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { AboutLegoComponent } from './components/shared/about-lego/about-lego.component';
import { GrondBlackComponent } from './views/works/grond-black/grond-black.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    HeroComponent,
    CarouselComponent,
    AboutComponent,
    CustomizeComponent,
    MultiWorkstationComponent,
    MultiplayComponent,
    ContactFormComponent,
    AboutLegoComponent,
    GrondBlackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
