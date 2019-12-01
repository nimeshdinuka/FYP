import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})

export class ManagerPage implements OnInit {

  items = [];
  shopId;
  sessionUser:string;

  constructor(private storage: Storage, private alertCtrl: AlertController, private auth: UserService, private nav: NavController) { 

    this.shopId = this.auth.getShop();
    console.log("on back---"+this.shopId);
    this.initializeItems();
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getManagers().subscribe(manager => {
      console.log(manager)
      console.log(this.auth.getShop());
      console.log(this.auth.getUser());
     },
     error => {
       console.log(error);
     });
  }

  loadAddFood(){
    this.nav.navigateForward('addfood');
  }

  loadAddCashier(){
    this.nav.navigateForward('addcashier');
  }

  loadCashiers(){
    this.nav.navigateForward('viewcashier');
  }

  loadFood(){
    this.nav.navigateForward('viewfood');
  }

  loadAddOffer(){
    this.nav.navigateForward('addoffer');
  }

  loadOffer(){
    this.nav.navigateForward('viewoffers');
  }

  logout(){
    this.storage.set("sessionUser",null);
    this.auth.setUser('');
    console.log(this.storage.get("sessionUser"));
    this.nav.navigateRoot('login');
  }

}
