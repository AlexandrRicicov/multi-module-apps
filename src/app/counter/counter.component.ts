import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CoreService } from 'coretestdub';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
    private counterService: CoreService
  ) {
    this.count$ = this.store.pipe(select('count'));
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
