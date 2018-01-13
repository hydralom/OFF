import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  liste_de_produit;
  items;

  /*
   * Informations affichées sur la page recherche
   */

  constructor(public navCtrl: NavController, public http: HttpClient) {
    /*this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }*/
    this.remplirListe(this.liste_de_produit);
  }

  ngOnInit():void{
    this.http.get("../../assets/data/csv_converti.json")
      .subscribe( data => {
        this.liste_de_produit = data;
      })
  }

  remplirListe(liste){
    Object.keys(liste).length
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
