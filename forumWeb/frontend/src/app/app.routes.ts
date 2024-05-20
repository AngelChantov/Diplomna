import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {EnglishComponent} from "./english/english.component";
import {SchoolComponent} from "./school/school.component";
import {GermanComponent} from "./german/german.component";
import {AdminComponent} from "./admin/admin.component";
import {AboutUsComponent} from "./about-us/about-us.component";


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
    component: SchoolComponent




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
  },

  {
    path:"school",
    component: SchoolComponent
  },

    {
      path:"about",
      component: AboutUsComponent
    },
  {
    path:"admin",
    component: AdminComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
