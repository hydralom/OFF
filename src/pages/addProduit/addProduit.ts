import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-addProduit',
  templateUrl: 'addProduit.html'
})
export class AddProduitPage {
  tabIngredients: Array<String> = [];
  tabAdditifs: Array<String> = [];

  infoProd = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  ngOnInit(): void {

  }

  addProd() {
    console.log(this.infoProd);
    this.infoProd = {};
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

          }
        },
        {text: 'Annuler'}
      ]

    });
    alert.present();
  }

}
