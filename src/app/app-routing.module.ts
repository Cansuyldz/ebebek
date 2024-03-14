import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";


@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

