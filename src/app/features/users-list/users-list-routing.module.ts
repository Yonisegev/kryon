import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UsersShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule {
}
