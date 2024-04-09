import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";


export const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  /*{
    path: "",
    redirectTo: "/home",
    pathMatch: "full"

  },
  {
    path:"home",
    component: LoginComponent

  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
