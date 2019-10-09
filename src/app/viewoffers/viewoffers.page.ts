import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-viewoffers',
  templateUrl: './viewoffers.page.html',
  styleUrls: ['./viewoffers.page.scss'],
})
export class ViewoffersPage implements OnInit {

  shopid;
  items = [];
  createSuccess = false;
  
  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController,public loadingController: LoadingController) { 
    this.initializeItems();
    this.presentLoadingWithOptions();
    this.shopid = this.auth.getShop()
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.viewOffers().subscribe(offer => {
      for(let i in offer){
        console.log(offer);
          var offerObj = {
            offerid:offer[i][0],
            offername:offer[i][1],
            offerdescription:offer[i][2],
            offerpic:offer[i][3],
            offershop:offer[i][4]
          }
          this.items.push(offerObj);
          console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });
  }

  loadManager(){
    this.nav.navigateBack('/manager');
    this.auth.setShop(this.shopid);
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

}
