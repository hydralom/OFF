import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { RecherchePage } from '../recherche/recherche';
import { StatsPage } from "../stats/stats";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecherchePage;
  tab2Root = ContactPage;
  tab3Root = StatsPage;

  constructor() {

  }
}
