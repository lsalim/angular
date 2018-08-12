import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customPipe'
})
export class MyCustomPipe implements PipeTransform {
  transform(values: any[], ...args: any[]) {
    let resultArray = [];
    
      for (const item of values) {
        if (item.subject != null && item.subject.match(args)
          || item.name != null && item.name.match(args)) {
          resultArray.push(item);
        }
      }
    
    return resultArray;
  }
}