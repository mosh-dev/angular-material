import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './components/data-table/data-table.component';
import {RouterModule} from '@angular/router';
import {
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {AddUpdateComponent} from './components/data-table/add-update/add-update.component';

@NgModule({
  declarations: [
    DataTableComponent,
    AddUpdateComponent
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
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  entryComponents: [
    AddUpdateComponent
  ]
})
export class DataTableModule {
}
