import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SessionService } from './session-services/session.service';
import { AppComponent } from './app.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { SessionHomeComponent } from './session-home/session-home.component';
import { SessionHeaderComponent } from './session-header/session-header.component';
import { SessionLoginComponent } from './session-login/session-login.component';
import { SessionEditDeleteComponent } from './session-edit-delete/session-edit-delete.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchFilterPipe } from './session-home/session-home.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SessionCreateComponent,
    SessionHomeComponent,
    SessionHeaderComponent,
    SessionLoginComponent,
    SearchFilterPipe,
    SessionEditDeleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 2000
    })
  ],
  providers: [HttpClient, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
