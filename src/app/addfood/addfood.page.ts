import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.page.html',
  styleUrls: ['./addfood.page.scss'],
})
export class AddfoodPage implements OnInit {

  createSuccess = false;
  addFoodCredentials = { itemname: '', description: '', price: '',shop: 0,foodpic:'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format',category:'' };
  
  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    console.log(this.auth.getShop());
    this.addFoodCredentials.shop = this.auth.getShop();
  }

  ngOnInit() {
  }

  public addFood() {
    this.auth.addFood(this.addFoodCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Food Added Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding Food.');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
  }

  loadManager(){
    this.nav.navigateBack('/manager');
    this.auth.setShop(this.addFoodCredentials.shop);
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
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
