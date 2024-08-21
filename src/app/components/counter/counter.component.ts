import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

// local module imports
import { increment, decrement, reset, setCounter } from './actions/counter.action';
import { selectCounter } from './selectors/counter.selector';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$!:Observable<number>;
  

  constructor (
    private store: Store<{counter: number}>,
  ) {
    this.count$ = this.store.select(selectCounter);
    this.count$.subscribe(value => localStorage.setItem('counter', JSON.stringify(value)));

  };

  increase () {
    this.store.dispatch(increment());
  };

  decrease () {
    this.store.dispatch(decrement());
  };

  reset () {
    this.store.dispatch(reset());
  };

  setCounter (value:string) {
    this.store.dispatch(setCounter(+value));
  }

}

