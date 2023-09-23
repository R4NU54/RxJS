import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.getJSON(url).subscribe(console.log);

// ajax.post(url, {
//     id: 1,
//     nombre: 'Raúl'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// ajax.put(url, {
//     id: 1,
//     nombre: 'Raúl'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// ajax.delete(url,
//  {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'ABC123',
  },
  body: {
    id: 1,
    nombre: 'Raúl',
  },
}).subscribe(console.log);
