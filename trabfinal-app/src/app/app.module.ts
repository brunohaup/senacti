import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { rotaconstante } from './app.route';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicoComponent } from './components/servico/servico.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContatoComponent,
    ServicoComponent,
    ProdutosComponent,
    FooterComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotaconstante)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
