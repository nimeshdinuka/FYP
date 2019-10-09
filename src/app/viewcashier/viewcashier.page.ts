import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-viewcashier',
  templateUrl: './viewcashier.page.html',
  styleUrls: ['./viewcashier.page.scss'],
})
export class ViewcashierPage implements OnInit {
  items = [];
  shops = [];
  createSuccess = false;
  shopid;

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController) {
    this.initializeItems();
    this.shopid = this.auth.getShop();
  }

  ngOnInit() {
  }

  initializeItems() {
    this.auth.viewCashiers().subscribe(cashier => {
      console.log(cashier);
      for (let i in cashier) {
        var foodObj = {
          cashierid: cashier[i][0],
          cashierfirstname: cashier[i][2],
          cashierlastname: cashier[i][3],
          cashiermobile: cashier[i][4],
          cashieremail: cashier[i][5],
          cashierusername: cashier[i][1],
          cashiershopid: cashier[i][8]
        }
        this.items.push(foodObj);
        console.log(this.items);
      }
    },
      error => {
        console.log(error);
      });
  }

  loadManager(){
    this.nav.navigateBack('/manager');
    this.auth.setShop(this.shopid);
  }
}