import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  onRemove() {
    let alert = this.alertCtrl.create({
      title: 'Suppression',
      message: 'Etes-vous sûr de vouloir le supprimer ?',
      buttons: [
        {
          text: 'Valider',
          handler: () => {
          //  rm le truc
          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }

}
