import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppRoverComponent } from './components/app-rover/app-rover.component';
import { AppInsightComponent } from './components/app-insight/app-insight.component';
import { AppSocialComponent } from './components/app-social/app-social.component';
import { AppIndexComponent } from './components/app-index/app-index.component';
import { AppPicComponent } from './components/app-pic/app-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppNavComponent,
    AppHeaderComponent,
    AppRoverComponent,
    AppInsightComponent,
    AppSocialComponent,
    AppIndexComponent,
    AppPicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
