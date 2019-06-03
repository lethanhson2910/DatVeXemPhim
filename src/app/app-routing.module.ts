import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    //home
    // {path: "", loadChildren: "./home/home.module#HomeModule"},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", loadChildren: "./home/home.module#HomeModule"},

    //admin
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
