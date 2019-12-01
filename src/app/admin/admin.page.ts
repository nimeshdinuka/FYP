import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from '../api/user.service';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  sessionUser:string;

  constructor(private storage:Storage, private auth: UserService, private nav: NavController) { }

  ngOnInit() {
  }

  logout(){
    this.storage.set("sessionUser",null);
    this.auth.setUser('');
    console.log(this.storage.get("sessionUser"));
    this.nav.navigateRoot('login');
  }

}
