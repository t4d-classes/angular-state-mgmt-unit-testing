import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { ColorToolState } from './states/color-tool.state';

import { ColorHomeComponent } from './components/color-home/color-home.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot(
      [ColorToolState],
      { developmentMode: !environment.production })
  ],
  exports: [ColorHomeComponent]
})
export class ColorToolModule { }
