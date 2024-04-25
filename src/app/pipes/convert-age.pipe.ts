import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertAge',
  standalone: true
})
export class ConvertAgePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value, args)
    let age = 0;
    if (args[0] == 'month') {
      age = value * 12;
    } else if (args[0] == 'day') {
      age = value * 365;
    } else {
      age = value
    }

    return age;
  }

}
