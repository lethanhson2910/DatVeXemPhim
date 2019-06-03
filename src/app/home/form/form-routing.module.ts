import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { CanDeactivateGuard, CanDeactivateDangNhapGuard } from 'src/_core/guards/can-deactivate.guard';

const routes: Routes = [

    {
        path: "",
        component: FormComponent,
        children: [
            //Dang ki
            {
                path:"",
                component: DangKyComponent,
                canDeactivate: [CanDeactivateGuard]
            },

            {
                path:"dang-ky",
                component: DangKyComponent,
                canDeactivate: [CanDeactivateGuard]
            },

            //Dang nhap
            {
                path:"dang-nhap",
                component: DangNhapComponent,
                canDeactivate: [CanDeactivateDangNhapGuard]
            },

        ]
    },


        
];

@NgModule({
    // forChild
  imports: [RouterModule.forChild(routes)],
  providers: [CanDeactivateGuard, CanDeactivateDangNhapGuard],
  exports: [RouterModule]
})
export class FormRoutingModule { }
