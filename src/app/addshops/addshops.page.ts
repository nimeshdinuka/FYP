import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-addshops',
  templateUrl: './addshops.page.html',
  styleUrls: ['./addshops.page.scss'],
})
export class AddshopsPage implements OnInit {

  addShopCredentials = { shopname: '', description: '',shoppic:'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format'};
  createSuccess = false;

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { }


  ngOnInit() {
  }

  public addShops() {
    this.auth.addShops(this.addShopCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Shop Added Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding Shop.');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
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




  loadAdmin(){
    this.nav.navigateBack('/admin');
  }


}
