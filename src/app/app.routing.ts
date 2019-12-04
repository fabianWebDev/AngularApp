import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPicComponent } from './components/app-pic/app-pic.component';
import { AppInsightComponent } from './components/app-insight/app-insight.component';
import { AppRoverComponent } from './components/app-rover/app-rover.component';
import { AppIndexComponent } from './components/app-index/app-index.component';

const appRoutes: Routes = [
    { path: 'Daily Cosmos Picture', component: AppPicComponent },
    { path: 'InSight Mission', component: AppInsightComponent },
    { path: 'Rover Curiosity Mission', component: AppRoverComponent },
    { path: '', component: AppIndexComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);