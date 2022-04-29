import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderBszComponent } from './components/order-bsz/order-bsz.component';
import { OrderItemBSZComponent } from './components/order-item-bsz/order-item-bsz.component';
import { OrderDetailsBSZComponent } from './components/order-details-bsz/order-details-bsz.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderBszComponent,
    OrderItemBSZComponent,
    OrderDetailsBSZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
