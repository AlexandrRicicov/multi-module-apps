import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CounterComponent } from './counter/counter.component';


@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: 'app1',
        component: CounterComponent
      },
      {
        path: 'app2',
        loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.AppModule)
      },
      {
        path: '**',
        component: CounterComponent
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
