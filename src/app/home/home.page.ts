import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username;
  
  constructor( private auth: UserService,private nav: NavController) {
    this.username = this.auth.getUser();
    console.log(this.auth.getUser());
  }

  loadRestaurant(){
    this.auth.setUser(this.username);
    this.nav.navigateForward('/restaurants');
  }
}
