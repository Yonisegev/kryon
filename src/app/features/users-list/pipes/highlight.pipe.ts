import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args: any): any {
    if(!args || !args.length) return value
    var re = new RegExp(args, 'gi')
    return value.replace(re, '<mark>$&</mark>')
  }

}
