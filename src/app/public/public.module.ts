import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileComponent } from './display_file/file.component';
import { RouterModule } from '@angular/router';
import { publicRoutes} from './public.routes';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    FileComponent
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