///<referenc path="../../../typings/angular2/angular2.d.ts" />
import {Page, NavController, ViewController} from 'ionic/ionic';
import {Weather} from '../data/weather';
import {Particle} from '../particle/particle';



@Page({
  templateUrl: 'app/dash/dash.html'
})
export class Dash {
  constructor(nav: NavController, view: ViewController, weather: Weather) {
    this.nav = nav;
    this.view = view;
    this.states = weather.states;
    this.currentCondition = this.states[0]; // Unknown

    // Mock spark response
    this.testCondition = 'WEATHER_OVERCAST';

    // Set current condition
    for (let i = 0; i < this.states.length;i++){
        if(this.states[i].name === this.testCondition){
            this.currentCondition = this.states[i];
        }
    }
  }

}
