import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public details: any = {
    name: 'James Griffiths',
    occupation: 'Software Engineer',
    platform: 'Other'
  };

  constructor(public navCtrl: NavController) {
    
  }

  saveDetails() {
    console.log(`My name is ${this.details.name}`);
    console.log(`I work as a ${this.details.occupation}`);
    console.log(`My favourite platform is ${this.details.platform}`);
  }

}
