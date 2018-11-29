// import { DirectoryComponent } from './directory/directory.component';
// import { HomeComponent } from './home/home.component';
// import { Routes, RouterModule } from "@angular/router";

// export const APP_ROUTES: Routes = [
//     { path: 'directory/', component: DirectoryComponent },
//     { path: '', component: HomeComponent }
// ];

import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component'

export const APP_ROUTES = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'directory',
        component: DirectoryComponent
    },
    // {
    //     path: 'directory/:ninja',
    //     component: DirectoryComponent
    // }
]

// export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
