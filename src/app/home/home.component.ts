import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Phuc';
  public age = 22;
  constructor() { }

  ngOnInit(): void {
  }

  public reset(): void {
    this.name = '';
    this.age = 0;
  }

}
