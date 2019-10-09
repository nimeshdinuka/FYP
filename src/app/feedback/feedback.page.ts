import { Component , OnInit} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  items = [];
  createSuccess = false;
  feedbackData = { category: '', comment: ''};

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController) { 
  }

  ngOnInit() {
  }

  public submitFeedback() {
    if (this.feedbackData.category !== '' && this.feedbackData.comment !== '' ) {
    this.auth.submitFeedback(this.feedbackData).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Feedback Submitted.');
      } else {
        this.showPopup('Error', 'Problem adding feedback.');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
    } else {
      this.showPopup('Error', 'Please Fill All Details.');
    }
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
              this.nav.navigateForward('/home');

            }
          }
        }
      ]
    });
    await alert.present();
  }
}
