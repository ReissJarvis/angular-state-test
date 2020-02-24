import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateV2Service } from './state-v2.service';
import { filter, flatMap, map, tap } from 'rxjs/operators';
import { stringify } from 'querystring';
import { RandomUserGenerator } from './random-user.generator';
import { UserService } from './user.service';
import { User } from '../shared/models/user.model';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent, ConfirmationDialogData } from './components/confirmation-dialog/confirmation-dialog.component';

interface V2PageState {
  loading: boolean;
  users: User[];
  adding: boolean;
  deletingUserId?: number;
}

const initialState: V2PageState = {
  loading: false,
  users: [],
  adding: false,
}

@Component({
  selector: 'app-state-service-v2',
  templateUrl: './state-service-v2.component.html',
  styleUrls: ['./state-service-v2.component.scss'],
  providers: [StateV2Service]
})
export class StateServiceV2Component implements OnInit {
  currentState$: Observable<V2PageState> = this.vm.select();
  fetchUsersEffect$ = new Subject();
  clearUsersEffect$ = new Subject<Event>();
  addUserEvent$ = new Subject<Event>();
  deleteUserEvent$ = new Subject<User>();


  constructor(
    private vm: StateV2Service<V2PageState>,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.userService._populateStubData(3);
  }

  ngOnInit() {
    this.vm.setState(initialState);

    this.setupEffects();

    this.fetchUsersEffect$.next();
  }

  setupEffects() {
    this.vm.connectEffect(
      this.fetchUsersEffect$
        .pipe(
          tap(() => this.vm.setState({loading: true})),
          flatMap(() => this.userService.get()),
          map(users => this.vm.setState({ loading: false, users }))
        )
    );

    this.vm.connectEffect(
      this.addUserEvent$
        .pipe(
          tap(() => this.vm.setState({ adding: true })),
          flatMap(() => this.userService.add(RandomUserGenerator.newUser())),
          tap(() => this.vm.setState({ adding: false })),
          tap(() => this.fetchUsersEffect$.next())
        )
    );

    this.vm.connectEffect(
      this.clearUsersEffect$
        .pipe(
          tap(() => this.vm.setState({ users: [] })),
        )
    );

    this.vm.connectEffect(
      this.deleteUserEvent$
        .pipe(
          flatMap(user =>
            this.dialog
              .open(ConfirmationDialogComponent, {
                data: {
                  user
                } as ConfirmationDialogData
              })
              .afterClosed()
          ),
          filter(confirmDelete => !!confirmDelete),
          tap(user => this.vm.setState({ deletingUserId: user.id })),
          flatMap(user => this.userService.delete(user)),
          tap(() => this.vm.setState({ deletingUserId: undefined })),
          tap(() => this.fetchUsersEffect$.next())
        )
    )
  }

}
