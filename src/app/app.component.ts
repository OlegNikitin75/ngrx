import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  clear,
  countSelector,
  decrement,
  increment,
  updatedAtSelector
} from './reducers/counter'
import { map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector)
  cannotDecrement$ = this.count$.pipe(map(count => count <= 0))
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {}

  increment(): void {
    this.store.dispatch(increment())
  }

  decrement(): void {
    this.store.dispatch(decrement())
  }

  clear(): void {
    this.store.dispatch(clear())
  }
}
