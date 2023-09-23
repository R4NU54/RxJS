import { fromEvent, interval, sample } from "rxjs";

const source$ = interval(500);
const click$ = fromEvent(document, 'click');

source$.pipe(
    sample(click$)
).subscribe(console.log);
