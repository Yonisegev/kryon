import {NgModule} from '@angular/core';
import {UsersListComponent} from './cmps/users-list.component';
import {UsersListRoutingModule} from './users-list-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersShellComponent,
    UserPreviewComponent
  ],
  imports: [
    UsersListRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class UsersListModule {
}
