import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
      if(value<999999999 && value>0){
        var resto = (value % 23);
        var letrasdni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return value + " " + letrasdni[resto];
      }else return null;
    
  }

}
