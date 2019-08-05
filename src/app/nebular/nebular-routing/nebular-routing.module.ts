import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NebularComponent} from '../nebular.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NebularComponent,
        children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class NebularRoutingModule {
}
