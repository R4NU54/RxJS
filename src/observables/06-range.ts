
import { of, range, asyncScheduler, observeOn } from "rxjs";

// const obs1$ = of(1,2,3,4,5);

// asyncScheduler es un scheduler que permite ejecutar el observable de manera asincrona
// const obs2$ = range(1, 5, asyncScheduler); Forma: Deprecated

const obs2$ = range(1, 5).pipe(observeOn(asyncScheduler));

// obs1$.subscribe(console.log);

console.log('Inicio');
obs2$.subscribe(console.log);
console.log('Fin');