import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'mp-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    draging = false;
    screenX = 0;
    screenY = 0;

    @Input() cardID: any;
    @Input() cardTitle: any;
    @Input() cardContent: any;
    @Input() cardPositionX: any;
    @Input() cardPositionY: any;

    @Output() dragEnd = new EventEmitter();
    @Output() dragStart = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

        Observable
            .fromEvent(document, 'mousemove')
            .filter(() => this.draging)
            .subscribe((data) => {
                this.screenX = data.screenX;
                this.screenY = data.screenY;
            });
    }

    @HostListener('dragend', ['$event'])
    onDrop(ev) {
        // TODO ViewChild Angular
        this.dragEnd.next(
            {
                cardID: this.cardID,
                screenX: ev.getElementsByClassName('mp-column').pageX,
                screenY: ev.getElementsByClassName('mp-column').pageY,
                positionX: this.cardPositionX,
                positionY: this.cardPositionY
            });
        this.draging = false;
    }

    @HostListener('dragstart', ['$event'])
    onDragStart(ev) {
        this.dragStart.next({screenX: ev.pageX, screenY: ev.pageY});
        this.draging = true;
    }

    @HostListener('drag', ['$event'])
    onDrag(ev) {
        ev.preventDefault();
    }
}
