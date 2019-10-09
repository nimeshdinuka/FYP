import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',

    },
    {
      title: 'Restaurants',
      url: '/restaurants',

    },
    {
      title: 'Menu',
      url: '/menu',

    },
    {
      title: 'Login/Sign Up',
      url: '/login',

    },

    {
      title: 'Feedback',
      url: '/feedback',

    },
    {
      title: 'T & C',
      url: '/terms',

    },
    {
      title: 'Privacy Policy',
      url: '/privacypolicy',

    },
    {
      title: 'About Us',
      url: '/aboutus',

    },
    {
      title: 'Camera test',
      url: '/test',

    },
    {
      title: 'Image Upload test',
      url: '/test2',

    },
    {
      title: 'base64 test',
      url: '/test3',

    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
