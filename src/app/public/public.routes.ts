import {Routes} from '@angular/router'
import { FileComponent } from './display_file/file.component'
import { HomePageComponent } from './home_page/homepage.component'
import { ErrorComponent } from './components/error_message/errormsg.component'

export const publicRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path : 'display', component: FileComponent},
    {path: 'errormessage', component: ErrorComponent},
]