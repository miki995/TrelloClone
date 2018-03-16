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
  @Output() cardDrop = new EventEmitter();
  @Output() toColumn = new EventEmitter();

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
}
