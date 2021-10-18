import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './cmps/user-details/user-details.component';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersShellComponent,
    children: [
      { path: ':id', component: UserDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule {
}
