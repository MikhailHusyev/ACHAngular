import {Routes} from '@angular/router'
import { FileComponent } from './display_file/file.component'
import { HomepageComponent } from './home_page/homepage.component'

export const publicRoutes: Routes = [
    {path: '', component:HomepageComponent},
    {path : 'display', component: FileComponent}
]
