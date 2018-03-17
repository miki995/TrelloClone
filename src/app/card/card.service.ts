import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CardService {
    dropColumn: any;

    private columns = [
        {
            id: 0,
            name: 'Column 1',
            cards: [
                {
                    id: 0,
                    title: 'Card 1',
                    column: 0,
                    content: 'Card content 1'
                },
                {
                    id: 1,
                    title: 'Card 1',
                    column: 0,
                    content: 'Card content 1'
                }
            ]
        },
        {
            id: 1,
            name: 'Column 2',
            cards: []
        },
        {
            id: 2,
            name: 'Column 3',
            cards: [
                {
                    id: 13,
                    title: 'Card 13',
                    column: 2,
                    content: 'Card content 13'
                },
            ]
        }
    ];

    private columnSubject = new BehaviorSubject(this.columns);

    constructor() {
    }

    getColumns() {

        return this.columnSubject;
    }

    addCard(currentColumn, addCardText) {
        const cardId = Math.floor(Math.random() * 10001);
        const newCard = {
            id: cardId,
            title: addCardText,
            column: currentColumn,
            content: 'newCard'
        };
        this.columns[currentColumn].cards.push(newCard);
        this.columnSubject.next(this.columns);
        console.log(newCard);
        console.log(this.columnSubject);
    }

    addColumn(columnText) {
        const newColumn = {
            id: Math.floor(Math.random() * 10001),
            name: columnText,
            cards: []
        };
        this.columns.push(newColumn);
        this.columnSubject.next(this.columns);
    }

    moveCard(cardID, oldColumn) {

        console.log(cardID, this.dropColumn);
        const currentCard = this.columns[oldColumn].cards[cardID];
        this.columns[oldColumn].cards = this.columns[oldColumn].cards.filter((item) => item.id !== cardID);

        this.columns[this.dropColumn].cards.push(currentCard);

        this.columnSubject.next(this.columns);

        delete this.dropColumn;
    }

    moveColumns(data) {
        this.dropColumn = data;
    }
}
