import {Component} from '@angular/core';
import {NavController, AlertController, NavParams} from 'ionic-angular';
import { MenuController } from "ionic-angular";

@Component({
  selector: 'page-modifierProduit',
  templateUrl: 'modifierProduit.html'
})
export class ModifierProduitPage {
  tabIngredients: Array<String> = [];
  tabAdditifs: Array<String> = [];

  activeMenu: string;

  selectedItem: any = [];

  ingredients: String = "";
  additifs: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public menu: MenuController) {
    this.selectedItem = navParams.get('item');
    this.afficheMenuIngredient();
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

  afficheMenuIngredient(){
    this.activeMenu = 'menuIngredient';
    this.menu.enable(true, 'menuIngredient');
    this.menu.enable(false, 'menuAdditif');
  }

  afficheMenuAdditif(){
    this.activeMenu = 'menuAdditif';
    this.menu.enable(true, 'menuAdditif');
    this.menu.enable(false, 'menuIngredient');
  }
}
