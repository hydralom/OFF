import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

import {ModifierProduitPage} from "../modifierProduit/modifierProduit";
import {RecherchePage} from "../recherche/recherche";

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
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
            this.navCtrl.push(RecherchePage, {
              rmItem: {
                "product_name": this.selectedItem.product_name
              }
            });
          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }

  boutonModifierPressed() {
    this.navCtrl.push(ModifierProduitPage, {
      item: this.selectedItem
    });
  }

}
