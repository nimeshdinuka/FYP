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
  cartFoods=[];
  foodqty =[];
  deliveryData = { workingmobile: '', address: '', location: '',shopid:'' ,userid:'', cart:this.cartFoods, lastid:0, qty:this.foodqty, totalprice:0};
  userid;
  

  constructor(public nav:NavController, public auth: UserService,private alertCtrl: AlertController) {
    this.userid = this.auth.getUser();
    console.log(this.userid);
    console.log(this.auth.getTotalprice());
   }


  ngOnInit() {
    this.cart = this.auth.getSelectedCart();
    console.log(this.cart);
    this.deliveryData.shopid = this.cart[0].foodshop;
    this.deliveryData.cart = this.cartFoods;
    this.deliveryData.qty = this.foodqty;
    this.deliveryData.userid = this.userid;
    this.deliveryData.totalprice = this.auth.getTotalprice();
    console.log(this.deliveryData);
  }

  public placeOrder() {
    if (this.deliveryData.workingmobile !== '' && this.deliveryData.address !== '' && this.deliveryData.location !== '') {
    this.auth.placeOrder(this.deliveryData).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.cartFoodItems();
        this.cartfoodQty();
        this.showPopup('Success', 'Order Placed.');
        var convertedSuccess = success.toString();
        this.deliveryData.lastid = parseInt(convertedSuccess);
        console.log(success);
        console.log(this.deliveryData.lastid);
        console.log(this.deliveryData.cart);

        this.delivery();
        this.addCartDetails();


        if (this.deliveryData.workingmobile !== '' && this.deliveryData.address !== '' && this.deliveryData.location !== '') {
          this.auth.placeOrderDetails(this.deliveryData).subscribe(data => {
            console.log(this.deliveryData.cart);
            if (data) {
              this.createSuccess = true;
              console.log(this.deliveryData.cart);
            } else {
              console.log(this.deliveryData.cart);
            }
          },
            error => {
              console.log(this.deliveryData.cart);
            });
          } else {
            console.log(this.deliveryData.cart);
          }
          
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

  cartFoodItems(){
    for( var i = 0; i < this.cart.length; i++){ 
        this.cartFoods.push(this.cart[i].foodname)
        console.log(this.cartFoods);
      }
  }
  cartfoodQty(){
    for( var i = 0; i < this.cart.length; i++){ 
        this.foodqty.push(this.cart[i].count)
        console.log(this.foodqty);
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
              this.auth.setCart([]);
              console.log(this.auth.getCart());
              

            }
          }
        }
      ]
    });
    await alert.present();
  }

  public delivery() {
    this.auth.delivery(this.deliveryData).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        console.log("delivery data added")
      } else {
        console.log("problem detected")
      }
    },
      error => {
        console.log('Error', error);
      });
  }

  
  public addCartDetails() {
    this.auth.addCartDetails(this.deliveryData).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        console.log("Cart data added")
      } else {
        console.log("problem detected")
      }
    },
      error => {
        console.log('Error', error);
      });
  }

}
