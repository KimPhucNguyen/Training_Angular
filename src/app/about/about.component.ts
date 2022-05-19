import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public loginName = 'user';
  public myColor = 'red';

  public counter = 0;
  public counterExponential = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterExponential = this.common.Exponential(this.counter);
    this.common.counter ++ ;
  }

}
