import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: any, propName: string): any {

    if(value.length === 0)
      return value;
    return value.sort((a, b) => a[propName].localeCompare(b[propName]));
  }

}
