import { catchError, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'r4nu54';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`).pipe(catchError(() => of({}))),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(catchError(() => of({}))),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`).pipe(catchError(() => of({}))),
})
  .pipe(
    catchError(() =>
      of({
        user: {},
        repos: {},
        gists: {},
      })
    )
  )
  .subscribe(console.log);
