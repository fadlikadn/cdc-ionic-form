import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../../providers/validator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private form: FormGroup;
  private name: any;

  constructor(public navCtrl: NavController, private fb: FormBuilder, private val: Validator) {
    this.form = fb.group({
      'name': ['', Validators.required, val.nameValid],
      'email': ['', Validators.required, val.emailValid],
      'platform': ['', Validators.required],
    });

    this.name = this.form.controls['name'];

    this.name.valueChanges.subscribe(
      (value: string) => {
        console.log(`Entered name is ${value}`);
      }
    );
  }

  saveDetails(value) {
    console.log(value);
  }

}
