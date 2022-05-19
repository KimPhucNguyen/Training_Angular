import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public name = '';
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.common.SubmitData(this.name);
  }
}
