import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

// const fetchPromesa = fetch(url);

// const manejaErrores = (resp: Response) => {
//     if (!resp.ok){
//         throw new Error(resp.statusText);
//     }
// }

const atrapaError = (err: AjaxError) => {
  console.warn('error en:', err.message);
  return of([]);
};

// fetchPromesa.then(manejaErrores)
//             .then(resp => resp.json())
//             .then(data => console.log('data:', data))
//             .catch(err => console.warn('error:', err));

ajax(url)
  .pipe(
    map(resp => resp.response),
    catchError(atrapaError)
  )
  .subscribe(users => console.log('usuarios:', users));
