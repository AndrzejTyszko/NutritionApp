import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedDataPage } from './saved-data.page';

const routes: Routes = [
  {
    path: '',
    component: SavedDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedDataPageRoutingModule {}
