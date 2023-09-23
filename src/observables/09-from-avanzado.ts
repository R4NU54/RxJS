import{ of, from } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Raúl');

const source$ = from( fetch('https://api.github.com/users/r4nu54') );

// source$.subscribe( async (res) => {

//     const dataResponse = await res.json();
//     console.log( dataResponse );
// });

// source$.subscribe(observer);