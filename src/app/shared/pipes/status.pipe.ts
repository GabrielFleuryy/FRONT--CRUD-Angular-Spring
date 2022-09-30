import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'ativo': return 'check circle';
      case 'inativo': return 'close';
    }
    return 'block'
  }

}
