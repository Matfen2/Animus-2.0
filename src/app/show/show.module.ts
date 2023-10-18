import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowConsolePageComponent } from './show-console-page/show-console-page.component';
import { ShowDirective } from '../show.directive';

const routesAnimus: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'show-console/:id', component: ShowConsolePageComponent},
]

@NgModule({
  declarations: [
    MainPageComponent,
    ShowConsolePageComponent,
    ShowDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesAnimus),
  ]
})
export class ShowModule { }
