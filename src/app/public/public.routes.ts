import {Routes} from '@angular/router'
import { FileComponent } from './display_file/file.component'
import { HomePageComponent } from './home_page/homepage.component'

export const publicRoutes: Routes = [
    {path: '', component:HomePageComponent},
    {path : 'display', component: FileComponent}
  ]
