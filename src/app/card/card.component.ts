import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardID: any;
  @Input() cardTitle: any;
  @Input() cardContent: any;
  @Output() dragEnd = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('dragend', ['$event'])
  onDrop(ev) {
    ev.preventDefault();
    this.dragEnd.next(this.cardID);
  }
}
