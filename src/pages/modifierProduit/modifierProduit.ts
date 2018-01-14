import {Component} from '@angular/core';
import {NavController, AlertController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-modifierProduit',
  templateUrl: 'modifierProduit.html'
})
export class ModifierProduitPage {
  tabIngredients: Array<String> = [];
  tabAdditifs: Array<String> = [];

  selectedItem: any = [];

  ingredients: String = "";
  additifs: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.selectedItem = navParams.get('item');
  }

  addProd() {

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
            this.tabIngredients.push(data.ingredient);
            this.setIngredients();
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
            this.tabAdditifs.push(data.additif);
            this.setAdditifs();
          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }

  setIngredients() {
    //this.infoProd.ingredients = this.tabIngredients.toString();
  }

  setAdditifs() {
    //this.infoProd.additives = this.tabAdditifs.toString();
  }
}
