import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent,
  },
  {
    path: 'design',
    component: DesignComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
