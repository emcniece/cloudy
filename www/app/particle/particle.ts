import {Injectable} from "angular2/angular2";
import {Http} from 'angular2/http';

@Injectable()
export class Particle {
    constructor(http: Http) {
        this.http = http;
        this.data = null;
        console.log('DataService constructor');
    }

    login() {
        //var username = data.credentials.username;
        //var password = data.credentials.password;

        var creds = "username=" + "test" + "&password=" + "test";

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');



        this.http.post('https://api.particle.io/oauth/token', creds, {
            headers: headers
        })
          .map(res => console.log(res))
          .subscribe(
            data => this.saveJwt(data),
            err => this.logError(err),
            () => console.log('Authentication Complete')
        );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    saveJwt(data) {
        console.log(data);
        if (data.id_token) {
            localStorage.setItem('id_token', jwt)
        }
    }

}
