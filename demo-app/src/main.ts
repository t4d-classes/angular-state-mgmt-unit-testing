import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { Observable } from "rxjs";
// import { take, skip, map, tap } from 'rxjs/operators';

// // pull
// const o = new Observable<number>(subscriber => {

//   console.log('get the interval started');

//   let t = 0;



//   const handle = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(handle);
//       return;
//     }

//     console.log('generate a new t');
//     subscriber.next(t++);
//   }, 500);

//   // setTimeout(() => {
//   //   clearInterval(handle);
//   //   subscriber.complete();
//   // }, 4000);

// });

// const subscription = o.pipe(
//   skip(5),
//   map(x => x * 2),
//   tap(x => console.log(x)),
// ).subscribe({
//   next: (result) => console.log(result),
//   complete: () => console.log("all done"),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 10000);



