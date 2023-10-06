import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { PricingComponent } from './pricing.component';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
  },
];

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
})
export class PricingModule {}
