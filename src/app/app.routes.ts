import { Routes } from '@angular/router';
import { TopComponent } from './pages/top/top.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { MarkerComponent } from './pages/marker/marker.component'
import { LocationSimpleComponent } from './pages/location-simple/location-simple.component';
import { WebglComponent } from './pages/webgl/webgl.component';

export const routes: Routes = [
  // {
  //   path: '', redirectTo: () => {
  //     return '/ethereum'
  //   }, pathMatch: 'full'
  // },
  // { path: '', redirectTo: redirectToFn, pathMatch: 'full' },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'marker', component: MarkerComponent },
  { path: 'locale-simple', component: LocationSimpleComponent },
  { path: 'webgl', component: WebglComponent }
];
