import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus.component';
import { CheckboxModule } from 'primeng/checkbox';

const routes = [
  {
    path: '',
    component: ContactusComponent,
  },
];

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CheckboxModule,
  ],
})
export class ContactusModule {}
