import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
