import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicProfile } from '../BasicProfile/basicprofile';

@Component({
    selector: 'petProfile',
    templateUrl: 'petProfile.html'
})
export class PetProfile {
    name:string;
    image:string;

    constructor(public navCtrl: NavController, name:string, image:string) {
        this.name = name;
        this.image = image;
    }

}
