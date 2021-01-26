import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (args[0]=="cuadrado") {
      return value * value
    }

    if (args[0]=="raiz") {
      return Math.sqrt(value)
    }

    if (args[0]=="letras") {
      let arraynumeros = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
      return arraynumeros[value];
    }
    
  }

}
