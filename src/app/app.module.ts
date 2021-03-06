import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ng2Parallax  } from '../../node_modules/ang2-parallax/ng2parallax';
import { HeaderComponent } from './core/header/header.component';
import { ParallaxSectionComponent } from './core/parallax-section/parallax.component';
import { ExpertiseComponent } from './core/expertise/expertise.component';
import { ContactComponent } from './core/contact/contact.component';
import { MyWorkComponent } from './core/my-work/my-work.component';
import { FooterComponent } from './core/footer/footer.component';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ng2Parallax,
    HeaderComponent,
    ParallaxSectionComponent,
    ExpertiseComponent,
    ContactComponent,
    MyWorkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMC0J078zYmMuul4kPvj_1FKzIS56WVGI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
