import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Details } from './details/details';

const routes: Routes = [
  {
    path: "",
    component: List
  },
  {
    path: ":id",
    component: Details
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
