// import { Component, OnInit} from '@angular/core';
// import { AlertController,NavController } from '@ionic/angular';
// import { UserService } from '../api/user.service';
// import { LoadingController } from '@ionic/angular';
// import { Storage } from '@ionic/storage';

// @Component({
//   selector: 'app-restaurants',
//   templateUrl: './restaurants.page.html',
//   styleUrls: ['./restaurants.page.scss'],
// })
// export class RestaurantsPage implements OnInit{

//   userName;
//   items= [];
//   products=[];
//   sessionUser:string;
//   constructor(private storage:Storage,private alertCtrl: AlertController, private auth: UserService, private nav: NavController,public loadingController: LoadingController) { 
//     this.userName = this.auth.getUser();
//     console.log(this.auth.getUser());
//     this.initializeItems();
//   }
//   ngOnInit() {
//   }
  
//   initializeItems(){
//     this.auth.getShops().subscribe(shop => {
//       console.log(shop);
//       for(let i in shop){
//         var itemObj = {
//           shopid:shop[i][0],
//           shopname:shop[i][1],
//           description:shop[i][2],
//           shoppic:shop[i][3]
//         }
//         this.items.push(itemObj);
//         this.products.push(itemObj);
//         console.log(this.items);
//       }
//      },
//      error => {
//        console.log(error);
//      });
//   }

//   loadMenu(shopid){
//     console.log(shopid);
//     this.auth.setShop(shopid);
//     this.nav.navigateForward('menu');
//   }

//   logout(){
//     this.storage.set(this.sessionUser,null);
//     this.auth.setUser('');
//     console.log(this.storage.get(this.sessionUser));
//     this.nav.navigateRoot('home');
//   }

//   initializeSearch(){
//     this.items=this.products;
//   }

//   getProductDetails(ev: any) {
//     // Reset items back to all of the items
//     this.initializeSearch();

//     // set val to the value of the searchbar
//     let val = ev.target.value;

//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         if(item.shopname.toLowerCase().indexOf(val.toLowerCase()) > -1){
//           console.log(this.items);
//           return item;
//         };
//       });
//     }
//     return false;
//   }
// }

import { Component, OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit{

  userName;
  items= [];
  products=[];
  sessionUser:string;
  constructor(private storage:Storage,private alertCtrl: AlertController, private auth: UserService, private nav: NavController,public loadingController: LoadingController) { 
    this.userName = this.auth.getUser();
    console.log(this.auth.getUser());
    this.initializeItems();
  }
  ngOnInit() {
  }
  
  initializeItems(){
    this.auth.getShops().subscribe(shop => {
      console.log(shop);
      for(let i in shop){
        var itemObj = {
          shopid:shop[i][0],
          shopname:shop[i][1],
          description:shop[i][2],
          shoppic:shop[i][3]
        }
        this.items.push(itemObj);
        this.products.push(itemObj);
        console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });
  }

  loadMenu(shopid){
    console.log(shopid);
    this.auth.setShop(shopid);
    this.nav.navigateForward('menu');
  }

  logout(){
    this.storage.set("sessionUser",null);
    this.auth.setUser('');
    console.log(this.storage.get("sessionUser"));
    this.nav.navigateRoot('home');
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
        if(item.shopname.toLowerCase().indexOf(val.toLowerCase()) > -1){
          console.log(this.items);
          return item;
        };
      });
    }
    return false;
  }
}