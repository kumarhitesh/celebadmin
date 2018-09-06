import { Routes, RouterModule } from '@angular/router';
import { SessionHomeComponent } from './session-home/session-home.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { SessionLoginComponent } from './session-login/session-login.component';
import { SessionEditDeleteComponent } from './session-edit-delete/session-edit-delete.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    { path: 'login', component: SessionLoginComponent },
    { path: 'home', component: SessionHomeComponent },
    { path: 'createSession', component: SessionCreateComponent },
    { path: 'sessiondetails/:sessionId', component: SessionEditDeleteComponent }
];

