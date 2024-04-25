import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  standalone: true
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let reverStr = value.split('').reverse().join('');
    return reverStr;
  }

}
