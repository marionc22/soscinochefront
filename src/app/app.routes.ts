import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WatchedComponent } from './watched/watched.component';
import { ToWatchComponent } from './to-watch/to-watch.component';

const ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'vus', component: WatchedComponent },
    { path: 'avoir', component: ToWatchComponent },
  ];
  
  export { ROUTES };