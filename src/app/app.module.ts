import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import {FormsModule} from '@angular/forms';
import { CardServiceService } from './card-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
