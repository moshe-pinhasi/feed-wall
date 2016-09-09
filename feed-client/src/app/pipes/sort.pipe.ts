import { Pipe, PipeTransform } from '@angular/core';

const _ = require('lodash');

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  transform(values: any): any {
    return values.sort((a,b) => b.date - a.date);
  }

}
