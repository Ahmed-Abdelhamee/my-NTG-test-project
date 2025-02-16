import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  standalone: true,
  // pure:false
})
export class ImpurePipePipe implements PipeTransform {

  transform(value:any): unknown {
    console.log("hello")
    return value;
  }

}
