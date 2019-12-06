import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxListaProdutosComponent } from './box-lista-produtos/box-lista-produtos.component';
import { BoxProdutoComponent } from './box-produto/box-produto.component';
import { FooterComponent } from './footer/footer.component';

import { DetalheDoProdutoComponent } from './detalhe-do-produto/detalhe-do-produto.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BoxListaProdutosComponent,
    BoxProdutoComponent,
    FooterComponent,
    DetalheDoProdutoComponent,
    MenuMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
