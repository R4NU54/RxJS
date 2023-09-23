// HTML

import { catchError, exhaustMap, fromEvent, map, of, tap } from 'rxjs';
import { AjaxResponse, ajax } from 'rxjs/ajax';

import { UserPass } from '../interfaces/userpass';
import { LoginResponse } from '../interfaces/login-response';

const form = document.createElement('form')!;
const inputEmail = document.createElement('input')!;
const inputPass = document.createElement('input')!;
const submitBtn = document.createElement('button')!;

// Helpers

const peticionHttpLogin = (userPass: UserPass) =>
  ajax.post<AjaxResponse<LoginResponse>>('https://reqres.in/api/login?delay=1', userPass).pipe(
    map(res => res.response.token),
    catchError(err => of('Error', err.response.error))
  );

// Config

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Submit';

// Append

form.append(inputEmail, inputPass, submitBtn);
document.body.append(form);

// Stream

const submit$ = fromEvent<Event>(form, 'click').pipe(
  tap(e => e.preventDefault()),
  map(e => {
    const target = e.target as HTMLFormElement;
    if (target) {
      return {
        email: target.form[0].value,
        password: target.form[1].value,
      };
    }
    return null;
  }),
  exhaustMap(userPass => (userPass ? peticionHttpLogin(userPass) : of('Error')))
);

submit$.subscribe(token => console.log(token));
