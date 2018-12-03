import {Routes} from '@angular/router'
import {FirstComponent} from './components/trab/first/first.component'
import {SecondComponent} from './components/trab/second/second.component'

export const rotaconstante:Routes = [
    {path: 'first', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    {path: '**', redirectTo: 'first'}
]