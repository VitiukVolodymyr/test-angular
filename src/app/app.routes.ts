import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { TemplateFormComponent } from './components/templateForm.component';
import { ReactiveFormComponent } from './components/reactiveForm.component';
import { CarComponent } from './components/car.component';
import { PipesComponent } from './components/pipes.component';
import { EssenceTaskComponent } from './essenceTask/essenceTask.component';

export const routes: Routes = [
  { path: '', title: 'App Home Page', component: HomeComponent },
  { path: 'user', title: 'User page', component: UserComponent },
  {
    path: 'template-form',
    title: 'Template form page',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    title: 'Reactive form page',
    component: ReactiveFormComponent,
  },
  {
    path: 'injection',
    title: 'injection example page',
    component: CarComponent,
  },
  {
    path: 'pipes',
    title: 'pipes example page',
    component: PipesComponent,
  },
  {
    path: 'essence',
    title: 'Essence task page',
    component: EssenceTaskComponent,
  },
];
