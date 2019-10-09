import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-viewshops',
  templateUrl: './viewshops.page.html',
  styleUrls: ['./viewshops.page.scss'],
})
export class ViewshopsPage implements OnInit {

  items = [];
  createSuccess = false;
  shopid;

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    this.initializeItems();
    this.shopid = this.auth.getShop();
  }


  ngOnInit() {
  }

  initializeItems(){
    this.auth.viewShops().subscribe(shop => {
      for(let i in shop){
        console.log(shop);
          var shopobj = {
            shopid:shop[i][0],
            shopname:shop[i][1],
            description:shop[i][2],
            shoppic:shop[i][3]
          }
          this.items.push(shopobj);
          console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });
  }


  loadAdmin(){
    this.nav.navigateBack('/admin');
  }

}
