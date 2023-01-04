import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './account/login-page/login-page.component';
import { FriendsComponent } from './friends/friends.component';
import { NetworkComponent } from './network/network.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', component:LoginPageComponent
  },
 {
  path: 'network',component: NetworkComponent
 },
 {
  path: 'friends',component: FriendsComponent
 },
 {
  path: 'settings',component: SettingsComponent
 },
 {
  path: 'home',
  loadChildren: () => import('./home/home/main/main.module').then(m => m.MainModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
