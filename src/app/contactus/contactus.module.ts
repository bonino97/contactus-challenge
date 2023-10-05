import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ContactusComponent,
  },
];

@NgModule({
  declarations: [ContactusComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactusModule {}
