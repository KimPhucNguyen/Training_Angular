import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public counter = 0;

  constructor() { }

  public Exponential(n: number): number {
    return n * n;
  }

  public SubmitData(data: any): void{
    console.log('Submit',data);
  }
}
