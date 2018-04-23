import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicProfilePage } from '../basic-profile/basic-profile';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signinform: FormGroup;


  constructor(public navCtrl: NavController) {
    this.signinform = new FormGroup({
      city: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ] *')]),

    })
    

  }
  




  goToOtherPage(){
    this.navCtrl.push(BasicProfilePage);

  }

}
