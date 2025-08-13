import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component"
import { DetailsComponent } from "./pages/details/details.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'HomePage'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details'
    }
];