import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GridViewComponent } from './grid-view/grid-view';
import { ListViewComponent } from './list-view/list-view';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GridViewComponent,
    ListViewComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
