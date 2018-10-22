import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTableComponent} from '../components/data-table/data-table.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {ChartComponent} from '../components/chart/chart.component';
import {NewInvoiceComponent} from '../components/new-invoice/new-invoice.component';
import {AllInvoiceComponent} from '../components/all-invoice/all-invoice.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';


const routes: Routes = [
  {path: 'dataTable', component: DataTableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newInvoice', component: NewInvoiceComponent},
  {path: 'allInvoice', component: AllInvoiceComponent},
  {path: 'charts', component: ChartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule {
}

export const routingComponents = [
  DataTableComponent,
  DashboardComponent,
  ChartComponent,
  NewInvoiceComponent,
  AllInvoiceComponent
];
