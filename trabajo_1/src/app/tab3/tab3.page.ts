import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}

  ngOnInit(){}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Información de la aplicación',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet posuere purus. Praesent blandit lorem accumsan, ullamcorper nulla id, venenatis enim. Nulla nulla nisl, posuere posuere libero ac',
      buttons: ['OK']
    });

    await alert.present();
  }

}
