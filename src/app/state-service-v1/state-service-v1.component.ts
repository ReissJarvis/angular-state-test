import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StateServiceV1 } from './state-service-v1.service';

interface Todo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-state-service-v1',
  templateUrl: './state-service-v1.component.html',
  styleUrls: ['./state-service-v1.component.scss']
})
export class StateServiceV1Component {

  title = 'state-service-test';
  loading$ = this.stateService.state$
    .pipe(
      map(state => state.loading)
    )

  todos$: Observable<Todo[]> = this.stateService.state$
    .pipe(
      map(state => state.items)
    )

  constructor(public stateService: StateServiceV1<Todo>) { }

  load() {
    this.stateService.dispatch({
      type: 'load'
    })
  }

  clear() {
    this.stateService.dispatch({
      type: 'reset'
    })
  }

}
