import { Component } from '@angular/core';

import { AddProduitPage } from '../addProduit/addProduit';
import { RecherchePage } from '../recherche/recherche';
import { StatsPage } from "../stats/stats";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecherchePage;
  tab2Root = AddProduitPage;
  tab3Root = StatsPage;

  constructor() {

  }
}
