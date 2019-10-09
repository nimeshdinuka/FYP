import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  total = 0;
  selectedItems= [];
  selectedRadio;
  badgeCount;
  items =[];

  constructor(public actionSheetController: ActionSheetController, private alertCtrl: AlertController, private auth: UserService, private nav:NavController,public loadingController: LoadingController) { 
  }

  ngOnInit() {
    this.items = this.auth.getCart();
    let selected = {};
    for(let obj of this.items){
      if(selected[obj.foodid]){
        selected[obj.foodid].count++;
      }else{
        selected[obj.foodid] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count* b.foodprice),0);
    console.log(this.selectedItems);
  }
 
  loadMenu(){
    this.nav.navigateBack('/menu');
  }

  loadPage(){
   
    this.presentActionSheet();
  }

  increase(data){
    console.log(data);
    console.log(this.selectedItems);
    var tem = {
      foodid : data.foodid,
      foodname : data.foodname,
      foodprice : data.foodprice,
      description : data.description,
      foodshop : data.foodshop,
      foodpic : data.foodpic
    }
    this.auth.addCart(tem);
    data.count++;
    console.log(this.items);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count* b.foodprice),0);
  }
  
  decrease(data){
    console.log(data.foodid);
    if( data.count >1){
      data.count--;
      this.decreaseArray(data);
    }
    console.log(this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count* b.foodprice),0);
  }

  decreaseArray(data){
    console.log(this.items);
    console.log(data.foodid);
    let i;
    for( i in this.items){
      if(this.items[i].foodid == data.foodid){
        console.log(i);
        console.log(this.items[i].foodid);
        console.log(data.foodid);
        this.items.splice(i,1);
        console.log(this.items);
        break;
      }else{
        console.log(this.items[i].foodid);
        console.log(data.foodid);
        console.log("no data");
      }
    }
    return this.items;
  }

  removeItem(data){
    let index = this.selectedItems.indexOf(data);
    console.log(index);
    if(index > -1){
      this.selectedItems.splice(index, 1);
      console.log(data.count);
      console.log(this.selectedItems);
      console.log(this.items);
    }
    for( var i = 0; i < this.items.length; i++){ 
      if ( this.items[i].foodid === data.foodid) {
        this.items.splice(i, 1); 
        i = i-1;
      }
   }
      console.log(this.items);
      this.total = this.selectedItems.reduce((a, b) => a + (b.count* b.foodprice),0);
      console.log(this.selectedItems);
    }

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Select Your Option',
        buttons: [{
          text: 'Dine In',
          icon: 'pizza',
          handler: () => {
            this.nav.navigateForward('dinein');
            this.auth.setSelectedCart(this.selectedItems);
          }
        }, {
          text: 'Delivery',
          icon: 'car',
          handler: () => {
            this.nav.navigateForward('delivery');
            this.auth.setSelectedCart(this.selectedItems);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
}
