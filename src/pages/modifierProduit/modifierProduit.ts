import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from "../item-details/item-details";
import {RecherchePage} from "../recherche/recherche";

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

  ouvrirFermerCardIngredient() {
    this.cardAdditif = false;
    if (this.cardIngredient) {
      this.cardIngredient = false;
    } else {
      this.cardIngredient = true;
    }
  }

  ouvrirFermerCardAdditif() {
    this.cardIngredient = false;
    if (this.cardAdditif) {
      this.cardAdditif = false;
    } else {
      this.cardAdditif = true;
    }
  }

  boutonFermerCardIngredient() {
    this.cardIngredient = false;
  }

  boutonFermerCardAdditif() {
    this.cardAdditif = false;
  }

  retourDetail() {
    this.navCtrl.popTo(ItemDetailsPage);
  }

  addProd() {
    this.navCtrl.push(RecherchePage, {
      item: {
        "code": this.selectedItem.code,
        "url": this.selectedItem.url,
        "creator": this.selectedItem.creator,
        "created_datetime": this.selectedItem.created_datetime,
        "last_modified_datetime": this.selectedItem.last_modified_datetime,
        "product_name": this.selectedItem.product_name,
        "brands": this.selectedItem.brands,
        "countries_fr": this.selectedItem.countries_fr,
        "ingredients_text": this.selectedItem.ingredients_text,
        "serving_size": this.selectedItem.serving_size,
        "additives_n": this.selectedItem.additives_n,
        "additives_fr": this.selectedItem.additives_fr,
        "ingredients_from_palm_oil_n": this.selectedItem.ingredients_from_palm_oil_n,
        "ingredients_that_may_be_from_palm_oil_n": this.selectedItem.ingredients_that_may_be_from_palm_oil_n,
        "nutrition_grade_fr": this.selectedItem.nutrition_grade_fr,
        "states_fr": this.selectedItem.states_fr,
        "energy_100g": this.selectedItem.energy_100g,
        "fat_100g": this.selectedItem.fat_100g,
        "saturated_fat_100g": this.selectedItem.saturated_fat_100g,
        "trans_fat_100g": this.selectedItem.trans_fat_100g,
        "cholesterol_100g": this.selectedItem.cholesterol_100g,
        "carbohydrates_100g": this.selectedItem.carbohydrates_100g,
        "sugars_100g": this.selectedItem.sugars_100g,
        "fiber_100g": this.selectedItem.fiber_100g,
        "proteins_100g": this.selectedItem.proteins_100g,
        "salt_100g": this.selectedItem.salt_100g,
        "sodium_100g": this.selectedItem.sodium_100g,
        "vitamin_a_100g": this.selectedItem.vitamin_a_100g,
        "vitamin_c_100g": this.selectedItem.vitamin_c_100g,
        "calcium_100g": this.selectedItem.calcium_100g,
        "iron_100g": this.selectedItem.iron_100g,
        "nutrition_score_fr_100g": this.selectedItem.nutrition_score_fr_100g
      }
    });
  }
}
