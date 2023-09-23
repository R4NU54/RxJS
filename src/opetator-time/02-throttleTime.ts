import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map,  pluck, throttleTime } from "rxjs";

const click$ = fromEvent(document, 'click');

// click$.pipe(
//     throttleTime(3000)
// ).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body')!.append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
        map(({ target }) => target!.value!),
    // pluck('target', 'value'), Deprecated
    distinctUntilChanged()
).subscribe(console.log);