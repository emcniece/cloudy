import {App, Platform, StatusBar} from 'ionic/ionic';
import {TabsPage} from './tabs/tabs';
import {Friends} from './data/data';
import {Weather} from './data/weather';
import {Particle} from './particle/particle';

@App({
  template: '<ion-nav [root]="root"></ion-nav>',
  providers: [Friends, Weather, Particle]
})

export class TabsPage {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = TabsPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
