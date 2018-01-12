import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'addProduit.html'
})
export class AddProduitPage {
  ingredients: Array<String> = [];
  additifs: Array<String> = [];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  addIngredients() {
    let alert = this.alertCtrl.create({
      title: 'Ingrédients',
      message: 'Nom usuel de l\'ingrédient',
      inputs: [
        {
          name: 'ingredient',
          placeholder: 'Huile de ...'
        },
      ],
      buttons: [
        {
          text: 'Valider',
          handler: data => {
            this.ingredients.push(data.ingredient);
            document.getElementById("ingredients").value = this.ingredients.toString();
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
      message: 'Nom usuel de l\'additif',
      inputs: [
        {
          name: 'additif',
          placeholder: 'Acide lactique'
        },
      ],
      buttons: [
        {
          text: 'Valider',
          handler: data => {
            this.additifs.push(data.additif);
            document.getElementById("additifs").value = this.additifs.toString();
          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }
}
