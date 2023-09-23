import { filter, from, range } from "rxjs";

// range(1,10).pipe(
//     filter( value => value % 2 === 1 )
// ).subscribe(console.log)

// range(1,10).pipe(
//     filter( (value , i)=> {
//         console.log('index', i);
//         return value % 2 === 1 })
// ).subscribe(console.log)

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
]


const obs = from(personajes)

obs.pipe(
    filter( personaje => personaje.tipo === 'heroe')
).subscribe(hero => console.log(hero))