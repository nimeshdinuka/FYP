// import { Component } from '@angular/core';
// import { UserService } from '../api/user.service';
// import { AlertController,NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   username;
  
//   constructor( private auth: UserService,private nav: NavController) {
//     this.username = this.auth.getUser();
//     console.log(this.auth.getUser());
//   }

//   loadRestaurant(){
//     this.auth.setUser(this.username);
//     this.nav.navigateForward('/restaurants');
//   }
// }

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

  sliderConfig = {
    slidesPerView : 1.4,
    centeredSlides: true,
    spaceBetween:10
  }

  suggestItems = [];
  
  constructor( private auth: UserService,private nav: NavController) {
    this.username = this.auth.getUser();
    console.log(this.auth.getUser());
    this.initializeItems();
  }

  loadRestaurant(){
    this.auth.setUser(this.username);
    this.nav.navigateForward('/restaurants');
  }

  initializeItems(){
    this.auth.getSuggestItems().subscribe(food => {
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
          this.suggestItems.push(foodObj);
          console.log(this.suggestItems);
        }else{
          console.log("No Food Suggestions");
        }
         
      }
     },
     error => {
       console.log(error);
     });
  }
}
