import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
//import {MainComponent} from './components/main/main.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rotaconstante } from './app.route';
import { FirstComponent } from './components/trab/first/first.component';
import { SecondComponent } from './components/trab/second/second.component';
import { HeaderComponent1 } from './components/trab/header/header.component';
import { FooterComponent1 } from './components/trab/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // MainComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent1,
    FooterComponent1

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rotaconstante)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
