import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
 
  transform(value:string): string{
    if (!value) {
      return '';
    } else {
      //return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
      
      return value.split(' ').map((char)=> {
        if(char.length > 0) return char[0].toUpperCase() + char.substr(1).toLowerCase()
      }).join(' ');
    }
  }
}
