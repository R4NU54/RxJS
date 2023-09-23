import { Observable, distinct, from, of } from "rxjs";

const numeros$: Observable<number> = of(1,1,1,3,3,2,2,2,3,3,4,5,5,3,1,2);

numeros$.pipe(
    distinct() /// === igualdad de tipo y valor.
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'X'},
    {nombre: 'Dr. Willy'},
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'X'},
]

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);