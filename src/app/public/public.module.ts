import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { publicRoutes} from './public.routes';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import { FileComponent } from './display_file/file.component';
import { ErrorboxComponent} from './error_box/errorbox.component';
import { ErrorpageComponent} from './error_page/errorpage.component';
import { HomepageComponent} from './home_page/homepage.component';
import { NoerrorpageComponent} from './no_error_page/noerrorpage.component';

@NgModule({
  declarations: [
    FileComponent,
    ErrorboxComponent,
    ErrorpageComponent,
    HomepageComponent,
    NoerrorpageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(publicRoutes)
  ],
  providers: [],
  bootstrap: [FileComponent]

})
export class PublicModule { }
