import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  cardExempleViewShow: Boolean = false;

  constructor(public navCtrl: NavController) {

  }

  ouvrirFermerCard(){
    if( this.cardExempleViewShow ) {
      this.cardExempleViewShow = false;
    } else {
      this.cardExempleViewShow = true;
    }
  }

  fermerInfosParkingViaBouton(){
    this.cardExempleViewShow = false;
  }

}
