import { Pipe, PipeTransform } from '@angular/core';
import { RestframeworkService } from './apiservice/restframework.service';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {
  users;
  constructor(public restframework: RestframeworkService) {
    this.getusers();

  }
  getusers() {
    this.restframework.getLists().then( data => {
      this.users = data;
    });
  }

  transform(value: any, args?: any): any {
      if (!args) {

        return value;
      } else {
        args = args.toLowerCase() || args.toUpperCase();
      }
      return value.filter(items => {

       if ( String(items.jina).startsWith(args) === true) {

          return String(items.jina).startsWith(args) === true;
       } else if (String(items.jina).startsWith(args) === false) {
    
        return String(items.file_no).startsWith(args) === true;
       } else if (String(items.file_no).startsWith(args) === false) {

        return String(items.Account_no).startsWith(args) === true;
       } else if (String(items.Account_no).startsWith(args) === false) {

        return String(items.kata).startsWith(args) === true;
       }
      });
    }
  }
