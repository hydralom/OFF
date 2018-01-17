import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-modifierProduit',
  templateUrl: 'modifierProduit.html'
})
export class ModifierProduitPage {
  cardIngredient: Boolean = false;
  cardAdditif: Boolean = false;

  selectedItem: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  ouvrirFermerCardIngredient(){
    this.cardAdditif = false;
    if( this.cardIngredient ) {
      this.cardIngredient = false;
    } else {
      this.cardIngredient = true;
    }
  }

  ouvrirFermerCardAdditif(){
    this.cardIngredient = false;
    if( this.cardAdditif ) {
      this.cardAdditif = false;
    } else {
      this.cardAdditif = true;
    }
  }

  boutonFermerCardIngredient(){
    this.cardIngredient = false;
  }

  boutonFermerCardAdditif(){
    this.cardAdditif = false;
  }
}
