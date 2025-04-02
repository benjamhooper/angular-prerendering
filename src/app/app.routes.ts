import { Routes } from '@angular/router';
import { ExternalApiComponent } from './external-api/external-api.component';
import { EntryComponent } from './entry/entry.component';

export const routes: Routes = [
    { path: '', component: EntryComponent },
    { path: 'external-api', component: ExternalApiComponent },
];
