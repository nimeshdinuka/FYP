import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.page.html',
  styleUrls: ['./viewmanager.page.scss'],
})
export class ViewmanagerPage implements OnInit {

  items = [];
  createSuccess = false;
  shopname;

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    this.initializeItems();
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.viewManagers().subscribe(manager => {
      console.log(manager);
      for(let i in manager){
          var mgrObj = {
            managerid:manager[i][0],
            managerfirstname:manager[i][2],
            managerlastname:manager[i][3],
            managermobile:manager[i][4],
            manageremail:manager[i][5],
            managerusername:manager[i][1],
            managershopid:manager[i][8],
            managershopname:''
          }
          this.items.push(mgrObj);
          console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });

     this.auth.getShops().subscribe(shops =>{
       console.log(shops);
      console.log(this.items);
      for(let i in this.items){
        for(let j in shops){
          console.log(i);
          console.log(j);
          console.log(this.items[i].managershopid);
          console.log(shops[j][0]);
          if(this.items[i].managershopid == shops[j][0]){
            this.items[i].managershopname = shops[j][1];
          }
        }
      }
    });
  }
}