import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limited'
})
export class LimitedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value){
      return 'Limited!!!'
    }
    return '';
  }

}
