import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginSuccess = false;
  loginCredentials = { username: '', password: '' };
  username;
  sessionUser:string;
  savedUser;
  loggedinUser:string;
  gender:string;
  
  constructor(private storage: Storage,private alertCtrl: AlertController, private auth: UserService, private nav: NavController ,public toastController: ToastController) {

    // storage.get(this.sessionUser).then((val) => {
    //   console.log('Logged in User : ', val);
    //   if(val != null){
    //     this.sessionPass(val);
    //   }
      
    // });

    storage.get("sessionUser").then((val) => {
      console.log('Logged in User : ', val.fname);
      if(val.fname != null){
        this.sessionPass(val.fname);
        this.auth.setGender(val.gender);
      }else{
        console.log("No loggedin Data");
      }
      
    });
   }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
  ngOnInit() {
    this.username = this.auth.getUser();
    console.log(this.auth.getUser());
  }

  public sessionPass(val){
    this.getUserType(val);
    console.log(val);
  }


  public login() {
    if (this.loginCredentials.username !== '' && this.loginCredentials.password !== '') {
      this.auth.login(this.loginCredentials).subscribe(success => {
        if (success !== 'error') {
          console.log(success);
          if(success[0][7] == 'customer'){
            this.presentToast('Login Successful');
            this.auth.setUser(success[0][2]);
            //this.storage.set("sessionUser", success[0][2]);

            var data = {
              fname: success[0][2],
              gender: success[0][9]
            }

            this.storage.set("sessionUser",data);
            console.log(data);
            this.auth.setGender(success[0][9]);

            this.nav.navigateRoot('home');
          }else if(success[0][7] == 'manager'){
            this.presentToast('Login Successful');
            this.auth.setShop(success[0][8]);
            this.auth.setUser(success[0][2]);
            this.storage.set("sessionUser", success[0][2]);
            this.nav.navigateRoot('manager');
          }else if(success[0][7] == 'admin'){
            this.presentToast('Login Successful');
            this.storage.set("sessionUser", success[0][2]);
            this.nav.navigateRoot('admin');
          }
          // this.loginSuccess = true;
          // this.showPopup('Success', 'Login Successful.');
        } else {
          this.presentToast('Invalid Credentials');
        }
      },
        error => {
          this.presentToast('Error');
        });
    } else {
      this.presentToast('Please Enter Credentials');
    }
  }

  // public login() {
  //   if (this.loginCredentials.username !== '' && this.loginCredentials.password !== '') {
  //     this.auth.login(this.loginCredentials).subscribe(success => {
  //       if (success !== 'error') {
  //         console.log(success);
  //         if(success[0][7] == 'customer'){
  //           this.presentToast('Login Successful');
  //           this.auth.setUser(success[0][2]);
  //           this.storage.set(this.sessionUser, success[0][2]);
            
  //           this.nav.navigateRoot('restaurants');
            
  //         }else if(success[0][7] == 'manager'){
  //           this.presentToast('Login Successful');
  //           this.auth.setShop(success[0][8]);
  //           this.auth.setUser(success[0][2]);
  //           this.storage.set(this.sessionUser, success[0][2]);
  //           this.nav.navigateRoot('manager');
  //         }else if(success[0][7] == 'admin'){
  //           this.presentToast('Login Successful');
  //           this.storage.set(this.sessionUser, success[0][2]);
  //           this.nav.navigateRoot('admin');
  //         }
  //         // this.loginSuccess = true;
  //         // this.showPopup('Success', 'Login Successful.');
  //       } else {
  //         this.presentToast('Invalid Credentials');
  //       }
  //     },
  //       error => {
  //         this.presentToast('Error');
  //       });
  //   } else {
  //     this.presentToast('Please Enter Credentials');
  //   }
  // }


  // async showPopup(title, text) {
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     message: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.loginSuccess) {
              
  //              //this.nav.navigateForward('/restaurants');
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  public getUserType(val) {
      this.auth.getUserType(val).subscribe(success => {
        console.log(success);
        if (success !== 'error') {
          console.log(success);
          if(success[0][7] == 'customer'){
            this.nav.navigateRoot('restaurants');
            this.auth.setUser(success[0][2]);
          }else if(success[0][7] == 'manager'){
            this.nav.navigateRoot('manager');
            this.auth.setUser(success[0][2]);
            this.auth.setShop(success[0][8]);
          }else if(success[0][7] == 'admin'){
            this.nav.navigateRoot('admin');
            this.auth.setUser(success[0][2]);
          }
        } else {
          this.presentToast('Invalid Credentials');
        }
      },
        error => {
          this.presentToast('Error');
        });
   
  }


  loadRestaurant(){
    this.auth.setUser(this.username);
    this.nav.navigateForward('/restaurants');
  }
}
