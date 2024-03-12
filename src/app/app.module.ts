import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './page/carousel/carousel.component';
import { CoffeComponent } from './page/coffe/coffe.component';
import { FooterComponent } from './page/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';
import { IonicModule } from '@ionic/angular';
import { ChaleFujiComponent } from './page/chale-fuji/chale-fuji.component';
import { OptionPasseioComponent } from './page/option-passeio/option-passeio.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

// Import MapsComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    NavbarComponent,
    CarouselComponent,
    CoffeComponent,
    FooterComponent,
    ChaleFujiComponent,
    OptionPasseioComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonicModule.forRoot({}), // Include AppRoutingModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
