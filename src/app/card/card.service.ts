import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CardService {
    dropColumn: any;
    firstCardPositionX = 27;
    firstCardPositionY = 126;

    private columns = [
        {
            id: 0,
            name: 'Column 1',
            cards: [
                {
                    id: 0,
                    positionX: this.firstCardPositionX,
                    positionY: this.firstCardPositionY,
                    title: 'Card 1',
                    column: 0,
                    content: 'Card content 1'
                },
                {
                    id: 1,
                    positionX: this.firstCardPositionX,
                    positionY: this.firstCardPositionY + 90,
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
                    positionX: this.firstCardPositionX + (2 * 300),
                    positionY: this.firstCardPositionY,
                    title: 'Card 13',
                    column: 2,
                    content: 'Card content 13'
                },
            ]
        }
    ];

    private columnSubject = new BehaviorSubject(this.columns);

    private static generateId(): number {
        return Math.floor(Math.random() * 10001);
    }

    constructor() {
    }

    getColumns() {

        return this.columnSubject;
    }

    addCard(currentColumn, addCardText) {
        const cardId = CardService.generateId();
        const newCard = {
            id: cardId,
            title: addCardText,
            column: currentColumn,
            content: 'newCard'
        };
        this.pushToCards(currentColumn, newCard);
        this.updateColumnSubject();
    }

    addColumn(columnText) {
        const newColumn = {
            id: CardService.generateId(),
            name: columnText,
            cards: []
        };
        this.columns.push(newColumn);
        this.updateColumnSubject();
    }

    moveCard(cardID, oldColumn) {

        const columnIndex = this.columns.findIndex(item => item.id === oldColumn);
        const dropColumnIndex = this.columns.findIndex(item => item.id === this.dropColumn);

        if (dropColumnIndex !== columnIndex) {
            const cardIndex = this.columns[columnIndex].cards.findIndex(item => item.id === cardID);

            const currentCard = this.columns[columnIndex].cards[cardIndex];

            this.columns[columnIndex].cards = this.columns[columnIndex].cards.filter((item) => item.id !== cardID);
            this.pushToCards(this.dropColumn, currentCard);
            this.updateColumnSubject();

            delete this.dropColumn;
        }
    }

    moveColumns(data) {
        this.dropColumn = data;
    }

    updateColumnSubject() {
        this.columnSubject.next(this.columns);
    }

    pushToCards(column: any, newCard: any) {
        const columnIndex = this.columns.findIndex(element => element.id === column);
        if (columnIndex !== -1) {
            this.columns[columnIndex].cards.push(newCard);
        }
    }
}
