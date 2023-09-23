import { Observable, first, fromEvent, map, of, take, tap } from "rxjs";


const click$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first((event) => event.clientY >= 150)
)
.subscribe(
    {
        next: (value) => console.log(value),
        complete: () => console.log('Complete')
    }
)
