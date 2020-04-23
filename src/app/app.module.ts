import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module'
@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    HomepageComponent,
    ErrorboxComponent,
    NoerrorpageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    PublicModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
