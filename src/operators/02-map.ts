 import { Observable, fromEvent, map, } from "rxjs";

    // range(1, 5).pipe(
    //     map<number, string>((x) => (x * 10).toString())
    // )
    // .subscribe((x) => console.log(x));

    const keyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup')
    
    const keyUpKey$ = keyUp$.pipe(
        map<KeyboardEvent, string>(event => event.key)
    );

    keyUpKey$.subscribe( key => console.log('map:' , key))