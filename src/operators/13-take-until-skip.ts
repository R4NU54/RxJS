import { fromEvent,  interval,  skip,  takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Detener contador";
document.querySelector("body").append(button);

const counter$ = interval(1000)
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despues de skip')),
)

counter$.pipe(

    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})

counter$.pipe()
