import {NgModule} from '@angular/core';
import {UsersListComponent} from './cmps/users-list.component';
import {UsersListRoutingModule} from './users-list-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UsersShellComponent } from './pages/users-shell/users-shell.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { HoverColorDirective } from './directives/hover-color.directive';
import { UserFilterComponent } from './cmps/user-filter/user-filter.component';
import { UserDetailsComponent } from './cmps/user-details/user-details.component';
import { ConfirmModalComponent } from './cmps/confirm-modal/confirm-modal.component';
import { ModalOutsideClickDirective } from './directives/modal-outside-click.directive';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersShellComponent,
    UserPreviewComponent,
    HoverColorDirective,
    UserFilterComponent,
    UserDetailsComponent,
    ConfirmModalComponent,
    ModalOutsideClickDirective
  ],
  imports: [
    UsersListRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: []
})
export class UsersListModule {
}
