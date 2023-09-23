import { Observable, Observer, Subject } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error:", error),
    complete: () => console.info("Completado")
}

const intervalo$ = new Observable<number>( subscriber => {
    const IntervalId = setInterval( () => {
        subscriber.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(IntervalId);
        console.log("Intervalo destruido");
    }

});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const sub1 = intervalo$.subscribe( rnd => console.log('sub1', rnd) );
// const sub2 = intervalo$.subscribe( rnd => console.log('sub2', rnd));

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe(observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);