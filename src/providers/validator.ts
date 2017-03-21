import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Validator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Validator {

  constructor(public http: Http) {
    console.log('Hello Validator Provider');
  }

  emailValid(control: FormControl) {
    return new Promise(resolve => {
      let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(control.value)) {
        resolve({ InvalidEmail: true });
      }
      resolve(null);
    });
  }

  nameValid(control: FormControl) {
    return new Promise(resolve => {
      let pattern = /[0-9]/;
      if (pattern.test(control.value)) {
        resolve({ InvalidName: true });
      }
      resolve(null);
    });
  }

}
