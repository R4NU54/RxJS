import { concat, interval, of, take } from "rxjs";

const intervla$ = interval(1000);

concat(
    intervla$.pipe(take(3) ),
    intervla$.pipe(take(2) ),
    of(1)).subscribe(console.log);