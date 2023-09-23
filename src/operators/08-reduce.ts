import { interval, reduce, take, tap } from "rxjs";

const numbers: number[] = [1, 2, 3, 4, 5];

const totalReduce = ( acc:number, cur:number ):number => {
    return acc + cur};

const total = numbers.reduce(totalReduce, 0);
console.log('Total', total);

interval(1000).pipe(
    take(6),
    tap(console.log),
    reduce(totalReduce, 0)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})


