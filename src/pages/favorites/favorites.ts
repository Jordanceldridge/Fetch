import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasicProfile } from '../BasicProfile/basicprofile';

@Component({
    selector: 'favorites',
    templateUrl: 'favorites.html'
})
export class Favorites {

    basicProfile:BasicProfile;
    pets:Pet[] = [];

    constructor(public navCtrl: NavController) {
        this.pets.push(new Pet("Bill"));
    }

}

class Pet {
    name:string;
    image:string;

    constructor(name:string) {
        this.name = name;
        this.image = "http://myhswm.org/images/sized/images/animals/Cilantro-6-HSWM-256x256.jpg";
    }
}
