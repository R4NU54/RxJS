 import { Observable, fromEvent, mapTo  } from "rxjs";

    // range(1, 5).pipe(
    //     map<number, string>((x) => (x * 10).toString())
    // )
    // .subscribe((x) => console.log(x));

    const keyUp$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup')
     
    const keyUpMapTo$ = keyUp$.pipe(
        mapTo('Tecla Presionada')
    )
    
    keyUp$.subscribe( console.log)
    keyUpMapTo$.subscribe( key => console.log('MapTo:' , key))