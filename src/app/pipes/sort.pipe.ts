import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value) return []
    return _.sortBy(value, function(film){return film.title}).reverse()
  }

}
