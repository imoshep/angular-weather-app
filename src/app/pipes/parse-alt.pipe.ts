import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseAlt',
})
export class ParseAltPipe implements PipeTransform {
  transform(str: String): String {
    const sliced = str.slice(str.lastIndexOf('/') + 1, str.lastIndexOf('.'));
    return sliced.replace('_', ' ');
  }
}
