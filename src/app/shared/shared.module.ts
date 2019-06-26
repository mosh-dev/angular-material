import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule {
}
