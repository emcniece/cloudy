import {Page} from 'ionic/ionic';
import {Friends} from '../data/data';
import {Control, ControlGroup} from 'angular2/angular2';
import {Particle} from '../particle/particle';
//import {Validators} from 'angular2/forms';

@Page({
    templateUrl: 'app/settings/settings.html',
})
export class Settings {
    constructor(particle: Particle) {
        this.settings = new ControlGroup({
            enableFriends: new Control(true),
            email: new Control('emcniece@gmail.com'),
            password: new Control('laro4325')
        });

        this.login = { message: false, error: false }
        console.log(particle.login() );
    }

    doLogin() {
        console.log( this.settings.controls.email.value)

        // We call our API to log the user in. The username and password are entered by the user

        /*
        fetch('https://api.particle.io/oauth/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                this.settings.controls.email.value, this.settings.controls.password.value
            })
        })
        /*
        .then(status)
        .then(json)
        .then((response) => {
            // Once we get the JWT in the response, we save it into localStorage
            localStorage.setItem('jwt', response.id_token);
            // and then we redirect the user to the home
            this.router.parent.navigate('/home');
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.message);
        });
*/
    }
}

