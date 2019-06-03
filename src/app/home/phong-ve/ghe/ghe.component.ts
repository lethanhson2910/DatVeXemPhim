import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() ghe;
  @Output() eventGhe = new EventEmitter();

  trangThaiChon = false;

  constructor() { }

  ngOnInit() {
  }

  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    const objGhe = {
      trangThaiChon: this.trangThaiChon,
      ghe: this.ghe,
    }
    this.eventGhe.emit(objGhe);
  }

}
