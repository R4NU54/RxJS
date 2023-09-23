 import { Observable, fromEvent , pluck } from "rxjs";

    // range(1, 5).pipe(
    //     map<number, string>((x) => (x * 10).toString())
    // )
    // .subscribe((x) => console.log(x));

    const keyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup')
    
       const keyUpPluck$ = keyUp$.pipe(
        pluck('key', 'baseURI')
    )
    
    
    keyUp$.subscribe( console.log)
    
    keyUpPluck$.subscribe( key => console.log('pluck:' , key))