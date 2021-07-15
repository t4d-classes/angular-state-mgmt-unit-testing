import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../app/shared/shared.module';
import { CarToolModule } from '../app/car-tool/car-tool.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ItemListComponent } from './components/item-list/item-list.component';
// import { ItemListComponent } from './components/item-list2/item-list.component';
import { ItemListComponent } from './components/item-list3/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CarToolModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
