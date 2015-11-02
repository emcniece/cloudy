import {Injectable} from "angular2/angular2";
@Injectable()
export class Weather {
    constructor() {
        this.states = [{
            name: 'WEATHER_UNKNOWN',
            title: 'Unknown',
            icon: 'help',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_BLUE_SKY',
            title: 'Blue Skies',
            icon: 'sunny',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_NIGHT',
            title: 'Night',
            icon: 'cloudy-night',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_OVERCAST',
            title: 'Overcast',
            icon: 'cloudy',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_GOLDEN',
            title: 'Sunrise / Sunset',
            icon: 'flame',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_SNOW',
            title: 'Snow',
            icon: 'snowy',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_LIGHTNING',
            title: 'Thunderstorm',
            icon: 'thunderstorm',
            image: 'http://google.ca/image.png'
        }, {
            name: 'WEATHER_ERROR',
            title: 'Error',
            icon: 'alert',
            image: 'http://google.ca/image.png'
        }];
    }

    all() {
        return this.states
    }

}
