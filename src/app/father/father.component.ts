import { Component, OnInit, ViewChild } from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  public fatherMessage = '';
  @ViewChild('Teo') Teo: SonComponent | undefined;
  @ViewChild('Ti') Ti: SonComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public SonSaid(name:string) {
    this.fatherMessage = 'Hello '+name;
  }

  public GiveMoney(){
    this.Teo?.GiveMoney(5);
    this.Ti?.GiveMoney(10);
  }
}
