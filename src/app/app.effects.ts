import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  changeUpdatedAt,
  clear,
  decrement,
  increment
} from './reducers/counter'
import { map } from 'rxjs'

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement, clear),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  )

  constructor(private actions$: Actions) {}
}
