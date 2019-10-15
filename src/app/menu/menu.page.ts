import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  items = [];
  products=[];
  cart:any = [];
  createSuccess = false;

  sliderConfig = {
    slidesPerView : 1.4,
    centeredSlides: true,
    spaceBetween:10
  }

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController,public loadingController: LoadingController) { 
    
    this.initializeItems();
    this.cart = this.auth.getCart();
    console.log(this.auth.getcurrentShopId());
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getFoodItems().subscribe(food => {
      console.log(food);
      for(let i in food){
        if(food != "error"){
          var foodObj = {
            foodid:food[i][0],
            foodname:food[i][2],
            description:food[i][3],
            foodprice:food[i][4],
            foodpic:food[i][5],
            foodshop:food[i][1]
          }
          this.items.push(foodObj);
          this.products.push(foodObj);
          console.log(this.items);
        }else{
          console.log("No food items exist in this shop");
        }
         
      }
     },
     error => {
       console.log(error);
     });
  }

  loadRestaurants(){
    this.nav.navigateBack('/restaurants');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: 1500,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  } 

  loadCart(){
    this.nav.navigateForward('/cart');
  }

  addToCart(tempdata){
    if(this.auth.getcurrentShopId()== null){
      this.auth.addCart(tempdata);
      this.auth.setcurrentShopId (tempdata.foodshop); 
      console.log(this.auth.getCart());
    }else{
      if(this.auth.getcurrentShopId()== tempdata.foodshop){
        this.auth.addCart(tempdata);
        console.log(this.auth.getCart());
      }else{
        console.log("You are limited to only 1 shop.")
      }
    }
  }

  initializeSearch(){
    this.items=this.products;
  }

  getProductDetails(ev: any) {
    // Reset items back to all of the items
    this.initializeSearch();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        if(item.foodname.toLowerCase().indexOf(val.toLowerCase()) > -1){
          console.log(this.items);
          return item;
        };
      });
    }
    return false;
  }
}