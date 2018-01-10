import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  icons: string[];
  items: Array<{ title: string, note: string }>;

  constructor(public navCtrl: NavController) {
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
