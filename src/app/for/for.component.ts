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
  ];

  public VietNamData = [
    {
      city: 'Choose City',
      district: ['District']
    },
    {
      city: 'Tp.HCM',
      district: [
        'District 1',
        'District 2',
        'District 3',
        'District 4',
        'District 5',
        'District 6',
        'District 7',
        'District 8',
        'District 9',
        'District 10',
      ]
    },
    {
      city: 'HaNoi',
      district: [
        'District CauGiay',
        'District HoangMai',
      ]
    }
  ];

  public Districts: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // const search = this.VietNamData.filter(data => data.city === city);
    // if(search && search.length > 0){
    //   this.Districts = search[0].district;
    // }

    this.Districts = this.VietNamData.find(data => data.city === city)?.district || [];
  }

}
