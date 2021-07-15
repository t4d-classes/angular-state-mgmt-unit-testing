import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { ItemListComponent } from './components/item-list/item-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorsState } from './colors.state';
import { ColorToolRoutingModule } from './color-tool-routing.module';

@NgModule({
  declarations: [
    ItemListComponent,
    ColorFormComponent,
    ToolHeaderComponent,
    ColorHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorToolRoutingModule,
    NgxsModule.forFeature([ ColorsState ]),
  ],
})
export class ColorToolModule { }
