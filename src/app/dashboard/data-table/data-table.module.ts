import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './components/data-table/data-table.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataTableComponent
      }
    ]),
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class DataTableModule {
}
