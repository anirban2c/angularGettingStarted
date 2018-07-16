import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NgModule, Component } from "@angular/core";

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPile } from "./shared/convert-to-spaces.pipe";
import { StartComponent } from "./shared/star.component";
import { ProductService } from "./product-list/product.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductDeatilsComponent } from './product-list/product-deatils.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductGuardService } from './product-list/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPile,
    StartComponent,
    ProductDeatilsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products' , component: ProductListComponent},
      {path: 'products/:id',
          canActivate: [ProductGuardService],  component: ProductDeatilsComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', component: WelcomeComponent},
      {path: '**', component: WelcomeComponent}
    ]),
    ],
  providers: [ProductService, ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
