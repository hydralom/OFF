import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  liste_de_produit;
  allItems;
  items : any = [];
  itemsSize;
  SIZE = 100;
  min:number=0;
  max = this.SIZE;

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
    // this.remplirListe(this.liste_de_produit);
  }

  ngOnInit(): void {
    this.http.get("../../assets/data/csv_converti.json")
      .subscribe(data => {
        // this.liste_de_produit = data;
        this.items = data;
        /*this.allItems = data;

        let size = 0, key;
        for (key in this.allItems) {
          if (this.allItems.hasOwnProperty(key)) size++;
        }
        this.displayItems();*/
      })
  }

  /*nextPage() {
    this.min = this.max;
    if (this.max + this.SIZE <= this.itemsSize) {
      this.max += this.SIZE;
    } else {
      this.max += (this.itemsSize - this.max);
    }
    this.displayItems();
  }

  previousPage() {
    if (this.min - this.SIZE >= 0) {
      this.max = this.min;
      this.min -= this.SIZE;
    }
    this.displayItems();
  }

  displayItems() {
    this.items = [];
    console.log(this.items);
    console.log(this.min);
    console.log(this.max);
    for (let i = this.min; i < this.max; i++) {
      this.items.push(this.allItems[i]);
    }
  }

  // remplirListe(liste){
  //   Object.keys(liste).length
  // }
*/
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  oInfinite(infiniteScroll:any) {
    console.log('doInfinite, start is currently '+this.min);
    this.min+=50;

    this.items.then(()=>{
      infiniteScroll.complete();
    });

  }

}
