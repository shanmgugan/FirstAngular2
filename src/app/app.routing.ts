import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './components/user.components';
import {AboutComponent} from './components/about.component';

const appRoutes : Routes =[
    {
        path: '',
        component: UserComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);