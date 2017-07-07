import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ng2Parallax  } from '../../node_modules/ang2-parallax/ng2parallax';
import { HeaderComponent } from './core/header/header.component';
import { ParallaxSectionComponent } from './core/parallax-section/parallax.component';
import { ExpertiseComponent } from './core/expertise/expertise.component';
import { ContactComponent } from './core/contact/contact.component';
import { MyWorkComponent } from './core/my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    ng2Parallax,
    HeaderComponent,
    ParallaxSectionComponent,
    ExpertiseComponent,
    ContactComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
