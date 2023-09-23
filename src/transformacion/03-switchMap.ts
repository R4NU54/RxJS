import { Observable, fromEvent, map, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { GitHubUser } from '../interfaces/github-user';

import { GitHubUsersResp } from '../interfaces/github-users';

// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body!.append(textInput, orderList);

//helpers
const showUsers = (users: GitHubUser[]) => {
  console.log(users);
  orderList.innerHTML = '';

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'View page';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
  .pipe(
    switchMap<KeyboardEvent, Observable<GitHubUsersResp>>(event =>
      ajax.getJSON(`https://api.github.com/search/users?q=${(event.target as HTMLInputElement).value}`)
    ),
    map<GitHubUsersResp, GitHubUser[]>(user => user.items)
  )
  .subscribe(showUsers);

// const url = 'https://httpbin.org/delay/1?arg=';

// input$.pipe(
//   map(event => url + event.target['value']),
//   switchMap(texto => ajax.getJSON(url+texto))
// ).subscribe(console.log);
