import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  public Cars = [
    { name: 'Lamborghini', amount: 3, price: '17000', limited: true },
    { name: 'Ferrari', amount: 10, price: '15000', limited: true },
    { name: 'Cadillac', amount: 50, price: '10000', limited: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
