import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import { CardService } from './card/card.service';


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
    providers: [CardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
