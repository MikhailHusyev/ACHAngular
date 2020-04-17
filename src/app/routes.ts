import {Routes} from '@angular/router';
import {publicRoutes} from './public/public.routes'

export const appRoutes:Routes=[
    {path: '', loadChildren: './public/public.module#PublicModule'}
]