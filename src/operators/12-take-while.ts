import { fromEvent, map, takeWhile } from "rxjs";


// const click$ = fromEvent<PointerEvent>(document, 'click');
const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({x,y}) ),
    
    takeWhile(({y}) => y <= 150, true)
    )

.subscribe({
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')})




