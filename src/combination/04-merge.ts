import { fromEvent, map, merge } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

merge(
  keyup$.pipe(
    map((event: KeyboardEvent) => event.type),
  ),
  click$.pipe(
    map((event: MouseEvent) => event.type),
  )
).subscribe(console.log);