import { of, take, tap } from "rxjs";


const number = of(1, 2, 3, 4, 5);

number.pipe(   
    tap(value => console.log(`Before take: ${value}`)),
    take(3),
    tap(value => console.log(`After take: ${value}`)),
).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Complete!')
});