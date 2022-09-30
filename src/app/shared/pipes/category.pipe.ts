import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'casa':
        return 'house';
      case 'chacara':
        return 'warehouse';
    }
    return 'code';
  }
}
