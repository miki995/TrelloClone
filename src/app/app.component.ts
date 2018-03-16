import { Component } from '@angular/core';
import { CardServiceService } from './card-service.service';

@Component({
  selector: 'mp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columns$: any;

  constructor(private cardService: CardServiceService) {

    this.columns$ = this.cardService.getColumns();
  }

  onCardDrop(data) {
    console.log(data);
    this.cardService.moveCard(data.cardID, data.column);
  }

  toColumn(columnID) {
    this.cardService.moveColumns(columnID);
  }
}
