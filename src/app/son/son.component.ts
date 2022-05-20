import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  @Input() name: string = '';
  @Output() SonCalled: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public CallFather(){
    this.SonCalled.emit(this.name);
  }

  public GiveMoney(amount: number){
    console.log('Con la ' + this.name + '.Cam on da cho con' + amount);
  }
}
