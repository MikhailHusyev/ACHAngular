import {Routes} from '@angular/router'
import { FileComponent } from './display_file/file.component'
import { HomepageComponent } from './home_page/homepage.component'
import { ErrorboxComponent } from './error_box/errorbox.component'
import { SpecificationComponent } from './specification/specification.component'

export const publicRoutes: Routes = [
    {path: '', component:HomepageComponent},
    {path: 'error', component:SpecificationComponent},
    {path : 'display', component: FileComponent}
]
