import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesUserComponent } from './pages-user/pages-user.component';

const routes: Routes = [
  {path:'',component:PagesUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
