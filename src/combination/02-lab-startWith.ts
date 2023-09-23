import { startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const loadinDiv = document.createElement('div');
loadinDiv.classList.add('loading');
loadinDiv.innerHTML = 'Loading...';

const body = document.querySelector('body');

// Stream

ajax
  .getJSON('https://reqres.in/api/users/2?delay=3')
  .pipe(startWith(true))
  .subscribe(resp => {
    if (resp === true) {
      body!.append(loadinDiv);
    } else {
      document.querySelector('.loading')?.remove();
    }
    console.log(resp);
  });
