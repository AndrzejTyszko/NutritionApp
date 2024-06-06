import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedDataPageRoutingModule } from './saved-data-routing.module';

import { SavedDataPage } from './saved-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedDataPageRoutingModule
  ],
  declarations: [SavedDataPage]
})
export class SavedDataPageModule {}
