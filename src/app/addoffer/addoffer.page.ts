import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.page.html',
  styleUrls: ['./addoffer.page.scss'],
})
export class AddofferPage implements OnInit {

  createSuccess = false;
  addOfferCredentials = { title: '', description: '',shop: 0};

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    console.log(this.auth.getShop());
    this.addOfferCredentials.shop = this.auth.getShop();
  }

  ngOnInit() {
  }

  public addOffer() {
    this.auth.addOffer(this.addOfferCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Offer Added Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding Offer.');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
  }

  loadManager(){
    this.nav.navigateBack('/manager');
    this.auth.setShop(this.addOfferCredentials.shop);
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
