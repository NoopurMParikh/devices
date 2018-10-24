import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { DeviceGroupComponent } from './device-group/device-group.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceCrudComponent } from './device-crud/device-crud.component';
import { DeviceGroupCrudComponent } from './device-group-crud/device-group-crud.component';
import { LoginComponent } from './login/login.component';

import { RouterGuardService as AuthGuard } from './services/router-guard.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'device', component: DeviceComponent, canActivate: [AuthGuard]},
  {path: 'device/:id', component: DeviceCrudComponent, canActivate: [AuthGuard]},
  {path: 'device_group', component: DeviceGroupComponent, canActivate: [AuthGuard]},
  {path: 'device_group/:id', component: DeviceGroupCrudComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'login/:parent', component: LoginComponent},
  {path: '', component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    RoutingComponentComponent,
    DeviceGroupComponent,
    DeviceCrudComponent,
    DeviceGroupCrudComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
