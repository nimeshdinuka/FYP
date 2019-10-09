import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultmapPage } from './defaultmap.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultmapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DefaultmapPage]
})
export class DefaultmapPageModule {}
