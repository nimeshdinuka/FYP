import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  createSuccess = false;
  cart = [];
  deliveryData = { workingmobile: '', address: '', location: '',cart:this.cart,userid:''};
  userid;
  constructor(public nav:NavController, public auth: UserService,private alertCtrl: AlertController) {
    this.userid = this.auth.getUser();
    console.log(this.userid);
   }


  ngOnInit() {
    this.cart = this.auth.getSelectedCart();
    console.log(this.cart);
    this.deliveryData.cart = this.cart;
    this.deliveryData.userid = this.userid;
  }

  public placeOrder() {
    if (this.deliveryData.workingmobile !== '' && this.deliveryData.address !== '' && this.deliveryData.location !== '') {
    this.auth.placeOrder(this.deliveryData).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Order Placed.');
      } else {
        this.showPopup('Error', 'Problem placing Order');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
    } else {
      this.showPopup('Error', 'Please Fill All Details.');
    }
  }

  backToCart(){
    this.nav.navigateBack('/cart');
    console.log(this.deliveryData);
  }

  async showPopup(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.navigateForward('/restaurants');

            }
          }
        }
      ]
    });
    await alert.present();
  }

}
