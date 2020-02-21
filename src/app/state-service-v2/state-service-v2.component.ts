import { Component, OnInit } from '@angular/core';
import { StateV2Service } from './state-v2.service';
import { flatMap, map, tap } from 'rxjs/operators';
import { stringify } from 'querystring';
import { RandomUserGenerator } from './random-user.generator';
import { UserService } from './user.service';
import { User } from '../shared/models/user.model';
import { Observable, Subject } from 'rxjs';

interface V2PageState {
  loading: boolean;
  users: User[];
  adding: boolean;
}

const initialState: V2PageState = {
  loading: false,
  users: [],
  adding: false
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
  addUserEvent$ = new Subject<Event>()

  constructor(private vm: StateV2Service<V2PageState>, private userService: UserService) {
    this.userService._populateStubData(3)

    vm.connectEffect(
      this.fetchUsersEffect$
        .pipe(
          tap(() => this.vm.setState({loading: true})),
          flatMap(() => this.userService.get()),
          map(users => this.vm.setState({ loading: false, users }))
        )
    );

    vm.connectEffect(
      this.addUserEvent$
        .pipe(
          tap(() => this.vm.setState({ adding: true })),
          flatMap(() => this.userService.add(RandomUserGenerator.newUser())),
          tap(() => this.vm.setState({ adding: false })),
          tap(() => this.fetchUsersEffect$.next())
        )
    )

    vm.connectEffect(
      this.fetchUsersEffect$
        .pipe(
          tap(() => this.vm.setState({loading: true})),
          flatMap(() => this.userService.get()),
          map(users => this.vm.setState({ loading: false, users }))
        )
    );
  }

  ngOnInit() {
    this.vm.setState(initialState);

    this.fetchUsersEffect$.next();
  }

}
