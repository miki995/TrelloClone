import { Component } from '@angular/core';
import { CardService } from './card/card.service';

@Component({
    selector: 'mp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    columns$: any;
    addColumnText: string;

    constructor(private cardService: CardService) {

        this.columns$ = this.cardService.getColumns();
    }

    onCardDrop(data) {
        this.cardService.moveCard(data.cardID, data.column);
    }

    toColumn(columnID) {
        this.cardService.moveColumns(columnID);
    }

    onAddCard(data) {
        this.cardService.addCard(data.columnId, data.newCardText);
    }

    onAddColumn(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            if (this.addColumnText && this.addColumnText.trim() !== '') {
                this.cardService.addColumn(this.addColumnText);
                this.addColumnText = '';
            } else {
                this.addColumnText = '';
            }
        } else if (event.keyCode === 27) {
            this.addColumnText = '';
        }
    }


}
