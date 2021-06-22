import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { WeatherApp } from './pages/weather-app/weather-app.component';
import { Favorites } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: WeatherApp },
  { path: 'favorites', component: Favorites },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

