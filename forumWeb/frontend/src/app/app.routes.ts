import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {EnglishComponent} from "./english/english.component";
import {ApplyComponent} from "./apply/apply.component";
import {GermanComponent} from "./german/german.component";
import {AdminComponent} from "./admin/admin.component";


export const routes: Routes = [


  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"


  },
  {
    path:"home",
    component: HomeComponent




  },
  {
    path:"apply",
    component: ApplyComponent




  },
  {
    path:"german",
    component: GermanComponent




  },
  {
    path:"admin",
    component: AdminComponent




  },


  {
    path:"english",
    component: EnglishComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
