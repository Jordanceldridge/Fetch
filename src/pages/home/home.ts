import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicProfilePage } from '../basic-profile/basic-profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOtherPage(){
    this.navCtrl.push(BasicProfilePage);
  }

}
