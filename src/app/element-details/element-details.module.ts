import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementDetailsPageRoutingModule } from './element-details-routing.module';

import { ElementDetailsPage } from './element-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementDetailsPageRoutingModule
  ],
  declarations: [ElementDetailsPage]
})
export class ElementDetailsPageModule {}
