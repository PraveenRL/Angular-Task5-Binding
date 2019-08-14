import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';


const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent,
  children: [
    { path : 'property', component : PropertyComponent },
    { path : 'event', component : EventComponent },
    { path : 'one-way', component : OneWayComponent },
    { path : 'two-way', component : TwoWayComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
