import { map, range, tap } from "rxjs";

const numbers =range(1, 5);

numbers.pipe(
    tap(x => console.log('antes', x)),
    map(x => x * 10),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('completado')
    })
)

.subscribe(x => console.log('subs',x));