import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'addProduit.html'
})
export class AddProduitPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  addIngredients() {
    let alert = this.alertCtrl.create({
      title: 'Ingrédients',
      message: 'Choisissez des ingrédients',
      inputs: [
        {
          name: 'Ingrédients',
          placeholder: '...'
        },
      ],
      buttons: [
        {
          text: 'Valider',
          handler: () => {

          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }

  addAdditifs() {
    let alert = this.alertCtrl.create({
      title: 'Additifs',
      message: 'Choisissez des additifs',
      inputs: [
        {
          name: 'Additifs',
          placeholder: '...'
        },
      ],
      buttons: [
        {
          text: 'Valider',
          handler: () => {

          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }
}
