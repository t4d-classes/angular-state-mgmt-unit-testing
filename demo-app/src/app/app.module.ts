import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { UserAccountsModule } from './user-accounts/user-accounts.module';
// import { ColorToolModule } from './color-tool/color-tool.module';
import { CalcToolModule } from './calc-tool/calc-tool.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UserAccountsModule,
    // ColorToolModule,
    CalcToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
