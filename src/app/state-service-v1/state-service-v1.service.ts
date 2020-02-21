import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, timer } from 'rxjs';
import { delay, flatMap, map, mapTo, scan, shareReplay, switchMap, take, tap } from 'rxjs/operators';

interface State<T> {
  loading: boolean;
  items: T[];
}

interface StateEvent<T> {
  type: 'load' | 'loaded' | 'add' | 'delete' | 'reset'
  payload?: Partial<State<T>>
}

@Injectable({
  providedIn: 'root'
})
export class StateServiceV1<T> {
  private initalState: State<T> = {
    loading: false,
    items: []
  }

  private STATE = new BehaviorSubject<State<T>>(this.initalState);
  state$ = this.STATE.asObservable();

  private events$ = new Subject<StateEvent<T>>()
  history$: Observable<StateEvent<T>[]> = this.events$
    .pipe(
      scan((acc: StateEvent<T>[], curr: StateEvent<T>) => [...acc, curr], []),
      shareReplay(1)
    )

  constructor() {
    this.events$
      .pipe(
        tap(event => console.log(event)),
        tap(event => {
          const sideEffect = this.handleSideEffects(event)
            if (sideEffect) {
              sideEffect.pipe(take(1))
                .subscribe(sideEffectEvent => {
                  this.dispatch(sideEffectEvent)
                })
            }
          }
        ),
        map(event => this.handleEvents(event, this.STATE.value))
      )
      .subscribe(state => this.STATE.next(state))
  }

  dispatch(event: StateEvent<T>) {
    this.events$.next(event)
  }

  handleEvents(event: StateEvent<T>, currentState: State<T>): State<T> {
    switch (event.type) {
      case 'add':
        return {
          ...currentState,
          items: [...currentState.items, ...event.payload.items]
        }
      case 'delete':
        return {
          ...currentState,
          items: currentState.items
        }
      case 'load':
        return {
          loading: true,
          items: []
        }
      case 'loaded':
        return {
          loading: false,
          items: event.payload.items
        }
      case 'reset':
        return this.initalState
      default:
        return currentState
    }
  }

  handleSideEffects(event: StateEvent<T>): Observable<StateEvent<T>> {
    switch (event.type) {
      case 'load':
        return timer(5000)
          .pipe(
            mapTo({
              type: 'loaded',
              payload: {
                items: [
                  { title: 'TODO 1', done: false} as any,
                  { title: 'TODO 2', done: false} as any,
                  { title: 'TODO 3', done: false} as any,
                  { title: 'TODO 4', done: false} as any,
                  { title: 'TODO 5', done: false} as any
                ]
              }
            } as StateEvent<T>)
          )
    }
  }

  loadData() {

  }

}
