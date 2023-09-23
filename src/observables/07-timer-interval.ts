import { timer, interval } from "rxjs";

const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 ); // agregamos 5 segundos

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');

