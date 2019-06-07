import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ChiTietPhimComponent } from './danh-sach-phim/chi-tiet-phim/chi-tiet-phim.component';
import { AuthensGuard } from 'src/_core/guards/authens.guard';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [

    //home
    {path: "", 
    component: HomeComponent, 
    children: [
        //trang chủ:
        {path: "", component: TrangChuComponent},
        {path: "home", component: TrangChuComponent},
        
        //danh sách phim
        {path: "danh-sach-phim", component: DanhSachPhimComponent, canActivate: [AuthensGuard]},

        //Chi tiet phim
        // truyền 1 tham số
        {path: "chi-tiet-phim/:id", component: ChiTietPhimComponent}, 

        // truyền nhiều tham số
        // {path: "chi-tiet-phim", component: ChiTietPhimComponent},

        // trang phòng vé
        {path: "phong-ve/:maLichChieu", loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"},

        //trang Form
        {
            path:"form",
            loadChildren: "./form/form.module#FormModule"
        },

        //tin tức
        {path: "tin-tuc", component: TinTucComponent},

        //Pipes
        {path: "pipe", component: PipesComponent}
        
        
    ]}
    
];

@NgModule({
    // forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
