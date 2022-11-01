import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0
  updateAt?: number

  get cannotDecrement(): boolean {
    return this.counter <= 0
  }

  increment(): void {
    this.updateAt = Date.now()
    this.counter++
  }

  decrement(): void {
    this.updateAt = Date.now()
    this.counter--
  }

  clear(): void {
    this.updateAt = Date.now()
    this.counter = 0
  }
}
