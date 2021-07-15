import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { UserAccountsModule } from './user-accounts/user-accounts.module';
import { CalcToolModule } from './calc-tool/calc-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAccountsModule,
    CalcToolModule,
    CarToolModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
