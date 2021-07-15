import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { ColorsState } from './states/colors.state';
import { StatusState } from './states/status.state';

import { ColorToolRoutingModule } from './color-tool-routing.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorToolRoutingModule,
    NgxsModule.forFeature([ColorsState,StatusState])
  ],
  exports: [ColorHomeComponent]
})
export class ColorToolModule { }
