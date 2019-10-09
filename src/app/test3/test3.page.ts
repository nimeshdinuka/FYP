import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { Camera,CameraOptions  } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})

@Pipe({ name: 'safe' })
export class Test3Page implements PipeTransform  {

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  createSuccess = false;
  addFoodCredentials = { itemname: '', description: '', price: '',shop: 0 ,picture:''};
  
  constructor(private sanitizer: DomSanitizer,private alertCtrl: AlertController, private auth: UserService, private nav:NavController,private camera: Camera,public actionSheetController: ActionSheetController,private file: File) { 
    console.log(this.auth.getShop());
    this.addFoodCredentials.shop = this.auth.getShop();
  }

  ngOnInit() {
  }

  transform(url) {
    
    this.addFoodCredentials.picture = url;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.addFoodCredentials.picture);
    
  }

  public addFood() {
    this.auth.addFood(this.addFoodCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Food Added Successfully.');
        console.log(this.addFoodCredentials.picture);
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

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       console.log(base64Image);
       this.transform(base64Image);
    }, (err) => {
      // Handle error
      console.log(err);
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

}
