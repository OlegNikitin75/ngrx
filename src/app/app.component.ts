import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { clear, countSelector, decrement, increment } from './reducers/counter'
import { map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updateAt?: number
  count$ = this.store.select(countSelector)
  cannotDecrement$ = this.count$.pipe(map(count => count <= 0))

  constructor(private store: Store) {}

  increment(): void {
    this.updateAt = Date.now()
    this.store.dispatch(increment())
  }

  decrement(): void {
    this.updateAt = Date.now()
    this.store.dispatch(decrement())
  }

  clear(): void {
    this.updateAt = Date.now()
    this.store.dispatch(clear())
  }
}
