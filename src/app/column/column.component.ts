import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'mp-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

    @Input() cards: any;
    @Input() column: any;
    @Input() columnName: any;

    @Output() cardDrop = new EventEmitter();
    @Output() toColumn = new EventEmitter();
    @Output() addCard = new EventEmitter();

    addCardText: string;

    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('drop', ['$event'])
    onDrop(ev) {
        ev.preventDefault();
        this.toColumn.next(this.column);
    }

    @HostListener('dragover', ['$event'])
    allowDrop(ev) {
        ev.preventDefault();
    }

    @HostListener('dragstart', ['$event'])
    drag(ev) {
    }

    onCardDrop(cardID) {
        this.cardDrop.next({
            cardID,
            column: this.column
        });
    }

    addCardOnEnter(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            if (this.addCardText && this.addCardText.trim() !== '') {
                this.addCard.next({columnId: this.column, newCardText: this.addCardText});
                this.addCardText = '';
            } else {
                this.addCardText = '';
            }
        } else if (event.keyCode === 27) {
            this.addCardText = '';
        }
    }
}
