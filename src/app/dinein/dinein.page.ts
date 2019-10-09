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

  constructor(public nav:NavController) { }

  ngOnInit() {
  }


  backToCart(){
    this.nav.navigateBack('/cart');
  }

}
