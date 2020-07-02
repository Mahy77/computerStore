import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import { AddOrdinateurComponent } from './components/add-ordinateur/add-ordinateur.component';
import { OrdinateurDetailComponent } from './components/ordinateur-detail/ordinateur-detail.component';
import { EditOrdinateurComponent } from './components/edit-ordinateur/edit-ordinateur.component';


const routes: Routes = [
  { path: '', redirectTo: 'ordinateur', pathMatch: 'full'},
  {path: 'ordinateur', component: OrdinateurComponent},
  {path:  'ordinateur/add', component: AddOrdinateurComponent},
  {path: 'ordinateur/:id', component: OrdinateurDetailComponent},
  {path: 'editordinateur/:id', component: EditOrdinateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
