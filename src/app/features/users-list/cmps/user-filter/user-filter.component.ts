import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { UserPageActions } from '../../state/actions';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFilterComponent implements OnInit, OnDestroy {
  searchInput: string = ''
  searchInputChanged: Subject<string> = new Subject<string>()
  inputSub: Subscription | undefined
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.inputSub = this.searchInputChanged.pipe(debounceTime(500), distinctUntilChanged()).subscribe(txt => {
      this.store.dispatch(UserPageActions.loadUsers({ searchText: txt }))
    })
  }

  ngOnDestroy() {
    this.inputSub?.unsubscribe()
  }

  onInputChange(searchInput: string) {
    this.searchInputChanged.next(searchInput)
  }

}
