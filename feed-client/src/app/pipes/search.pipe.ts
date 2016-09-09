import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(values: any, word: string): any {
    if (!values || !word) {
      return values;
    }

    return values.filter(comment => comment.email.includes(word) || comment.message.includes(word));
  }

}
