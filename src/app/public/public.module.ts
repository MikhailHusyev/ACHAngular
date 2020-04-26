import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileComponent } from './display_file/file.component';
import { HomePageComponent} from './home_page/homepage.component';
import { ErrorComponent } from './components/error_message/errormsg.component';
import { RouterModule } from '@angular/router';
import { publicRoutes} from './public.routes';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    FileComponent,
    HomePageComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(publicRoutes)
  ],
  providers: [],
  bootstrap: [FileComponent],

})
export class PublicModule { }