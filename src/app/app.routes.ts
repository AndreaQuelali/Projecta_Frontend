import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.routes').then(m => m.projectsRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
