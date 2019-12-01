import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dinein',
  templateUrl: './dinein.page.html',
  styleUrls: ['./dinein.page.scss'],
})
export class DineinPage implements OnInit {

  createSuccess = false;
  cart = [];
  cartFoods = [];
  foodqty = [];
  dineindata = {shopid:'' ,userid:'', cart:this.cartFoods, lastid:0, qty:this.foodqty, totalprice:0, selectedTable:''};
  userid;
  tableData=[];

  constructor(public nav:NavController, public auth: UserService, private alertCtrl: AlertController) {
    
    this.userid = this.auth.getUser();
    console.log(this.userid);
    console.log(this.auth.getTotalprice());
    
    
   }

  ngOnInit() {
    this.cart = this.auth.getSelectedCart();
    console.log(this.cart);
    this.dineindata.shopid = this.cart[0].foodshop;
    this.dineindata.cart = this.cartFoods;
    this.dineindata.qty = this.foodqty;
    this.dineindata.userid = this.userid;
    this.dineindata.totalprice = this.auth.getTotalprice();
    console.log(this.dineindata);
    console.log(this.dineindata.shopid);
    this.getTables();
  }

  public getTables(){
    this.auth.getTables(this.dineindata.shopid).subscribe(table => {
      console.log(table);
      for(let i in table){
        var tableObj = {
          tablenumber:table[i][2],
          tableavailability:table[i][3]
        }
        this.tableData.push(tableObj);
      }
     },
     error => {
       console.log(error);
     });
  }

  public placeOrder() {
    if (this.dineindata.selectedTable !== '' ) {
    this.auth.placeOrder(this.dineindata).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.cartFoodItems();
        this.cartfoodQty();
        this.showPopup('Success', 'Order Placed.');
        var convertedSuccess = success.toString();
        this.dineindata.lastid = parseInt(convertedSuccess);
        console.log(success);
        console.log(this.dineindata.lastid);
        console.log(this.dineindata.cart);

        this.addCartDetails();

        if (this.dineindata.selectedTable !== '' ) {
          this.auth.placeOrderDetails(this.dineindata).subscribe(data => {
            console.log(this.dineindata.cart);
            if (data) {
              this.createSuccess = true;
              console.log(this.dineindata.cart);
            } else {
              console.log(this.dineindata.cart);
            }
          },
            error => {
              console.log(this.dineindata.cart);
            });
          } else {
            console.log(this.dineindata.cart);
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
    console.log(this.dineindata);
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
  
  public addCartDetails() {
    this.auth.addCartDetails(this.dineindata).subscribe(success => {
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