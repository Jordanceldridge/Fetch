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
        this.pets.push(new Pet("Bill", "http://myhswm.org/images/sized/images/animals/Cilantro-6-HSWM-256x256.jpg"));
        this.pets.push(new Pet("Sally", "https://www.purina.com/sites/g/files/auxxlc196/files/HOUND_Beagle-%2813inch%29.jpg"));
        this.pets.push(new Pet("Darlin", "http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"));
    }

}

class Pet {
    name:string;
    image:string;

    constructor(name:string, image:string) {
        this.name = name;
        this.image = image;
    }
}
