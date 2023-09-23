import { Observable, Observer } from "rxjs";

const nombre: string = "Raúl";

// const obs$ = Observable.create();

const observer:Observer<string> = {
    next: value => console.log("siguiente [next]: ", value),
    error: error => console.warn("error [obs]: ", error),
    complete: () => console.info("Completado [obs]")
}

const obs$ = new Observable<string>((subs) => {
    subs.next("Hola,");
    subs.next(nombre);
    subs.next("Hola,");
    subs.next(nombre);

    // Forzar un error
    // const a = undefined; 
    // a.nombre = "Raúl";
    
    subs.complete();
    
    subs.next("Hola,");
    subs.next(nombre);
})

// obs$.subscribe(console.log);

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log("next: ", valor),
//     error => console.warn("error: ", error),
//     () => console.info("Completado")
// );

